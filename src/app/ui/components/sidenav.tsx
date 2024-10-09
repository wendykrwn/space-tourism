"use client";
import Image from "next/image"
import NavLinks from "./navlinks"
import { useState } from "react"
import BurgerButton from "./burgerbtn";

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div className="flex fixed w-full items-center pt-8 px-8 lg:pt-12 lg:pl-12 md:px-0">
            <div className="w-full relative">
                <Image 
                    src={"/assets/shared/logo.svg"}
                    alt="logo"
                    width={48}
                    height={48}
                />
                <div className="hidden lg:block absolute w-[90%] h-[1px] bg-white/20 top-[50%] left-[17%] z-10  "/>
            </div>
            <div className="md:w-full">
                <BurgerButton className={`md:hidden ${isOpen ? "hidden": "flex"}`} isOpen={isOpen} toggleMenu={toggleMenu}/>
                <NavLinks isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
        </div>
    )
}

export default SideNav