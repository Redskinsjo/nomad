import React, { useEffect } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function Header() {
  return (
    <div id="header" className="fixed w-full bg-section-hero top-0">
      <Layout>
        <div className="flex justify-between h-64px p-t-19px p-b-19px p-l-16px p-r-16px border-b border-gray-200">
          <div className="h-26px">
            <Link to="/" className="h-full">
              <img src={Logo} alt="logo" className="cursor-pointer h-full" />
            </Link>
          </div>
          <div className="flex items-center border-blue-nomad border-2 px-4 rounded-lg hover:bg-blue-nomad hover:text-white active:bg-white active:text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs">Se connecter</span>
          </div>
        </div>
      </Layout>
    </div>
  );
}
