import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  phone: string;
  service?: string;
  honeypot?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Honeypot check - if filled, it's likely spam
    if (data.honeypot && data.honeypot.trim() !== '') {
      return NextResponse.json(
        { success: false, message: 'Requête invalide' },
        { status: 400 }
      );
    }

    // Basic validation
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { success: false, message: 'Nom et téléphone sont requis' },
        { status: 400 }
      );
    }

    // Validate phone number (basic French format)
    const phoneRegex = /^(?:(?:\+33|0)[1-9](?:[0-9]{8}))$/;
    const cleanPhone = data.phone.replace(/[\s\-\.]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, message: 'Format de téléphone invalide' },
        { status: 400 }
      );
    }

    // Validate name (no numbers, reasonable length)
    if (data.name.length < 2 || data.name.length > 50 || /\d/.test(data.name)) {
      return NextResponse.json(
        { success: false, message: 'Nom invalide' },
        { status: 400 }
      );
    }

    // Log the contact request (in a real app, you'd save to database or send email)
    console.log('Nouvelle demande de contact:', {
      name: data.name,
      phone: cleanPhone,
      service: data.service || 'Non spécifié',
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Merci ! Nous vous rappellerons dans les plus brefs délais.'
    });

  } catch (error) {
    console.error('Erreur lors du traitement de la demande de contact:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Utilisez POST pour envoyer une demande de contact' },
    { status: 405 }
  );
}