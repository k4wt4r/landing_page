import React from "react";
import Image from "next/image";
import imageheader from "../public/images/imageheader.jpg";

function Landing() {
  return (
    <div className="h-screen w-full flex relative">
      <p className=" w-full text-center text-6xl text-white font-bold  font-serif flex items-center justify-center mb-60 z-20">
        WE ARE CREATIVES
      </p>
      <Image
        className="bg-local"
        src={imageheader}
        alt="image-header"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default Landing;
