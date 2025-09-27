// Script de test pour vérifier l'ordre des services
const { getServices } = require('./lib/staticData.ts');

async function testServicesOrder() {
  try {
    const services = await getServices();
    console.log('Services dans l\'ordre alphabétique :');
    services.forEach((service, index) => {
      console.log(`${index + 1}. ${service.title} -> ${service.href}`);
    });
    
    // Vérifier que les services Électricité et Plomberie sont séparés
    const electricite = services.find(s => s.title === 'Électricité');
    const plomberie = services.find(s => s.title === 'Plomberie');
    
    if (electricite && plomberie) {
      console.log('\n✅ Services Électricité et Plomberie sont bien séparés');
      console.log(`   Électricité: ${electricite.href}`);
      console.log(`   Plomberie: ${plomberie.href}`);
    } else {
      console.log('\n❌ Problème: Services Électricité et/ou Plomberie manquants');
    }
    
    // Vérifier l'ordre alphabétique
    const titles = services.map(s => s.title);
    const sortedTitles = [...titles].sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
    
    if (JSON.stringify(titles) === JSON.stringify(sortedTitles)) {
      console.log('\n✅ L\'ordre alphabétique est correct');
    } else {
      console.log('\n❌ Problème d\'ordre alphabétique');
      console.log('Ordre actuel:', titles);
      console.log('Ordre attendu:', sortedTitles);
    }
    
  } catch (error) {
    console.error('Erreur:', error);
  }
}

testServicesOrder();