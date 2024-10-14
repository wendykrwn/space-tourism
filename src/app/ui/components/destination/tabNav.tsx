const TabNav = ({destinationNames, currDestIndex, handleIndexDest}:{destinationNames:string[],currDestIndex:number, handleIndexDest: ( curr : number )=>void }) => {
    return (
        <div className="flex justify-around lg:flex-row md:justify-center md:gap-x-8 lg:justify-start lg:gap-x-8 preset-8 lg:w-auto
        ">
            {
                destinationNames?.map((destination,index) => <button key={destination} onClick={()=>{handleIndexDest(index)}} className={`relative uppercase flex h-8 before:h-[3px] before:w-full before:absolute before:bottom-0 ${ destinationNames[currDestIndex] == destination ? "before:bg-white text-white" : "hover:before:bg-white/50 before:bg-transparent"} `}>
                    {destination}
                </button>)
            }
        </div>
    )
}

export default TabNav