import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import MenuItem from "./MenuItem";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400", "400"] });

export default function Menu() {

    return (
        <div className="container max-w-screen-[1280px] mx-auto my-16 text-white  ">
            {/* Top Content */}
            <div className="flex flex-col justify-center items-center">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-[32px]`}>Choose & Pick</h1>
                <h2 className="text-[48px] font-bold leading-tight mt-2 whitespace-nowrap">
                    <span className="text-[#FF9F0D]">Fr</span>om Our Menu
                </h2>
            </div>

            <ul className="w-3/4 mx-auto lg:mx-0 flex flex-wrap justify-between items-center text-[20px] gap-x-4 my-16">
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Breakfast</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Lunch</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Dinner</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Dessert</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Drink</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Snack</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Soups</Link>
                </li>
            </ul>

            {/* Images Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 lg:items-stretch flex-wrap lg:flex-nowrap ">
                {/* Single image with save 30% div */}
                <div className="relative">
                    <div className="relative w-[515px] h-[408px] ">
                        <Image
                            className="object-cover"
                            src={"/assets/images/menu/unsplash_INjdgkCwHp0.svg"}
                            alt="Salad Image"
                            fill
                        />
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-around gap-y-4 ">
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_OFismyezPnY.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5}/>
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_OFismyezPnY.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5}/>
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_OFismyezPnY.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5}/>
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_OFismyezPnY.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5}/>
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_OFismyezPnY.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5}/>
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_OFismyezPnY.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5}/>
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_OFismyezPnY.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5}/>
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_OFismyezPnY.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5}/>
                </div>

            </div>
        </div>
    );
}