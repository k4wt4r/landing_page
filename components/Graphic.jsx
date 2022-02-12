import React from "react";
import Image from "next/image";
import imagephotography from "../public/images/imagephotography.jpg";
import imagegraphicdesign from "../public/images/imagegraphicdesign.jpg";

function Graphic() {
  return (
    <div className="w-full flex flex-row">
      <div className=" aspect-square w-1/2 relative">
        <div className=" flex flex-col h-full w-full justify-end items-center  mb-28 ">
          <h1 className="text-3xl font-bold  text-green-900 opacity-50 mb-8  z-40">
            Graphic Design
          </h1>
          <p className="w-96 text-center text-green-900 opacity-50 text-lg z-40 ">
            Great design make you memorable Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer lobortis efficitur odio ut
            viverra. Vestibulum pellentesque mauris ac eros finibus commodo.
            Etiam sollicitudin, nunc id accumsan
          </p>
        </div>
        <Image
          src={imagegraphicdesign}
          alt="graphic design"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="aspect-square w-1/2 relative">
        <div className=" flex flex-col h-full w-full justify-end items-center  mb-28 ">
          <h1 className="text-3xl font-bold  text-cyan-900 opacity-50 mb-8  z-40">
            Photography
          </h1>
          <p className="w-96 text-center text-cyan-900 opacity-50 text-lg z-40 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lobortis efficitur odio ut viverra. Vestibulum pellentesque mauris
            ac eros finibus commodo. Etiam sollicitudin, nunc id accumsan
          </p>
        </div>
        <Image
          src={imagephotography}
          alt="imagephotography"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Graphic;
