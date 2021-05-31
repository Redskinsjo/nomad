import React from "react";
import Layout from "./Layout";

export default function Statistics() {
  return (
    <div>
      <Layout>
        <div className="flex justify-center max-w-750px mx-auto py-8 space-x-8 md:space-x-40 hover:animate-pulse">
          <div className="statistics">
            <div className="flex items-end">
              <span className="text-2xl md:text-7xl">1,3</span>
              <span className="font-radikal-bold text-md md:text-3xl ml-1">
                M
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-green-nomad text-sm font-bold">LOTS</span>
            </div>
          </div>
          <div className="statistics">
            <div className="flex items-end">
              <span className="text-2xl md:text-7xl">39</span>
              <span className="font-radikal-bold text-md md:text-3xl ml-1">
                k
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-green-nomad text-sm font-bold">
                APPARTEMENTS
              </span>
            </div>
          </div>
          <div className="statistics">
            <div className="flex items-end">
              <span className="text-2xl md:text-7xl">720</span>
              <span className="font-radikal-bold text-lg md:text-3xl ml-1">
                k
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-green-nomad text-sm font-bold">
                TICKETS
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
