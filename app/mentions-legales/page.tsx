export const metadata = {
  title: "Mentions légales | G.TRAVAUX",
  description: "Informations légales de G.TRAVAUX : éditeur, hébergeur, coordonnées et responsabilités.",
};

/**
 * TODO à remplacer dès dispo :
 * - EN_ATTENTE_TVA (si attribué, sinon préciser non assujetti)
 * - EN_ATTENTE_ASSUREUR / EN_ATTENTE_NUMERO_POLICE
 * - EN_ATTENTE_MEDIATEUR / EN_ATTENTE_URL_MEDIATEUR (si B2C)
 */
export default function Page() {
  return (
    <main className="prose prose-neutral max-w-3xl px-4 py-12">
      <h1>Mentions légales</h1>
      
      <h2>Éditeur du site</h2>
      <p>
        <strong>Dénomination :</strong> G.TRAVAUX<br />
        <strong>Forme juridique :</strong> SAS — Capital : 200 €<br />
        <strong>Siège social :</strong> 3 Rue du Vingt-Deux Novembre, 67000 Strasbourg<br />
        <strong>RCS :</strong> Strasbourg — SIREN : 930 621 875 — SIRET (siège) : 930 621 875 00010<br />
        <strong>Code APE :</strong> 43.99C — Travaux de maçonnerie générale et gros œuvre de bâtiment<br />
        <strong>TVA intracom :</strong> EN_ATTENTE_TVA<br />
        <strong>Tél. :</strong> 09 00 00 00 00 — Email : contact.gtravaux@gmail.com
      </p>

      <h2>Responsable de publication</h2>
      <p>Ali GHERIB, Président.</p>

      <h2>Hébergement</h2>
      <p>
        <strong>Hébergeur :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.<br />
        <strong>Site :</strong> vercel.com
      </p>
      
      <h2>Assurances</h2>
      <p>
        <strong>Responsabilité civile professionnelle et garantie décennale :</strong> EN_ATTENTE_ASSUREUR (n° de police : EN_ATTENTE_NUMERO_POLICE).
      </p>
      
      <h2>Médiation de la consommation</h2>
      <p>
        Conformément à l'article L.616-1 du Code de la consommation, G.TRAVAUX propose un dispositif de médiation.<br />
        <strong>Organisme :</strong> EN_ATTENTE_MEDIATEUR — <a href="EN_ATTENTE_URL_MEDIATEUR">Site du médiateur</a>.
      </p>
      
      <h2>Propriété intellectuelle</h2>
      <p>
        Le présent site et l'ensemble de ses contenus (textes, images, logos, marques, etc.) sont protégés par le
        droit d'auteur et le droit des marques. Toute reproduction ou représentation, totale ou partielle, sans
        autorisation écrite est interdite.
      </p>
      
      <h2>Responsabilité</h2>
      <p>
        Les informations sont fournies à titre indicatif. G.TRAVAUX met tout en œuvre pour assurer l'exactitude
        des contenus mais ne peut garantir l'absence d'erreurs. L'utilisation du site se fait sous la responsabilité
        de l'utilisateur.
      </p>
      
      <h2>Liens externes</h2>
      <p>
        Des liens hypertextes peuvent renvoyer vers des sites tiers. G.TRAVAUX n'exerce aucun contrôle sur ces sites
        et décline toute responsabilité quant à leurs contenus.
      </p>
      
      <h2>Contact</h2>
      <p>Pour toute question, écrivez-nous à contact.gtravaux@gmail.com ou appelez le 09 00 00 00 00.</p>
    </main>
  );
}