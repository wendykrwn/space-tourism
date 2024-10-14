"use client"
import Image from "next/image"
import data from "../data.json"
import { useState } from "react"
import StepTitle from "../ui/components/stepTitle";
import PaginationWithNumber from "../ui/components/technology/paginationWithNumber";
import Explanation from "../ui/components/explanation";


const Technology = ()=> {
    const [currTechIndex, setCurrTechIndex] = useState(0)
    const {technology} = data
    return (
        <div className="py-6 lg:max-w-[1275px] ml-auto ">
            <div className="px-6 md:mb-5 lg:px-0">
                <StepTitle number="03" text="Space launch 101"/>
            </div>
            <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 h-full lg:items-center">
                <div className="flex items-center h-[322px] md:h-auto lg:h-full md:mb-5 lg:order-2">
                    <Image
                        src={technology[currTechIndex].images.landscape}
                        alt={`image of ${technology[currTechIndex]?.name}`}
                        width={500}
                        height={500}
                        className="w-full h-[258px] md:h-[357px] lg:hidden "
                    />
                    <Image
                        src={technology[currTechIndex].images.portrait}
                        alt={`image of ${technology[currTechIndex]?.name}`}
                        width={500}
                        height={500}
                        className="w-full hidden lg:block "
                    />
                </div>
                <div className="px-6 flex flex-col lg:flex-row gap-10 lg:order-1 h-fit ">
                    <PaginationWithNumber currIndex={currTechIndex} setCurrIndex={setCurrTechIndex} numberOfPage={technology.length} />
                    <Explanation className="text-center self-center max-w-[512px]" subtitle="The Terminology..." title={technology[currTechIndex].name} description={technology[currTechIndex].description} />
                </div>
            </div>
        </div>
    )
}

export default Technology