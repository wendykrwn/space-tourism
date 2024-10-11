"use client";

import Image from "next/image"
import { destinations } from "../data.json"
import Statistic from "../ui/components/destination/statistic"
import { useState } from "react"
import TabNav from "../ui/components/destination/tabNav";
import StepTitle from "../ui/components/stepTitle";

const Destination = () => {
    const destinationNames = destinations.map(val=>val.name)
    const [currDestIndex, setCurrDestIndex] = useState(0)
    return (
    <div className="p-6 h-full flex flex-col lg:max-w-[1110px] lg:px-0 mx-auto" >
        <StepTitle number="01" text="Pick your destination"/>
        <div className="flex flex-col h-full lg:flex-row lg:justify-around items-center">
            <div className="w-full lg:w-auto flex justify-center items-center p-8 lg:p-0">
                <Image
                    src={destinations[currDestIndex].images.png}
                    alt={`image of ${destinations[0].name}`}
                    width={480}
                    height={480}
                    className="w-[150px] h-auto md:w-[300px] lg:w-[480px]"
                />
            </div>
            <div className="flex flex-col gap-y-6 lg:gap-y-10 h-full  md:w-[514px] self-center lg:h-auto lg:w-full lg:max-w-[445px] ">
                <TabNav destinationNames={destinationNames} currDestIndex={currDestIndex} handleIndexDest={setCurrDestIndex} />
                <div>
                    <h2 className="text-preset-2 uppercase text-center lg:text-left">{destinations[currDestIndex].name}</h2>
                    <p className="text-center text-preset-9 lg:text-left transition-opacity duration-500 ease-in-out opacity-100">
                        {destinations[currDestIndex].description}
                    </p>
                </div>
                <div className="w-full h-[1px] bg-white/25"/>
                <div className="flex flex-col gap-y-8 lg:gap-y-10 md:flex-row md:justify-between">
                    <Statistic title="Avg. distance" data={destinations[currDestIndex].distance} />
                    <Statistic title="Est. travel time" data={destinations[currDestIndex].travel} />
                </div>
            </div>
        </div>
    </div>
    )

}

export default Destination