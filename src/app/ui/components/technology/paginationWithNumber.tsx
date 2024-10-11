const PaginationWithNumber = ({currIndex,setCurrIndex, numberOfPage}:{currIndex : number, numberOfPage:number, setCurrIndex: Function}) => {
    return (
        <div className="flex justify-center gap-x-4">
        {
            [...Array(numberOfPage)].map((val,index)=>{
                return (
                    <button 
                        key={index}
                        onClick={()=>{setCurrIndex(index)}}
                        className={`w-[40px] h-[40px] cursor-pointer border-solid border-[1px] transition-all duration-300 hover:border-white rounded-full ${currIndex == index ? "bg-white text-background border-white " : "bg-transparent hover:bg-white hover:text-background hover:border-w border-white/25 "}`}
                    >
                        {index + 1}
                    </button>
                )
            })
        }
    </div>
    )
}

export default PaginationWithNumber