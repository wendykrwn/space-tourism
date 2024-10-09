export default function Layout ({children}: {children:React.ReactNode}){
    const bgDesktop = "lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]"
    const bgTablet = "md:bg-[url('/assets/destination/background-destination-mobile.jpg')]"
    const bgMobile= "bg-[url('/assets/destination/background-destination-tablet.jpg')]"

    return (
        <div
        className={`h-screen bg-cover ${bgMobile} ${bgTablet} ${bgDesktop}
            pt-[80px] lg:pt-[144px]
        `}
        >
            {children}
        </div>
    )
}