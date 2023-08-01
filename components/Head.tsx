"use client";

import Image from "next/image";
import Custom_Button from "./Custom_Button";

const Head = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Take a look, search - buy your dream car
        </h1>
        <p className="hero__subtitle">
          New and used cars with better condition in Sri Lanka
        </p>
        <Custom_Button
          title="click here To Explore Cars"
          containerStyle="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="head car"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Head;
