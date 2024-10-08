'use client';

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";

const NavLinks = () => {
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
        <div className="flex justify-end pr-12 w-full gap-x-12 backdrop-blur-lg bg-white/[0.05] ">
            {
                links.map(({name,number,href})=> {
                    return (
                            <Link 
                                key={name}
                                href={href}
                                className={clsx("flex items-center relative lg:h-[96px] before:h-[3px] before:w-full hover:before:bg-white/50 before:absolute before:bottom-0",
                                {
                                    "before:bg-white hover:before:bg-white": pathname === href
                                }
                                 )}
                            >
                                <span className="font-bold text-white">{number}</span> {name}
                            </Link>
                    )
                })
            }
        </div>
    )
}

export default NavLinks;