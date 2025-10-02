export const metadata = {
  title: "Politique de cookies | G.TRAVAUX",
  description: "Informations sur l'usage des cookies et technologies similaires sur ce site.",
};

/**
 * TODO à remplacer :
 * - EN_ATTENTE_ANALYTICS (outil utilisé, ou 'aucun')
 */
export default function Page() {
  return (
    <main className="prose prose-neutral max-w-3xl px-4 py-12">
      <h1>Politique de cookies</h1>
      
      <h2>Qu'est-ce qu'un cookie ?</h2>
      <p>
        Un cookie est un petit fichier déposé sur votre terminal pour assurer le bon fonctionnement du site,
        réaliser des statistiques ou personnaliser votre expérience.
      </p>
      
      <h2>Cookies que nous utilisons</h2>
      <ul>
        <li><strong>Cookies strictement nécessaires</strong> (ex. équilibrage de charge, sécurité, préférence de langue).</li>
        <li><strong>Mesure d'audience :</strong> EN_ATTENTE_ANALYTICS (mode sans cookie ou avec consentement le cas échéant).</li>
        <li><strong>Fonctionnels :</strong> sauvegarde temporaire des champs de formulaires / états d'interface.</li>
      </ul>

      <h2>Gestion du consentement</h2>
      <p>
        Lorsqu'exigé, votre consentement est recueilli via notre bandeau de consentement. Vous pouvez à tout moment
        modifier vos préférences en cliquant sur "Gérer mes cookies".
      </p>
      
      <h2>Durée de vie</h2>
      <p>
        <strong>Essentiels :</strong> session ; <strong>mesure d'audience :</strong> 6 à 13 mois selon paramétrage ; <strong>préférences :</strong> 6 à 12 mois.
      </p>
      
      <h2>Paramétrer votre navigateur</h2>
      <p>
        Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. Le refus de certains cookies
        peut altérer l'expérience utilisateur.
      </p>
      
      <h2>Contact</h2>
      <p>Pour toute question : contact@g-travaux.fr.</p>
    </main>
  );
}