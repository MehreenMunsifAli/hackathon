import Image from "next/image";
import SocialIcon from "./SocialIcon";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import Link from "next/link";
import Rectangle from "./Rectangle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {

    return(
        <>
        <div className="container max-w-screen-[1280px] mx-auto  text-white mt-16">
            
            {/* Support content */}
            <div className="lg:w-[85%] mx-auto pb-8 lg:pb-12 mb-4 flex flex-col lg:flex-row items-center justify-between border-b-[1px] border-[#FF9F0D]">
                {/* Left Content */}
                <div>
                    <h4 className="text-[32px] text-[#FF9F0D]">St<span className="text-white">ill You Need Our Support?</span></h4>
                    <p className="text-[16px] mt-4 mb-2 lg:mb-0">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                </div>
                {/* Right Content */}
                <div className="w-[459px] flex ">
                    <Input
                        type="email"
                        placeholder="Enter Your Email"
                        className="bg-[#FF9F0D] placeholder-slate-50 h-[56px] pl-4 w-[296px] rounded-sm rounded-r-none border-none "
                    />
                    <Button type="button" className="h-[56px] bg-white hover:bg-gray-700 transition duration-300 text-[#FF9F0D] w-[163px] rounded-sm rounded-l-none">Subscribe Now</Button>
                </div>
            </div>

            {/* Links */}
            <div className=" gap-32 mt-16 text-white flex flex-col lg:flex-row items-center lg:items-start justify-between">
                {/* About us */}
                <div className="w-1/4 flex flex-col items-center lg:items-start ">
                    <h5 className="text-[24px] font-bold">About Us.</h5>
                    <p className="w-[312px] h-[95px] my-4 text-[16px] text-center lg:text-left">
                    orporate clients and leisure travelers has
                    been relying on Groundlink for dependab
                    safe, and professional chauffeured car
                    service in major cities across World.
                    </p>
                    <div className="flex mt-8 gap-4 flex-col lg:flex-row items-center">
                        <Rectangle ImageSrc="/assets/images/ClockClockwise.png" AltText="Clock Image" ComponentWidth="78px" ComponentHeight="72px" IconWidth={40} IconHeight={40} />
                        <div className="text-center lg:text-left">
                            <p className="text-[16px]">Opening Hours</p>
                            <p className="text-[14px]">Mon - Sat (8.00 - 6.00)</p>
                            <p className="text-[14px]">Sunday - Closed</p>
                        </div>
                    </div>
                    
                </div>

                {/* Useful Links */}
                <div className="w-1/4 text-center lg:text-left">
                    <h5 className="text-[24px] font-bold">Useful Links</h5>
                    <ul className="mt-8 text-[20px]">
                        <li className="mb-6"><Link href={"/"}>About</Link></li>
                        <li className="mb-6"><Link href={"/"}>News</Link></li>
                        <li className="mb-6"><Link href={"/"}>Partners</Link></li>
                        <li className="mb-6"><Link href={"/"}>Team</Link></li>
                        <li className="mb-6"><Link href={"/"}>Menu</Link></li>
                        <li className="mb-6"><Link href={"/"}>Contacts</Link></li>
                    </ul>
                </div>

                 {/* Help */}
                 <div className="w-1/4 text-center lg:text-left">
                    <h5 className="text-[24px] font-bold">Help?</h5>
                    <ul className="mt-8 text-[20px]">
                        <li className="mb-6"><Link href={"/"}>FAQ</Link></li>
                        <li className="mb-6"><Link href={"/"}>Term & conditions</Link></li>
                        <li className="mb-6"><Link href={"/"}>Reporting</Link></li>
                        <li className="mb-6"><Link href={"/"}>Documentation</Link></li>
                        <li className="mb-6"><Link href={"/"}>Support Policy</Link></li>
                        <li className="mb-6"><Link href={"/"}>Privacy</Link></li>
                    </ul>
                </div>

                {/* Recent Post */}
                <div className="w-1/4 flex flex-col items-center lg:items-start">
                    <h5 className="text-[24px] font-bold">Recent Post</h5>
                    <div className="w-[244px] h-[53px] flex gap-4 mt-8 overflow-hidden items-end bg-transparent">
                        <div className="relative w-[59px] h-[59px] ">
                            <Image 
                                src={"/assets/images/unsplash_CLMpC9UhyTo.png"}
                                alt="Mask Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[16px] text-neutral-500">20 Feb 2022</p>
                            <p className="text-[18px]">Keep Your Business</p>
                        </div>
                    </div>
                    <div className="w-[244px] h-[53px] flex gap-4 mt-4 overflow-hidden items-end bg-transparent">
                        <div className="relative w-[59px] h-[59px] ">
                            <Image 
                                src={"/assets/images/unsplash_CRoAeTh5S_I.png"}
                                alt="Mask Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[16px] text-neutral-500">20 Feb 2022</p>
                            <p className="text-[18px]">Keep Your Business</p>
                        </div>
                    </div>
                    <div className="w-[244px] h-[53px] flex gap-4 mt-4 overflow-hidden items-end bg-transparent">
                        <div className="relative w-[59px] h-[59px] ">
                            <Image 
                                src={"/assets/images/Mask_Group.png"}
                                alt="Mask Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[16px] text-neutral-500">20 Feb 2022</p>
                            <p className="text-[18px]">Keep Your Business</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
         {/* End */}
        <footer className="container max-w-screen-[1280px] mx-auto h-[100px] bg-[#FF9F0D] flex flex-col lg:flex-row lg:justify-between justify-around items-center text-white">
            <p className="text-[16px]">
                Copyright &copy; 2022 by Ayeman. All Rights Reserved.  
            </p>
            <div className="w-[240px] flex gap-4">
                <SocialIcon Icon={FaFacebookF} Url="https://facebook.com" />
                <SocialIcon Icon={FaTwitter} Url="https://twitter.com" />
                <SocialIcon Icon={FaInstagram} Url="https://instagram.com" />
                <SocialIcon Icon={FaYoutube} Url="https://youtube.com" Color="#FF9F0D" />
                <SocialIcon Icon={FaPinterest} Url="https://pinterest.com" />
            </div>
        </footer>
    
        </>
    )
}