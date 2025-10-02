export const metadata = {
  title: "Politique de confidentialité | G.TRAVAUX",
  description: "Comment G.TRAVAUX collecte, utilise et protège vos données personnelles.",
};

/**
 * TODO à remplacer :
 * - EN_ATTENTE_NOM_DE_DOMAINE (si autre que l'URL Vercel)
 * - EN_ATTENTE_ANALYTICS (ex. Plausible, GA4, Matomo… ou 'aucun')
 * - EN_ATTENTE_DPO_NOM / EN_ATTENTE_DPO_EMAIL (si DPO nommé)
 */
export default function Page() {
  const lastUpdate = new Date().toISOString().slice(0, 10);
  return (
    <main className="prose prose-neutral max-w-3xl px-4 py-12">
      <h1>Politique de confidentialité</h1>

      <p>
        Cette politique décrit la manière dont G.TRAVAUX ("nous") traite les données personnelles des
        utilisateurs du site EN_ATTENTE_NOM_DE_DOMAINE.
      </p>
      
      <h2>Responsable de traitement</h2>
      <p>
        G.TRAVAUX — 3 Rue du Vingt-Deux Novembre, 67000 Strasbourg — contact@g-travaux.fr — 03 67 10 26 53.
      </p>
      
      <h2>Données collectées</h2>
      <ul>
        <li><strong>Formulaire de contact / devis :</strong> identité, coordonnées, contenu du message.</li>
        <li><strong>Données techniques :</strong> journaux serveur, adresse IP, user-agent.</li>
        <li><strong>Mesure d'audience :</strong> données agrégées/anonymisées (voir "Cookies").</li>
      </ul>

      <h2>Finalités et bases légales</h2>
      <ul>
        <li>Répondre aux demandes et établir des devis (mesures précontractuelles).</li>
        <li>Gestion de la relation client et obligations légales (intérêt légitime / obligation légale).</li>
        <li>Mesure d'audience et amélioration du site (consentement si cookies non essentiels).</li>
      </ul>

      <h2>Destinataires & sous-traitants</h2>
      <p>
        Nos prestataires techniques peuvent traiter certaines données pour notre compte : Vercel (hébergement), OUTIL_EMAIL
        (ex. Resend), OUTIL_ANTISPAM (ex. Cloudflare Turnstile), EN_ATTENTE_ANALYTICS (si applicable).
      </p>
      
      <h2>Transferts hors UE</h2>
      <p>
        Lorsque des transferts hors UE sont nécessaires, ils reposent sur des garanties appropriées
        (clauses contractuelles types, décision d'adéquation, mesures complémentaires).
      </p>
      
      <h2>Durées de conservation</h2>
      <ul>
        <li><strong>Prospects :</strong> 3 ans après le dernier contact.</li>
        <li><strong>Clients et documents de facturation :</strong> jusqu'à 10 ans (obligations comptables).</li>
        <li><strong>Logs techniques :</strong> 6 à 12 mois maximum.</li>
      </ul>

      <h2>Vos droits</h2>
      <p>
        Vous disposez des droits d'accès, rectification, effacement, limitation, opposition et portabilité.
        Pour les exercer : contact@g-travaux.fr. Vous pouvez aussi saisir la CNIL (cnil.fr).
      </p>
      
      <h2>Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données contre
        la perte, l'altération et l'accès non autorisé.
      </p>
      
      <h2>Contact DPO (le cas échéant)</h2>
      <p>EN_ATTENTE_DPO_NOM — EN_ATTENTE_DPO_EMAIL.</p>

      <h2>Mises à jour</h2>
      <p><strong>Dernière mise à jour :</strong> {lastUpdate}.</p>
    </main>
  );
}