import Image from "next/image";
import {Great_Vibes} from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function FoodCategory() {

    return(
        <>
        <div className="container max-w-screen-[1280px] mx-auto my-16 text-white flex flex-col justify-center items-stretch ">
            {/* Top Content */}
            <div className="text-center">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-[32px]`}>Food Category</h1>
                <h2 className=" text-[48px] font-bold leading-tight mt-2 whitespace-nowrap">
                        <span className="text-[#FF9F0D]">Ch</span>oose Food Item
                </h2>
            </div>

            {/* Images Content */}
            <div className=" flex justify-between flex-wrap lg:flex-nowrap my-16 gap-4 relative">
                {/* Single image with save 30% div */}
                <div className="relative w-[305px] h-[328px] ">
                    <Image
                        className="object-cover"
                        src={"/assets/images/food_category/unsplash_-lHZUkiWM74.svg"}
                        alt="Eggs Image"
                        fill
                    />
                    <div className="absolute inset-y-28 w-[206px] h-[97px] text-center flex flex-col items-end gap-4">
                        <div className="w-[125px] h-[40px] bg-white text-[#FF9F0D] flex items-center justify-center">
                            <p className="text-[18px] font-bold">Save 30%</p>
                        </div>
                        <div className="w-[206px] h-[46px] text-white bg-[#FF9F0D] flex items-center justify-center ">
                            <p className="text-[20px] font-bold">Fast Food Dish</p>
                        </div>
                    </div>

                </div>
                
                <div className=" relative w-[305px] h-[328px]">
                    <Image
                        className="object-cover"
                        src={"/assets/images/food_category/unsplash_dphM2U1xq0U.svg"}
                        alt="Main Course Image"
                        fill
                    />
                </div>

                <div className=" relative w-[306px] h-[329px]">
                    <Image
                        className="object-cover"
                        src={"/assets/images/food_category/unsplash_MRHyv-hHxgk.svg"}
                        alt="Main Course Image"
                        fill
                    />
                </div>
                
                <div className=" relative w-[305px] h-[328px]">
                    <Image
                        className="object-cover"
                        src={"/assets/images/food_category/unsplash_q54Oxq44MZs.svg"}
                        alt="Sandwich"
                        fill
                    />
                </div>
            </div>
        </div>
        </>
    );
}