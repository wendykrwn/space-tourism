const Explanation = ({subtitle, title, description, className}:{subtitle:string , title:string, description:string,className?:string}) => {
    return (
        <div className={`${className}`}>
            <h4 className="text-preset-4 uppercase text-white/50 text-[18px]">{subtitle}</h4>
            <p className="text-preset-3 uppercase text-white mb-6 ">{title}</p>
            <p className="text-preset-9">{description}</p>
        </div>
    )
}

export default Explanation