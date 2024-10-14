import Image from "next/image";
import DisplayButton from "./ui/components/displaybtn";

export default function Home() {

  return (
    // <div className={` bg-[url('./assets/home/background-home-desktop.jpg)]`}>
    <div className="h-full pt-[80px] md:pt-[144px]">
      <div className="flex h-full p-6 justify-center lg:items-end lg:py-32 lg:px-36 text-center lg:text-left ">
        <div className="flex flex-col justify-between md:justify-center md:max-w-[688px] lg:max-w-full lg:flex-row lg:items-center lg:justify-between ">
          <div className="w-full h-full flex flex-col items-center justify-center lg:items-start  md:max-w-[512px] lg:max-w-full">
            <h5 className="text-preset-6 md:text-preset-5 uppercase">So, you want to travel to</h5>
            <h1 className="preset-1 text-white">SPACE</h1>
            <p className="text-preset-9">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="w-full h-full items-center flex  justify-center lg:justify-end">
            <DisplayButton href="/destination" text="explore"/>
          </div>
        </div>
      </div>
    </div>
  );
}
