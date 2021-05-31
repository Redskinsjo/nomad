import React from "react";

export default function User({
  title,
  paragraph,
  user,
  announce,
  image,
  inverted,
}) {
  return (
    <div className="flex my-8">
      {inverted ? null : (
        <div className="flex flex-col py-4 pl-12 pr-28 w-1/2 space-y-8">
          <div>
            <h2 className="font-radikal-bold text-3xl">{title}</h2>
          </div>
          <div>
            <p className="font-roboto-thin text-xl">{paragraph}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col w-1/2 p-2 m-4 bg-section-hero hover:bg-tiles cursor-pointer">
        <div className="h-114px">
          <div className="flex flex-col h-full items-center mx-auto">
            <div className="flex-1">
              <span className="font-roboto-thin text-2xl font-bold">
                {user}
              </span>
            </div>
            <div className="flex-1 flex items-center">
              <p className="font-thin">{announce}</p>
            </div>
            <div className="flex flex-1 text-green-nomad group cursor-pointer">
              <span className="group-hover:underline">Découvrir</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-114px flex items-center justify-center">
          <img
            src={image}
            alt="tile-gestionnaire"
            className="h-96px w-3/4 object-cover rounded-lg"
          />
        </div>
      </div>
      {inverted ? (
        <div className="flex flex-col py-4 pl-12 pr-28 w-1/2 space-y-8">
          <div>
            <h2 className="font-radikal-bold text-3xl">{title}</h2>
          </div>
          <div>
            <p className="font-roboto-thin text-xl">{paragraph}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
