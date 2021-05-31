import React from "react";
import Layout from "./Layout";
import Tile1 from "../assets/img/tile1gray.png";
import Tile2 from "../assets/img/tile2gray.png";
import Tile3 from "../assets/img/tile3gray.png";
import User from "./User";

export default function Tiles() {
  return (
    <div>
      <Layout>
        <User
          title={"Communication unifiée."}
          paragraph={`Nomad rassemble tous les modes de communication pour faciliter les
            échanges entre les gestionnaires, les fournisseurs et les résidents.
            L'ensemble de l'écosystème est tenu informé de l'avancement des
            dossiers.`}
          user={"Gestionnaires"}
          announce={`Facilitation à la visibilité des projets et à l'information du
            produit`}
          image={Tile1}
        />
        <User
          title={"La gestion immobilière enfin visible."}
          paragraph={`Les gestionnaires, les bailleurs sociaux, les syndics et les administrateurs de biens proposent un service de qualité, mais ont du mal à le montrer. Nomad les aide à rendre leur travail visible auprès des clients.`}
          user={"Bailleurs sociaux"}
          announce={`Amélioration des processus de ventes menant à un chiffre d'affaires plus stable`}
          image={Tile2}
          inverted={true}
        />
        <User
          title={"Connaitre ses droits."}
          paragraph={`On ne peut pas parler d'immobilier sans parler de droit. C'est précisément ce qui rend complexe une recherche immobilière : droit immobilier, droit des copropriétés, droit de la consommation, etc.`}
          user={"Agences immobilières"}
          announce={`Mise en connaissance de ses droits et multiplication des opportunités`}
          image={Tile3}
        />
      </Layout>
    </div>
  );
}
