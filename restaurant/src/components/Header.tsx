
import Image from "next/image";
import { Input } from "./ui/input";
import { FiSearch } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { FaPinterestP } from "react-icons/fa";
import {Great_Vibes} from "next/font/google";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Menu } from "lucide-react";


const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });




export default function Header() {
    return (
        <>
        <div className="w-full ">
            <header className="container lg:w-[1320px] h-[87px] mt-[45px] bg-black mx-auto lg:flex flex-col justify-center items-stretch ">
                <div className="text-center h-[32px] ">
                    <p className="text-[#FF9F0D] text-[24px] font-bold ">Food<span className="text-white">tuck</span></p>
                </div>
                <div className=" h-[55px] flex justify-between items-center text-white">
                    <nav className="w-[40%]">
                        <ul className="hidden lg:flex justify-between items-center text-[16px]">
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li><Link href={"/"}>Menu</Link></li>
                            <li><Link href={"/"}>Blog</Link></li>
                            <li><Link href={"/"}>Pages</Link></li>
                            <li className="relative group">
                                <button className="bg-black text-white px-4 py-2 rounded focus:outline-none">
                                    About 
                                </button>
                                <ul className="absolute hidden group-hover:block bg-gray-800 text-white rounded mt-1 w-40">
                                    <li>
                                        <Link
                                            href="/#aboutus"
                                            className="block px-4 py-2 hover:bg-gray-700"
                                        >
                                            Vision
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/#aboutus"
                                            className="block px-4 py-2 hover:bg-gray-700"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li><Link href={"/"}>Shop</Link></li>
                            <li><Link href={"/"}>Contact</Link></li>
                        </ul>
                        <Sheet>
                            <SheetTrigger className="lg:hidden">
                                <Menu />
                            </SheetTrigger>
                            <SheetContent>
                                <ul className="flex flex-col gap-1 list-none ">
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li><Link href={"/"}>Menu</Link></li>
                                <li><Link href={"/"}>Blog</Link></li>
                                <li><Link href={"/"}>Pages</Link></li>
                                <li className="relative group">
                                    <button className=" rounded focus:outline-none">
                                        About
                                    </button>
                                    <ul className="absolute hidden group-hover:block bg-gray-800 text-white rounded mt-1 w-40">
                                        <li>
                                            <Link
                                                href="/#aboutus"
                                                className="block px-4 py-2 hover:bg-gray-700"
                                            >
                                                Vision
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/#aboutus"
                                                className="block px-4 py-2 hover:bg-gray-700"
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link href={"/"}>Shop</Link></li>
                                <li><Link href={"/"}>Contact</Link></li>
                            </ul>
                            </SheetContent>
                        </Sheet>
                    </nav>
                    <div className="relative flex  items-center">
                        <Input placeholder="Search..." className="bg-black text-white text-[16px] w-[310px] h-[54px] pl-[20px] pr-[12px] rounded-[27px] border-2 border-[#FF9F0D]  " />
                        <FiSearch className="absolute right-16 bottom-1/2 transform translate-y-1/2 text-3xl text-white" />
                        <SlHandbag className="text-2xl ml-4" />
                    </div>
                  
                </div>
            </header>

            {/* Header Ends Here */}
            
            {/* Hero */}
            <div className="mx-auto py-12 mb-12 text-white flex flex-col lg:flex-row justify-between lg:items-center lg:justify-center relative">
                {/* Social Icons */}
                <div className="w-[492px] absolute lg:left-36 lg:top-32 sm:left-0">
                    <div className="border-b-2 w-[158px] transform rotate-90"></div>
                    <RiFacebookFill className="absolute top-28 left-[14%]"/>
                    <FaTwitter className="absolute top-36 left-[14%] text-[#FF9F0D]"/>
                    <FaPinterestP className="absolute top-44 left-[14%]"/>
                    <div className="mt-[300px] border-b-2 w-[158px] transform rotate-90"></div>
                </div>
                {/* -- Social Icons End Here -- */}

                
                <div className="container pl-24 lg:flex mt-[32px] lg:justify-between ">
                    {/* Left Content */}
                    <div className=" lg:w-1/2 lg:max-w-[472px] sm:w-full ">
                        <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-[32px] mt-12`}>It's Quick & Amusing!</h1>
                        <h1 className="w-[472px] h-[136px] text-[60px] font-bold leading-tight mt-2 whitespace-nowrap">
                            <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br /> Food Quality
                        </h1>
                        <p className="text-gray-400 mt-8 lg:w-[418px] lg:h-[48px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
                            pharetra dictum neque massa congue.
                        </p>
                        <button className="mt-8 px-6 py-3 w-[190px] h-[60px] bg-[#FF9F0D] text-white font-semibold rounded-full hover:bg-yellow-500 transition">
                            See Menu
                        </button>
                    </div>
                    {/* Right Content */}
                    <div className="relative flex lg:justify-end items-start ">
                        <div className="relative w-[877px] h-[670px]  overflow-hidden ">
                        <Image
                            alt="Food Plate"
                            src={"/assets/images/hero_image.png"}
                            layout="fill"
                            className="object-cover"
                        />
                        </div>
                    </div>
                </div>
                
            </div>

           
        </div>
           
        </>
    )
}