import React from "react";
import Image from "next/image";
import imagegallerymilkbottles from "../public/images/imagegallerymilkbottles.jpg";
import imagegalleryorange from "../public/images/imagegalleryorange.jpg";
import imagegallerycone from "../public/images/imagegallerycone.jpg";
import imagegallerysugarcubes from "../public/images/imagegallerysugarcubes.jpg";

function SunnySideImg() {
  return (
    <section className="w-full flex ">
      <Image src={imagegallerymilkbottles} alt="milkbottles" />
      <Image src={imagegalleryorange} alt="orange" />
      <Image src={imagegallerycone} alt="cone" />
      <Image src={imagegallerysugarcubes} alt="sugarcubes" />
    </section>
  );
}

export default SunnySideImg;
