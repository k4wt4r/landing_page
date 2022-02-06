import React from "react";
import Image from "next/image";
import imagestandout from "../public/images/imagestandout.jpg";

function Stand() {
  return (
    <div className=" w-full flex flex-row ">
      <div className="w-1/2 aspect-square bg-bittersweet">
        <Image
          src={imagestandout}
          alt="image stand out"
          height={1020}
          width={1020}
        />
      </div>
      <div className=" flex flex-col justify-center items-center w-1/2 aspect-square">
        <h1 className="text-center font-bold font-serif text-3xl text-gray-800 mb-12">
          Stand out to the right audience
        </h1>
        <p className="text-center w-1/2 text-gray-600">
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit ametLorem ipsum dolor sit amet
        </p>
        <h2 className="font-bold text-lg underline decoration-red-200 decoration-4 m-16">
          LEARN MORE
        </h2>
      </div>
    </div>
  );
}

export default Stand;
