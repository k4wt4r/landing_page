import React from "react";
import Image from "next/image";
import imagephotography from "../public/images/imagephotography.jpg";
import imagegraphicdesign from "../public/images/imagegraphicdesign.jpg";

function Graphic() {
  return (
    <div className="w-full flex flex-row">
      <div className=" w-1/2 ">
        <Image
          src={imagegraphicdesign}
          alt="graphic design"
          layout="responsive"
          width={800}
          height={800}
          objectFit="cover"
        />
      </div>
      <div className="aspect-square">
        <Image
          src={imagephotography}
          alt="imagephotography"
          width={960}
          height={960}
        />
      </div>
    </div>
  );
}

export default Graphic;
