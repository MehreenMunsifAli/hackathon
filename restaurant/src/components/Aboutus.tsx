import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import {Great_Vibes} from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function Aboutus() {

    return(
        <>
        <div id="aboutus" className="container max-w-screen-[1280px] mx-auto my-16 text-white flex lg:flex-row flex-col items-center justify-between gap-12 lg:gap-0">
            {/* Left Content */}
            <div className="flex flex-col items-center lg:items-start">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-[32px] px-0`}>About us</h1>
                <h2 className="w-[472px] h-[136px] text-[48px] font-bold leading-tight mt-2 whitespace-nowrap text-center lg:text-left">
                        <span className="text-[#FF9F0D]">We </span> Create the best <br /> foody product
                </h2>
                <p className="w-2/3 lg:w-[526px] text-[16px] my-8 text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <div className="mb-4">
                    <FaCheck className="inline mr-2" />
                    <span> Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
                </div>
                <div className="mb-4">
                    <FaCheck className="inline mr-2" />
                    <span>  Quisque diam pellentesque bibendum non dui volutpat fringilla </span>
                </div>
                <div className="mb-4">
                    <FaCheck className="inline mr-2" />
                    <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
                <button className="mt-8 px-12 py-4 bg-[#FF9F0D] text-white font-semibold rounded-full hover:bg-transparent hover:border-2 hover:px-[46px] hover:py-[14px] hover:border-[#FF9F0D] transition duration-300">
                    Read More
                </button>
            </div>

            {/* Right Content */}
            <div className="overflow-hidden">
                <Image
                    className="object-cover"
                    src={"/assets/images/unsplash_fdlZBWIP0aM.png"}
                    alt="Eggs Image"
                    width={660}
                    height={330}
                />
                <div className="flex justify-normal mt-4">
                    <Image
                        src={"/assets/images/unsplash_jpkfc5_d-DI.png"}
                        alt="Main Course Image"
                        width={322}
                        height={194}
                    />
                    <Image
                    className="ml-4"
                        src={"/assets/images/unsplash_mAQZ3X_8_l0.png"}
                        alt="Sandwich"
                        width={322}
                        height={194}
                    />
                </div>
                
            </div>
        </div>
        </>
    )
}