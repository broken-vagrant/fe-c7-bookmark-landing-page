import { ComponentPropsWithoutRef } from "react";
import Button from "./Button";
import links from '../constants/headerLinks';


const Header = () => {
  return (
    <header className="">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-4 py-8 flex justify-between items-center">
          <div className="logo">
            <img src="./images/logo-bookmark.svg" alt="logo bookmark" className="object-center object-contain"></img>
          </div>
          <div className="nav flex justify-between items-center">
            <div className="nav__list-wrapper md:flex none">
              <ul className="nav__list flex items-center gap-8 mr-8">
                {
                  links.map((link, i) => <li key={i}><a className="uppercase text-very-dark-blue hover:text-soft-red cursor-pointer">{link}</a>
                  </li>)}
              </ul>
              <Button themeColor="soft-red">LOGIN</Button>
            </div>
            <button className="nav_mobile_menu block md:hidden">
              <img src="./images/icon-hamburger.svg" alt="mobile menu icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
