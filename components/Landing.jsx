import React from "react";
import Image from "next/image";
import imageheader from "../public/images/imageheader.jpg";

function Landing() {
  return (
    <div className="h-screen w-full  bg-transparent relative">
      <Image
        src={imageheader}
        alt="image-header"
        layout="fill"
        objectFit="cover"
      />
      <p>test</p>
    </div>
  );
}

export default Landing;
