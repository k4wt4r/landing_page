import React from "react";
import NavBarElement from "./NavBarElement";

const navElement = [
  { link: "/about", text: "About" },
  { link: "/projects", text: "Projects" },
  { link: "/services", text: "Sevices" },
  { link: "/contact", text: "Contact" },
];
function NavBar() {
  const [activeElement, setActiveElement] = React.useState(0);

  return (
    <nav className="bg-transparent absolute top-0 z-10 w-full flex items-center justify-between md:flex px-10 py-8">
      <div className="flex items-start">
        <a className="text-white">Sunnyside</a>
      </div>
      <div className="lg:flex justify-end">
        <div className="flex justify-end ">
          {navElement.map(({ link, text }, index) => {
            const props = {
              link,
              text,
              activeElement: activeElement === index,
              setActiveElement,
              index,
            };

            return <NavBarElement {...props} key={index} />;
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
