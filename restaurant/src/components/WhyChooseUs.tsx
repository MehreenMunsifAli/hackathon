import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import {Great_Vibes} from "next/font/google";
import Rectangle from "./Rectangle";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function WhyChooseUs() {

    return(
        <>
        <div className="w-[1320px] h-[716px] mx-auto mt-16 mb-32 text-white flex justify-between">
            {/* Left Content */}
            <div className=" w-[960px]">
                {/* Top Row */}
                <div className=" overflow-hidden gap-4 flex items-end ">
                    <div className="relative w-[362px] h-[356px]">
                        <Image
                            src="/assets/images/unsplash_lP5MCM6nZ5A.png"
                            alt="Food Image"
                            layout="fill"
                            className="object-cover "
                        />
                    </div>
                    <div className="relative w-[281px] h-[231px]">
                        <Image
                            src="/assets/images/unsplash_dphM2U1xq0U.png"
                            alt="Food Image"
                            layout="fill"
                            className="object-cover rounded-lg "
                        />
                    </div>
                </div>

                {/* Second Row */}
                <div className="mt-4 overflow-hidden gap-4 flex items-start">
                    <div className="relative w-[244px] h-[306px] ">
                        <Image
                            src={"/assets/images/unsplash_CLMpC9UhyTo.png"}
                            alt="Main Course Image"
                            layout="fill"
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative w-[221px] h-[226px] ">
                        <Image
                            src={"/assets/images/unsplash_-GFCYhoRe48.png"}
                            alt="Main Course Image"
                            layout="fill"
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className=" overflow-hidden gap-2 flex flex-col">
                        <div className="relative w-[161px] h-[168px] ">
                            <Image
                                src={"/assets/images/unsplash_tzl1UCXg5Es.png"}
                                alt="Main Course Image"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative w-[161px] h-[166px]">
                            <Image
                                src={"/assets/images/unsplash_mmnKI8kMxpc.png"}
                                alt="Main Course Image"
                                layout="fill"
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            

            {/* Right Content */}
            <div className="pt-14">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-[32px] px-0`}>Why Choose us</h1>
                <h2 className="w-[472px] h-[136px] text-[48px] font-bold leading-tight mt-2 whitespace-nowrap">
                        <span className="text-[#FF9F0D]">Ex</span>tra Ordinary taste <br /> And Experienced
                </h2>
                <p className="w-[526px] h-[130px] text-[16px] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>

                <div className="w-[374px] h-[135px] text-white flex justify-between">
                    <Rectangle ImageSrc="/assets/images/Hamburger.png" AltText="Hamburger Icon" Label="Fast Food" />
                    <Rectangle ImageSrc="/assets/images/Cookie.png" AltText="Cookie Icon" Label="Lunch" />
                    <Rectangle ImageSrc="/assets/images/Wine.png" AltText="Wine Icon" Label="Dinner" />
                </div>
                
                <div className="w-[374px] h-[93px] bg-white text-black rounded-[6px] border-l-[10px] border-[#FF9F0D] mt-8 flex items-center justify-around">
                    <h2 className="text-[#FF9F0D] text-[48px]">30+</h2>
                    <p className="text-[20px]">Years of <br /><span className="text-[24px] font-bold">Experience</span> </p>
                </div>
            </div>
            
        </div>
        </>
    )
}