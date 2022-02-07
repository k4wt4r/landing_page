import React from "react";
import Image from "next/image";
import imagephotography from "../public/images/imagephotography.jpg";
import imagegraphicdesign from "../public/images/imagegraphicdesign.jpg";

function Graphic() {
  return (
    <div className="w-full flex flex-row">
      <div className=" aspect-square w-1/2 relative">
        <Image
          src={imagegraphicdesign}
          alt="graphic design"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="aspect-square w-1/2 relative">
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
