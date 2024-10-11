const StepTitle = ({number, text}:{number:string, text:string}) => {
    return (
        <div className="uppercase text-white flex justify-center md:justify-start tracking-[15%] gap-x-6">
            <span className="font-secondary font-bold text-[16px] text-white/30 md:text-[20px] lg:text-[28px] ">{number}</span> <span className="font-secondary text-[16px] md:text-[20px] lg:text-[28px]">{text}</span>
        </div>
    )
}

export default StepTitle