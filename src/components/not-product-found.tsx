import React from "react";

export const NotProductFound: React.FC = () => {
  return (
    <div className="w-[200px] absolute bottom-[-50px] left-[calc(50%-200px)] flex flex-col items-center">
      <p className="font-mono font-bold text-xl">Not product found</p>
      <img
        className="w-full"
        src="https://cdn.pixabay.com/photo/2018/10/31/03/20/search-3785148_1280.png"
        alt="not-produdct-found"
      />
    </div>
  );
};
