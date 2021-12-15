import { ComponentPropsWithoutRef } from "react";
import Button from "./Button";

const HeaderLink = (props: ComponentPropsWithoutRef<'a'>) => <a {...props} className="uppercase text-very-dark-blue hover:text-soft-red cursor-pointer"></a>

const Header = () => {
  return (
    <header className="">
      <div className="max-w-[1440px] mx-auto py-8">
        <div className="flex justify-between items-center">
          <div>
            <img src="./images/logo-bookmark.svg" alt="logo bookmark" className="object-center object-contain"></img>
          </div>
          <div className="basis-5/12 flex justify-between items-center">
            <HeaderLink>Features</HeaderLink>
            <HeaderLink>Pricing</HeaderLink>
            <HeaderLink>Contact</HeaderLink>
            <Button themeColor="soft-red">LOGIN</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
