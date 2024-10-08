import Image from "next/image"
import NavLinks from "./navlinks"

const SideNav = () => {
    return (
        <div className="flex items-center pt-12 pl-12">
            <div className="w-full relative">
                <Image 
                    src={"/assets/shared/logo.svg"}
                    alt="logo"
                    width={48}
                    height={48}
                />
                <div className="hidden lg:block absolute w-[90%] h-[1px] bg-white/20 top-[50%] left-[17%] z-10  "/>
            </div>
            <NavLinks/>
        </div>
    )
}

export default SideNav