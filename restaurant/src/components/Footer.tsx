import SocialIcon from "./SocialIcon";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Footer() {

    return(
        <>
        <div className="max-w-screen-[1280px] mx-auto bg-[#FF9F0D] text-white mt-16">

            {/* End */}
            <footer className="container mx-auto h-[100px] flex flex-col lg:flex-row lg:justify-between justify-around items-center ">
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
        </div>
        
        </>
    )
}