import React from "react";
import Image from "next/image";
import iconfacebook from "../public/images/iconfacebook.svg";
import iconinstagram from "../public/images/iconinstagram.svg";
import icontwitter from "../public/images/icontwitter.svg";
import iconpinterest from "../public/images/iconpinterest.svg";

function FooterSunny() {
  return (
    <section className="w-full bg-green-300">
      <div className="flex justify-center flex-col items-center p-32">
        <h1 className="font-bold text-3xl text-green-900 mb-12">sunnyside</h1>
        <div className="w-80">
          <div className="flex justify-between text-green-900">
            <span>About</span>
            <span>Services</span>
            <span>Projects</span>
          </div>
        </div>
        <div className="w-40 flex justify-between m-12">
          <Image src={iconfacebook} alt="facebook icon" />
          <Image src={iconinstagram} alt="instagram icon" />
          <Image src={icontwitter} alt="twitter icon" />
          <Image src={iconpinterest} alt="pinterest icon" />
        </div>
      </div>
    </section>
  );
}

export default FooterSunny;
