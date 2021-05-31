import React from "react";
import Layout from "./Layout";
import Hero from "../assets/img/hero.png";
import Reputation from "./Reputation";

export default function HeroSection() {
  return (
    <div>
      <div className="bg-section-hero h-638px">
        <Layout>
          <div className="flex w-full">
            <div className="w-full md:w-1/2">
              <h1 className="mt-8 mb-4 font-radikal-bold text-5xl font-bold">
                Gérez les incidents sans efforts.
              </h1>
              <p className="mb-4 font-roboto-thin text-2xl">
                Nomad améliore la relation entre les gestionnaires immobiliers,
                les fournisseurs et les résidents.
              </p>
              <form className="flex flex-wrap">
                <div className="flex flex-col pr-4 space-y-2 mb-4">
                  <label htmlFor="firstname">Prénom</label>
                  <input
                    id="firstname"
                    type="text"
                    className="w-389px md:w-203px box-border px-2 h-12"
                  />
                </div>
                <div className="flex flex-col pr-4 space-y-2">
                  <label htmlFor="lastname">Nom</label>
                  <input
                    id="lastname"
                    type="text"
                    className="w-203px box-border px-2 h-12"
                  />
                </div>
                <div className="flex flex-col pr-4 space-y-2 mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="text"
                    className="w-203px box-border px-2 h-12"
                  />
                </div>
                <div className="flex flex-col pr-4 space-y-2">
                  <label htmlFor="phone">Numéro de téléphone mobile</label>
                  <input
                    id="phone"
                    type="text"
                    className="w-203px box-border px-2 h-12"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="collabs">Nombre de collaborateurs</label>
                  <select id="collabs" className="w-424px box-border px-2 h-12">
                    <option value="">Veuillez sélectionner</option>
                    <option>1-5</option>
                    <option>6-20</option>
                    <option>21-50</option>
                    <option>51-100</option>
                    <option>101-300</option>
                    <option>301-1000</option>
                    <option>+1000</option>
                  </select>
                </div>
                <div className="w-1/2 mt-8">
                  <button className="rounded-md bg-green-nomad text-white h-12 px-2">
                    Obtenir une démo
                  </button>
                </div>
              </form>
            </div>
            <div className="w-1/2 hidden md:block">
              <img src={Hero} alt="hero" />
            </div>
          </div>
        </Layout>
      </div>
      <Reputation />
    </div>
  );
}
