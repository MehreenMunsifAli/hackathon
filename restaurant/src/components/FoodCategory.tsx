import Image from "next/image";
import {Great_Vibes} from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function FoodCategory() {

    return(
        <>
        <div className="w-[1320px] h-[562] mx-auto py-28 text-white flex flex-col justify-center items-center ">
            {/* Top Content */}
            <div className="text-center">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-[32px]`}>Food Category</h1>
                <h2 className="w-[472px] h-[136px] text-[48px] font-bold leading-tight mt-2 whitespace-nowrap">
                        <span className="text-[#FF9F0D]">Ch</span>oose Food Item
                </h2>
            </div>

            {/* Right Content */}
            <div className="overflow-hidden flex gap-6 relative">
                <Image
                    className=""
                    src={"/assets/images/unsplash_-lHZUkiWM74.png"}
                    alt="Eggs Image"
                    width={306}
                    height={329}
                />
                <div className="w-[206px] h-[97px] text-center flex flex-col items-end gap-4 absolute top-1/3">
                    <div className="w-[125px] h-[40px] bg-white text-[#FF9F0D] flex items-center justify-center">
                        <p className="text-[18px] font-bold">Save 30%</p>
                    </div>
                    <div className="w-[206px] h-[46px] text-white bg-[#FF9F0D] flex items-center justify-center ">
                        <p className="text-[20px] font-bold">Fast Food Dish</p>
                    </div>
                </div>
                <Image
                    src={"/assets/images/unsplash_dphM2U1xq0U.png"}
                    alt="Main Course Image"
                    width={306}
                    height={329}
                />
                <Image
                className=""
                    src={"/assets/images/unsplash_MRHyv-hHxgk.png"}
                    alt="Sandwich"
                    width={306}
                    height={329}
                />
                <Image
                className=""
                    src={"/assets/images/unsplash_q54Oxq44MZs.png"}
                    alt="Sandwich"
                    width={306}
                    height={329}
                />
                
            </div>
        </div>
        </>
    );
}