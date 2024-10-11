export default function Layout ({children}: {children:React.ReactNode}){
    const bgDesktop = "lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]"
    const bgTablet = "md:bg-[url('/assets/crew/background-crew-tablet.jpg')]"
    const bgMobile= "bg-[url('/assets/crew/background-crew-mobile.jpg')]"

    return (
        <div
        className={`h-full min-h-screen bg-cover ${bgMobile} ${bgTablet} ${bgDesktop}
            pt-[80px] md:pt-[144px]
        `}
        >
            {children}
        </div>
    )
}