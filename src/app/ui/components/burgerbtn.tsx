import { MouseEventHandler } from "react"

const BurgerButton = ({toggleMenu, isOpen, className}:{toggleMenu:MouseEventHandler<HTMLButtonElement>,isOpen:boolean, className ?: string}) => {
    return (
        <button
            className={`relative w-[24px] h-[21px] flex flex-col justify-between items-center ${className}`}
            onClick={toggleMenu}
        >
            <span
            className={`w-full h-[3px] top-0 absolute bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]'  : ''}`}
            />
            <span
            className={`w-full h-[3px] top-[9.5px] absolute bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
            className={`w-full h-[3px] bottom-0 absolute bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
            />
      </button>
    )
}

export default BurgerButton