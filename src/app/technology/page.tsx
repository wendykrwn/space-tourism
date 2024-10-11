"use client"
import Image from "next/image"
import { technology } from "../data.json"
import { useState } from "react"
import StepTitle from "../ui/components/stepTitle";
import PaginationWithNumber from "../ui/components/technology/paginationWithNumber";
import Explanation from "../ui/components/explanation";


const Technology = ()=> {
    const [currTechIndex, setCurrTechIndex] = useState(0)
    return (
        <div className="py-6">
            <div className="px-6">
                <StepTitle number="03" text="Space launch 101"/>
            </div>
            <div className="grid grid-rows-2 h-full">
                <div className="flex items-center h-[322px]">
                    <Image
                        src={technology[currTechIndex].images.landscape}
                        alt={`image of ${technology[currTechIndex]?.name}`}
                        width={500}
                        height={500}
                        className="w-full h-[258px]"
                    />
                </div>
                <div className="px-6 flex flex-col gap-10 ">
                    <PaginationWithNumber currIndex={currTechIndex} setCurrIndex={setCurrTechIndex} numberOfPage={technology.length} />
                    <Explanation className="text-center" subtitle="The Terminology..." title={technology[currTechIndex].name} description={technology[currTechIndex].description} />
                </div>
            </div>
        </div>
    )
}

export default Technology