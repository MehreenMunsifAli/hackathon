import Image from "next/image";
import {Great_Vibes} from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function ActiveProcess() {

    return (
        <div className="hidden lg:block container max-w-screen-[1280px] mx-auto my-16 py-12 text-white bg-[url('/assets/images/activeprocess/unsplash_E6DsqnZbZ4o.svg')] bg-cover bg-no-repeat">
            {/* Content */}
            <div className="flex flex-col items-end pr-[60px] 2xl:pr-[220px]">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-[32px] px-0`}>Restaurant Active Process</h1>
                <h2 className=" text-3xl lg:text-h3 font-bold leading-tight mt-2 whitespace-nowrap text-center lg:text-right">
                        <span className="text-[#FF9F0D]">We </span> Document Every Food
                         <br /> Bean Process untile it is saved
                </h2>
                <p className=" lg:max-w-[590px] text-[16px] my-8 text-center lg:text-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, 
                </p>
                  {/* Button  */}
                <div className="flex justify-between gap-6">
                    <button className=" px-10 py-4 bg-transparent hover:bg-[#FF9F0D] border-2 border-[#FF9F0D] text-white rounded-full transition duration-300">
                        Read More
                    </button>
                    <div className="flex items-center justify-between gap-2">
                        <Image 
                            className="object-cover"
                            src={"/assets/images/activeprocess/Play.svg"}
                            alt="Play Icon"
                            width={60}
                            height={60}
                        />
                        <p className="text-[16px]">Play Video</p>
                    </div>
                </div>
            </div>
        </div>
    )
}