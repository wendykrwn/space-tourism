"use client";

import StepTitle from "../ui/components/stepTitle"
import data from "../data.json"
import { useState } from "react"
import Image from "next/image";
import Pagination from "../ui/components/crew/pagination";
import Explanation from "../ui/components/explanation";
const Crew = () => {
    const [currCrewIndex, setCurrCrewIndex] = useState(0)
    const {crew} = data
    return (
        <div className="p-6 h-full flex flex-col lg:max-w-[1110px] lg:px-0 mx-auto" >
            <StepTitle number="02" text="Meet your crew"/>
            <div className=" h-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
                <div className="grid lg:h-full pb-6 content-between md:max-w-[512px] justify-self-center">
                    <div className="text-center lg:grid h-full lg:row-span-3 lg:row-start-1 lg:text-left mt-8">
                        <Explanation className="lg:self-center" subtitle={crew[currCrewIndex]?.role} title={crew[currCrewIndex]?.name} description={crew[currCrewIndex]?.bio} />
                    </div>
                    <Pagination currIndex={currCrewIndex} setCurrIndex={setCurrCrewIndex} numberOfPage={crew.length}/>
                </div>
                <div className="w-full flex justify-center items-end ">
                    <Image 
                        src={crew[currCrewIndex]?.images?.png}
                        alt={`image of ${crew[currCrewIndex]?.name}`}
                        width={500}
                        height={500}
                        className="w-auto h-full"
                    />
                </div>
            </div>

        </div>
    )
}

export default Crew