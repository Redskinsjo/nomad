import React from "react";
import Layout from "./Layout";

export default function Questions() {
  return (
    <div className="bg-blue-nomad py-12">
      <Layout>
        <div className="flex flex-col space-y-8 items-center w-full">
          <div>
            <h2 className="font-radikal-bold text-5xl text-white">
              Vous avez des questions ?
            </h2>
          </div>
          <div className="max-w-950px">
            <p className="font-roboto-thin text-white text-center">
              Que ce soit pour vous aider à faire le point sur vos besoins ou
              vous présenter les avantages et fonctionnalités de Nomad, nous
              sommes là.
            </p>
          </div>
          <div>
            <button className="text-white bg-green-nomad rounded-lg py-3 px-4 hover:bg-dark-green-nomad">
              Contacter l'équipe commerciale
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}
