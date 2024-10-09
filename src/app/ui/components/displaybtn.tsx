import Link from "next/link"

const DisplayButton = ({text,href}:{text:string, href:string}) => {
    return (
        <Link href={href} className="font-primary text-[18px] uppercase text-background rounded-full bg-white flex justify-center items-center w-36 h-36 
           md:w-[272px] md:h-[272px] md:text-[32px] transition-all duration-300
            outline outline-0 outline-transparent hover:outline-[88px] hover:outline-white/10 cursor-pointer hover:text-[#0B0D17]/50
        ">
            {text}
        </Link>
    )
}

export default DisplayButton