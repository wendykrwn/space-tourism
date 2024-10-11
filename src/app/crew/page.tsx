"use client";

import StepTitle from "../ui/components/stepTitle"
import {crew} from "../data.json"
import { useState } from "react"
import Image from "next/image";
import Pagination from "../ui/components/crew/pagination";
const Crew = () => {
    const [currCrewIndex, setCurrCrewIndex] = useState(0)
    return (
        <div className="p-6 h-full flex flex-col lg:max-w-[1110px] lg:px-0 mx-auto" >
            <StepTitle number="02" text="Meet your crew"/>
            <div className=" h-full grid grid-rows-2">
                <div className="grid pb-6 content-between">
                    <div>
                        <div className="text-center mt-8">
                            <h4 className="text-preset-4 uppercase text-white/50 text-[18px]">{crew[currCrewIndex]?.role}</h4>
                            <p className="text-preset-3 uppercase text-white mb-6">{crew[currCrewIndex]?.name}</p>
                            <p className="text-preset-9">{crew[currCrewIndex]?.bio}</p>
                        </div>
                    </div>
                    <Pagination currIndex={currCrewIndex} setCurrIndex={setCurrCrewIndex} numberOfPage={crew.length}/>
                </div>
                <div className="w-full flex justify-center items-end ">
                    <Image 
                        src={crew[currCrewIndex]?.images?.png}
                        alt={`image of ${crew[currCrewIndex]?.name}`}
                        width={340}
                        height={340}
                        className="w-auto h-full"
                    />
                </div>
            </div>

        </div>
    )
}

export default Crew