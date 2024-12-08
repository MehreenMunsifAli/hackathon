import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import {Great_Vibes} from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function Aboutus() {

    return(
        <>
        <div id="aboutus" className="w-[1320px] h-auto mx-auto pt-28 text-white flex justify-between ">
            {/* Left Content */}
            <div>
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-[32px] px-0`}>About us</h1>
                <h2 className="w-[472px] h-[136px] text-[48px] font-bold leading-tight mt-2 whitespace-nowrap">
                        <span className="text-[#FF9F0D]">We </span> Create the best <br /> foody product
                </h2>
                <p className="w-[526px] h-[130px] text-[16px] mt-8">
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
                <button className="mt-8 px-6 py-3 w-[190px] h-[60px] bg-[#FF9F0D] text-white font-semibold rounded-full hover:bg-yellow-500 transition">
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