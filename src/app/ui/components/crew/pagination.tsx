const Pagination = ({currIndex,setCurrIndex, numberOfPage}:{currIndex : number, numberOfPage:number, setCurrIndex: Function}) => {
    return (
        <div className="flex justify-center gap-x-4">
            {
                [...Array(numberOfPage)].map((val,index)=>{
                    return (
                        <button 
                            key={index}
                            onClick={()=>{setCurrIndex(index)}}
                            className={`w-[10px] h-[10px] cursor-pointer transition-all rounded-full hover:bg-white ${currIndex == index ? "bg-white" : "bg-[#979797]"}`}
                        />
                    )
                })
            }
        </div>
    )
}

export default Pagination