import React from "react";
import Image from "next/image";
import imagetransform from "../public/images/imagetransform.jpg";

function Transform() {
  return (
    <div className="  w-full  flex flex-row ">
      <div className=" flex flex-col justify-center items-center w-1/2 aspect-square">
        <h1 className="text-right text-gray-800 font-bold text-3xl font-serif mb-12">
          Transform your brand
        </h1>
        <p className="text-center w-1/2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <h2 className="font-bold text-lg underline decoration-yellow-200 decoration-4 m-16">
          LEARN MORE
        </h2>
      </div>
      <div className="w-1/2 aspect-square relative">
        <Image
          src={imagetransform}
          alt="imagetransform"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Transform;
