import React from "react";
import Logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="flex h-316px py-65px px-130px border-t border-gray-200">
      <div className="max-w-screen-lg flex flex-wrap xl:flex-nowrap mx-auto">
        <div className="flex h-26px mb-8">
          <img src={Logo} alt="logo-footer" />
        </div>
        <div className="footer-part">
          <h3 className="text-green-nomad">UTILISATEURS</h3>
          <ul className="footer-part-list">
            <li>Gestionnaire</li>
            <li>Bailleur social</li>
            <li>Agence immobilière</li>
            <li>Particuliers</li>
          </ul>
        </div>
        <div className="footer-part">
          <h3 className="text-green-nomad">PRINCIPES</h3>
          <ul className="footer-part-list">
            <li>Connect</li>
            <li>Support</li>
            <li>Decide</li>
          </ul>
        </div>
        <div className="footer-part">
          <h3 className="text-green-nomad">EN SAVOIR PLUS</h3>
          <ul className="footer-part-list">
            <li>L'équipe</li>
            <li>Blog</li>
            <li>Conditions d'utilisation</li>
            <li>Confidentialité</li>
          </ul>
        </div>
        <div className="footer-part">
          <h3 className="text-green-nomad">NOUS SUIVRE</h3>
          <ul className="footer-part-list">
            <li className="footer-part-list-item">
              <FontAwesomeIcon icon={["fab", "twitter"]} className="w-4" />
              <span>Twitter</span>
            </li>
            <li className="footer-part-list-item">
              <FontAwesomeIcon
                icon={["fab", "facebook-square"]}
                className="w-4"
              />
              <span>Facebook</span>
            </li>
            <li className="footer-part-list-item">
              <FontAwesomeIcon icon={["fab", "instagram"]} className="w-4" />
              <span>Instagram</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
