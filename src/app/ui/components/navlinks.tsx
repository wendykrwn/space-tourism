'use client';

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";
import BurgerButton from "./burgerbtn";
import { MouseEventHandler } from "react";

const NavLinks = ({toggleMenu, isOpen}:{toggleMenu:MouseEventHandler<HTMLButtonElement>,isOpen:boolean}) => {
    const links = [
        {
            number: '01',
            name: 'HOME', 
            href: '/'
        },
        {
            number: '02',
            name: 'DESTINATION', 
            href: '/destination'
        },
        {
            number: '03',
            name: 'CREW', 
            href: '/crew'
        },
        {
            number: '04',
            name: 'TECHNOLOGY', 
            href: '/technology'
        },

    ]
      const pathname = usePathname();

    return (
        <div className={`fixed w-[65%] right-0 top-0 pl-8 h-screen backdrop-blur-lg bg-white/[0.05]
           md:relative md:w-full md:h-auto md:translate-x-0
           transition-all duration-300	
        ${isOpen ? "translate-x-0": "translate-x-full"}
         `}>
            <div className="h-[48px] my-8 px-8 flex items-center justify-end md:hidden">
                <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu}/>
            </div>
            <div className="flex flex-col gap-y-8 
            md:flex-row md:justify-end md:pr-12 md:w-full md:gap-x-12 md:h-auto ">
                {
                    links.map(({name,number,href})=> {
                        return (
                                <Link 
                                    key={name}
                                    href={href}
                                    className={clsx("font-secondary tracking-[2px] text-white text-[16px] flex gap-x-2 md:gap-x-3 items-center relative md:h-[96px] before:h-full before:w-[3px] md:before:h-[3px] md:before:w-full before:right-0 hover:before:bg-white/50 before:absolute  md:before:bottom-0",
                                    {
                                        "before:bg-white hover:before:bg-white": pathname === href
                                    }
                                    )}
                                >
                                    <span className="font-bold text-white tracking-[2.7px]">{number}</span> {name}
                                </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NavLinks;