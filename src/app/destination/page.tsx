"use client";

import Image from "next/image"
import { destinations } from "../data.json"
import Statistic from "../ui/components/destination/statistic"
import { useState } from "react"
import TabNav from "../ui/components/destination/tabNav";
const Destination = () => {
    const destinationNames = destinations.map(val=>val.name)
    const [currDestIndex, setCurrDestIndex] = useState(0)
    return <div className="p-6 min-h-screen flex flex-col" >
        <div className="uppercase text-white flex justify-center md:justify-start tracking-[15%] gap-x-6">
            <span className="font-secondary font-bold text-[16px] text-white/30 md:text-[20px] ">01</span> <span className="font-secondary text-[16px] md:text-[20px]">Pick your destination</span>
        </div>
        <div className="w-full flex justify-center items-center p-8">
            <Image
                src={destinations[currDestIndex].images.png}
                alt={`image of ${destinations[0].name}`}
                width={480}
                height={480}
                className="w-[150px] h-auto md:w-[300px]"
            />
        </div>
        <div className="flex flex-col gap-y-6 h-full md:w-[514px] self-center ">
            <TabNav destinationNames={destinationNames} currDestIndex={currDestIndex} handleIndexDest={setCurrDestIndex} />
            <div>
                <h2 className="text-preset-2 uppercase text-center">{destinations[currDestIndex].name}</h2>
                <p className="text-center text-preset-9">
                    {destinations[currDestIndex].description}
                </p>
            </div>
            <div className="w-full h-[1px] bg-white/25"/>
            <div className="flex flex-col gap-y-8 md:flex-row md:justify-between">
                <Statistic title="Avg. distance" data={destinations[currDestIndex].distance} />
                <Statistic title="Est. travel time" data={destinations[currDestIndex].travel} />
            </div>
        </div>
    </div>
}

export default Destination