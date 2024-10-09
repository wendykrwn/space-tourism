const Statistic = ({title, data}: {title:string, data: string}) => {
    return (
        <div className="text-center flex flex-col gap-y-4">
            <p className="text-preset-7 uppercase">{title}</p>
            <p className="preset-6-desktop uppercase text-white ">{data}</p>
        </div>
    )
}

export default Statistic