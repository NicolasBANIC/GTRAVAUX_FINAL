'use client';

import { useState } from 'react';
import { FaDownload, FaFileAlt, FaSpinner } from 'react-icons/fa';

interface QuoteData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  services: Array<{
    name: string;
    description: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    total: number;
  }>;
  totalHT: number;
  tva: number;
  totalTTC: number;
  validityDate: string;
  notes?: string;
}

interface QuoteGeneratorPDFProps {
  quoteData: QuoteData;
  onDownload?: () => void;
}

export default function QuoteGeneratorPDF({ quoteData, onDownload }: QuoteGeneratorPDFProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // Import dynamique pour éviter les erreurs SSR
      const [jsPDF, html2canvas] = await Promise.all([
        import('jspdf'),
        import('html2canvas')
      ]);

      const pdf = new jsPDF.default();
      const pageWidth = 210; // A4 width in mm
      const margin = 20;
      let yPosition = margin;

      // Header G.TRAVAUX
      pdf.setFillColor(44, 62, 80); // steelBlue
      pdf.rect(0, 0, pageWidth, 40, 'F');
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.text('G.TRAVAUX', margin, 25);
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('3 Rue du Vingt-Deux Novembre, 67000 Strasbourg', margin, 32);
      pdf.text('Tél: +33 9 72 12 34 56 • contact.gtravaux@gmail.com', margin, 36);

      yPosition = 50;

      // Titre devis
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text('DEVIS', margin, yPosition);
      
      yPosition += 10;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`Date: ${new Date().toLocaleDateString('fr-FR')}`, margin, yPosition);
      pdf.text(`Validité: ${quoteData.validityDate}`, 130, yPosition);
      
      yPosition += 20;

      // Informations client
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('CLIENT', margin, yPosition);
      
      yPosition += 8;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`${quoteData.clientName}`, margin, yPosition);
      yPosition += 5;
      pdf.text(`${quoteData.clientAddress}`, margin, yPosition);
      yPosition += 5;
      pdf.text(`Tél: ${quoteData.clientPhone}`, margin, yPosition);
      if (quoteData.clientEmail) {
        yPosition += 5;
        pdf.text(`Email: ${quoteData.clientEmail}`, margin, yPosition);
      }

      yPosition += 20;

      // Tableau des prestations
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('PRESTATIONS', margin, yPosition);
      
      yPosition += 10;

      // Header tableau
      pdf.setFillColor(240, 240, 240);
      pdf.rect(margin, yPosition - 3, pageWidth - 2 * margin, 8, 'F');
      
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Désignation', margin + 2, yPosition + 2);
      pdf.text('Qté', 100, yPosition + 2);
      pdf.text('P.U. HT', 120, yPosition + 2);
      pdf.text('Total HT', 150, yPosition + 2);
      
      yPosition += 10;

      // Lignes services
      pdf.setFont('helvetica', 'normal');
      quoteData.services.forEach((service) => {
        pdf.text(service.name, margin + 2, yPosition);
        pdf.text(`${service.quantity} ${service.unit}`, 100, yPosition);
        pdf.text(`${service.unitPrice.toFixed(2)}€`, 120, yPosition);
        pdf.text(`${service.total.toFixed(2)}€`, 150, yPosition);
        
        yPosition += 5;
        
        if (service.description) {
          pdf.setFontSize(8);
          pdf.setTextColor(100, 100, 100);
          const splitText = pdf.splitTextToSize(service.description, 80);
          pdf.text(splitText, margin + 4, yPosition);
          yPosition += splitText.length * 3;
          pdf.setFontSize(9);
          pdf.setTextColor(0, 0, 0);
        }
        
        yPosition += 3;
      });

      yPosition += 10;

      // Totaux
      const totalBoxY = yPosition;
      pdf.setFillColor(250, 250, 250);
      pdf.rect(120, totalBoxY, 70, 25, 'F');
      
      pdf.setFontSize(10);
      pdf.text(`Total HT: ${quoteData.totalHT.toFixed(2)}€`, 125, totalBoxY + 8);
      pdf.text(`TVA (${((quoteData.tva / quoteData.totalHT) * 100).toFixed(1)}%): ${quoteData.tva.toFixed(2)}€`, 125, totalBoxY + 15);
      
      pdf.setFont('helvetica', 'bold');
      pdf.text(`Total TTC: ${quoteData.totalTTC.toFixed(2)}€`, 125, totalBoxY + 22);

      yPosition += 35;

      // Conditions
      if (quoteData.notes) {
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.text('NOTES', margin, yPosition);
        yPosition += 8;
        
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        const noteLines = pdf.splitTextToSize(quoteData.notes, pageWidth - 2 * margin);
        pdf.text(noteLines, margin, yPosition);
        yPosition += noteLines.length * 4;
      }

      yPosition += 10;

      // Conditions générales
      pdf.setFontSize(8);
      pdf.setTextColor(100, 100, 100);
      const conditions = [
        '• Devis valable 30 jours à compter de la date d\'émission',
        '• Acompte de 30% à la commande, solde à la livraison',
        '• Assurance décennale incluse • Garantie 2 ans pièces et main d\'œuvre',
        '• Intervention couverte par notre assurance responsabilité civile professionnelle'
      ];
      
      conditions.forEach((condition) => {
        pdf.text(condition, margin, yPosition);
        yPosition += 4;
      });

      // Footer
      yPosition = 280;
      pdf.setFillColor(44, 62, 80);
      pdf.rect(0, yPosition, pageWidth, 17, 'F');
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(8);
      pdf.text('SIRET: 123 456 789 00012 • RGE Qualibat • Assurance Décennale AXA', margin, yPosition + 10);

      // Télécharger
      const fileName = `Devis_G-TRAVAUX_${quoteData.clientName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(fileName);
      
      onDownload?.();
      
    } catch (error) {
      console.error('Erreur génération PDF:', error);
      alert('Erreur lors de la génération du PDF. Veuillez réessayer.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isGenerating ? (
        <>
          <FaSpinner className="animate-spin" />
          <span>Génération...</span>
        </>
      ) : (
        <>
          <FaFileAlt />
          <span>Télécharger PDF</span>
          <FaDownload />
        </>
      )}
    </button>
  );
}