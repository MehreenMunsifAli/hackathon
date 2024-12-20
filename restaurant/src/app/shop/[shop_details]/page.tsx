"use client";
import Banner from "@/components/Banner";
import SocialIcon from "@/components/SocialIcon";
import { Button } from "@/components/ui/button";
// import { useParams } from "next/navigation";
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import { useState } from "react";
import Image from "next/image";



export default function ShopDetails() {
    const [activeImage, setActiveImage] = useState<string>("/assets/images/shop/shop_detail/Food_1.svg");

    const thumbnails = [
        "/assets/images/shop/shop_detail/Food_1.svg",
        "/assets/images/shop/shop_detail/Food_2.svg",
        "/assets/images/shop/shop_detail/Food_3.svg",
        "/assets/images/shop/shop_detail/Food_4.svg",
        "/assets/images/shop/shop_detail/Food_5.svg",
    ];
  
    // const {shop_details} = useParams();

    const socialIcons = [
        {
            id: 1,
            Url: "https://facebook.com",
            Icon: FaFacebookF,

        },
        {
            id: 2,
            Url: "https://youtube.com",
            Icon: FaYoutube,
            
        },
        {
            id: 3,
            Url: "https://pinterest.com",
            Icon: FaPinterest,
            
        },
        {
            id: 4,
            Url: "https://instagram.com",
            Icon: FaInstagram,
            
        },
        {
            id: 5,
            Url: "https://twitter.com",
            Icon: FaTwitter,
            
        }
    ]


    return(
        <>
            <Banner Title="Shop Details" Page="Shop details" />
            <div className=" bg-white">
                <div className="container max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-4 py-16 text-[#333333]">
                    {/* Images Section */}
                    <div className="col-start-1 col-span-5 row-span-7 row-start-1 gap-4">
                        {thumbnails.map((thumb, idx) => (
                            <div 
                                key={idx}
                                onClick={() => setActiveImage(thumb)}
                                className={`my-2 flex-shrink-0 bg-primary-light h-16 w-16 md:h-20 md:w-20 rounded-[8px] cursor-pointer 
                                    ${activeImage === thumb ? "border-2 border-black" : ""}`}
                                
                            >
                                <Image
                                    src={thumb}
                                    alt={`Thumbnail ${idx + 1}`}
                                    width={80}
                                    height={80}
                                    className="object-contain w-full h-full  "
                                />
                            </div>
                        ))}
                    </div>

                    {/* Product Namex Description, and Price Section */}
                    {/* In stock row */}
                    <div className="col-start-7 col-span-6 row-start-1 px-4 gap-4 flex items-center justify-between">
                        <span className="px-4 py-1 rounded-lg text-sm bg-[#FF9F0D] text-white">In stock</span>
                        <div className="flex gap-2 text-[#828282]">
                            <span className="flex items-center gap-1"><FaRegArrowAltCircleLeft /> Prev </span>
                            <span className="flex items-center gap-1">Next <FaRegArrowAltCircleRight /></span>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="col-start-7 col-span-6 row-start-2 px-4 gap-4">
                        <h1 className="text-3xl lg:text-h3 font-bold">Yummy Chicken Chup</h1>
                    </div>

                    {/* Description */}
                    <div className="col-start-7 col-span-6 row-start-3 px-4 gap-4 ">
                        <p className="text-[#4F4F4F] py-4 border-b-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quia adipisci quae voluptates, deleniti hic fugit quibusdam itaque? Dolorum laudantium adipisci sapiente blanditiis, quis suscipit ex eligendi aperiam laborum eveniet?</p>
                    </div>

                    {/* Price */}
                    <div className="col-start-7 col-span-6 row-start-4 px-4 gap-4">
                        <p className="text-2xl font-bold py-2">54.00$</p>
                        <div className="flex items-center gap-1">
                            <div className="flex items-center">
                                <IoIosStar className="text-[#FF9F0D] " />
                                <IoIosStar className="text-[#FF9F0D] " />
                                <IoIosStar className="text-[#FF9F0D] " />
                                <IoIosStar className="text-[#FF9F0D] " />
                                <IoIosStar className="text-[#FF9F0D] " />
                            </div>
                            <span className="text-sm">&nbsp;&nbsp;|&nbsp;&nbsp; 5.0 Rating &nbsp;&nbsp;|&nbsp;&nbsp; 22 Review</span>
                        </div>
                    </div>

                    {/* Dictum/cursus/Risus */}
                    <div className="col-start-7 col-span-6 row-start-5 px-4 gap-4">
                        <p>Dictum/cursus/Risus</p>
                    </div>

                    {/* Add to cart */}
                    <div className="col-start-7 col-span-6 row-start-6 px-4 gap-4 text-lg ">
                        <div className="flex items-center gap-4 border-b-2 pb-6">
                        <div className="flex items-center">
                            {/* <Button type="button" className="rounded-none bg-transparent text-black text-xl">-</Button> */}
                            <p className="border-black border-[1px] px-4 py-1">-</p>
                            <p className="font-bold px-4 py-1 border-[1px] border-black border-r-0 border-l-0">1</p>
                            <p className="border-black border-[1px] px-4 py-1">+</p>
                            {/* <Button type="button" className="rounded-none bg-transparent text-black text-xl">+</Button> */}
                        </div>
                        <div className="relative">
                            <SlHandbag className="absolute top-[30%] text-white left-3 text-xs" />
                            <Button type="button" className="bg-[#FF9F0D] rounded-none py-[18px] px-8">Add to Cart</Button>
                        </div>
                        </div>
                    </div>

                    {/* Add to Wishlist */}
                    <div className="col-start-7 col-span-6 row-start-7 px-4 gap-4">
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2"> <FaRegHeart /> Add to Wishlist</div>
                            <div className="flex items-center gap-2"> <LuGitCompareArrows /> Compare </div>
                        </div>
                        <p>Category: Pizza</p>
                        <p>Tag: Our Shop</p>
                    </div>

                    {/* Share: Social Icons */}
                    <div className="col-start-7 col-span-6 row-start-8 px-4 gap-4 ">
                        <div className="flex items-center border-b-2 pb-6 gap-2">
                            <p>Share :&nbsp;</p>
                            
                                {/* <SocialIcon Icon={FaFacebookF} Url="https://facebook.com" BgColor="#4F4F4F" Color="white" Text={14} Radius={20} /> */}
                                {socialIcons.map((icon) => (
                                    <SocialIcon 
                                        key={icon.id}
                                        Icon={icon.Icon}
                                        Url={icon.Url}
                                        BgColor="#4F4F4F"
                                        Color="white"
                                        Text={14}
                                        Radius={20}
                                    />
                                ))}

                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}


// <div className="row-start-2">
//                                 <h1 className="text-4xl">Yummy chicken chup</h1>
//                             </div>
//                             <div className="row-start-3">
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum sequi provident magnam sapiente aut. Quis aperiam, magnam distinctio voluptatum quos excepturi deleniti, error, unde nihil est magni in doloribus?</p>
//                             </div>