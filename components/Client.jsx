import React from "react";
import Image from "next/image";
import imageemily from "../public/images/imageemily.jpg";
import imagejennie from "../public/images/imagejennie.jpg";
import imagetahomas from "../public/images/imagetahomas.jpg";

function Client() {
  return (
    <section className="w-full  p-24">
      <h1 className="text-center text-gray-500 mb-8">CLIENT TESTIMONIALS</h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-center items-center p-6">
          <Image
            src={imagejennie}
            alt="jennie's image"
            className="rounded-full m-4"
            width={80}
            height={80}
          />
          <p className="font-serif text-gray-500 font-sm m-8">
            Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do Lorem
            ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
            amet eiusmod tempor
          </p>
          <h1 className="m-2 text-lg font-bold">Emily R.</h1>
          <h2 className="text-gray-300">Cheif Operating Officer</h2>
        </div>
        <div className=" flex flex-col justify-center items-center p-6">
          <Image
            src={imageemily}
            alt="image emily"
            className="rounded-full m-6"
            width={80}
            height={80}
          />
          <p className="font-serif text-gray-500  font-sm m-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporLorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit amet
          </p>
          <h1 className="m-2 font-bold text-lg">Jennie F.</h1>
          <h2 className="text-gray-300">Marketing Director</h2>
        </div>
        <div className=" flex flex-col justify-center items-center p-6">
          <Image
            src={imagetahomas}
            alt="image de thomas"
            className="rounded-full m-4"
            width={80}
            height={80}
          />
          <p className=" font-serif text-gray-500 font-sm m-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Lorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit amet
          </p>
          <h1 className="m-2 font-bold text-lg">Thomas S.</h1>
          <h2 className="text-gray-300">Business Owner</h2>
        </div>
      </div>
    </section>
  );
}

export default Client;
