const TabNav = ({destinationNames, currDestIndex, handleIndexDest}:{destinationNames:string[],currDestIndex:number, handleIndexDest: Function}) => {
    return (
        <div className="flex justify-around preset-8 
        ">
            {
                destinationNames?.map((destination,index) => <button onClick={()=>{handleIndexDest(index)}} className={`relative uppercase flex h-8 before:h-[3px] before:w-full before:absolute before:bottom-0 ${ destinationNames[currDestIndex] == destination ? "before:bg-white" : "hover:before:bg-white/50 before:bg-transparent"} `}>
                    {destination}
                </button>)
            }
        </div>
    )
}

export default TabNav