
import Image from "next/image";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaPinterestP } from "react-icons/fa";
import {Great_Vibes} from "next/font/google";
import Link from "next/link";


const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function Hero() {
    return (
        <>
            
            {/* Hero */}
            <div className="container max-w-screen-[1280px] mx-auto mb-16">
                <div className=" mt-16 lg:mt-0 mb-12 text-white flex flex-col items-center lg:flex-row justify-between relative">
                    {/* Social Icons */}
                    <div className=" hidden lg:flex flex-col items-center space-y-6 absolute left-[-3%] top-[7%]">
                        <div className="border-l-2 h-[158px]"></div>
                        <Link href={"https://www.facebook.com"}>
                            <RiFacebookFill className="cursor-pointer"/>
                        </Link>
                        <Link href={"https://www.twitter.com"}>
                            <FaTwitter className="text-[#FF9F0D] cursor-pointer"/>
                        </Link>
                        <Link href={"https://www.pinterest.com"}>
                            <FaPinterestP className="cursor-pointer"/>
                        </Link>
                        <div className="mt-[300px] border-l-2 h-[158px]"></div>
                    </div>
                    {/* -- Social Icons End Here -- */}

                    {/* Left Content */}
                    <div className=" mt-0 text-center lg:text-left ">
                        <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-h4`}>It&apos;s Quick & Amusing!</h1>
                        <h1 className="lg:max-w-[472px] lg:h-[136px] text-h2 font-bold leading-tight mt-2 whitespace-nowrap text-center lg:text-left">
                            <span className="text-[#FF9F0D] ">Th</span>e Art of Speed <br /> Food Quality
                        </h1>
                        <p className=" mx-auto lg:mx-0 mt-4  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
                            pharetra dictum neque massa congue.
                        </p>
                        <button className="mt-8 px-12 py-4 bg-[#FF9F0D] text-white font-semibold rounded-full hover:bg-transparent hover:border-2 hover:px-[46px] hover:py-[14px] hover:border-[#FF9F0D] transition duration-300">
                            See Menu
                        </button>
                    </div>
                    {/* Right Content */}
                    <div className=" relative flex justify-center lg:justify-end">
                        <div className="relative mt-4 w-[550px] h-[450px] lg:w-[800px] lg:h-[600px] ">
                        <Image
                            alt="Food Plate"
                            src={"/assets/images/hero_image.png"}
                            fill
                            className="object-cover"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




  {/* Hero */}
  <div className="container mx-auto mt-24 mb-12 text-white flex flex-col lg:flex-row justify-between items-center relative">
  {/* Social Icons */}
  {/* <div className=" hidden lg:w-[492px] lg:block absolute lg:left-36 lg:top-32 sm:left-0">
      <div className="border-b-2 w-[158px] transform rotate-90"></div>
      <RiFacebookFill className="absolute top-28 left-[14%]"/>
      <FaTwitter className="absolute top-36 left-[14%] text-[#FF9F0D]"/>
      <FaPinterestP className="absolute top-44 left-[14%]"/>
      <div className="mt-[300px] border-b-2 w-[158px] transform rotate-90"></div>
  </div> */}

  <div className=" hidden lg:w-[492px] lg:block absolute inset-0">
      <div className="border-b-2 w-[158px] transform rotate-90"></div>
      <RiFacebookFill className="absolute top-28 left-[14%]"/>
      <FaTwitter className="absolute top-36 left-[14%] text-[#FF9F0D]"/>
      <FaPinterestP className="absolute top-44 left-[14%]"/>
      <div className="mt-[300px] border-b-2 w-[158px] transform rotate-90"></div>
  </div>
  {/* -- Social Icons End Here -- */}

  
  <div className="container lg:pl-24 flex flex-col lg:flex-row mt-[32px] items-center lg:justify-between ">
      {/* Left Content */}
      <div className=" lg:w-1/2 lg:max-w-[472px] w-full lg:mt-3 mt-0 flex flex-col items-center lg:items-start">
          <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-[32px] mt-12`}>It&apos;s Quick & Amusing!</h1>
          <h1 className="lg:w-[472px] lg:h-[136px] text-[60px] font-bold leading-tight mt-2 whitespace-nowrap text-center lg:text-left">
              <span className="text-[#FF9F0D] ">Th</span>e Art of Speed <br /> Food Quality
          </h1>
          <p className="w-1/2 text-gray-400 mt-8 lg:w-[418px] lg:h-[48px] text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
          </p>
          <button className="mt-8 px-6 py-3 w-[190px] h-[60px] bg-[#FF9F0D] text-white font-semibold rounded-full hover:bg-yellow-500 transition">
              See Menu
          </button>
      </div>
      {/* Right Content */}
      <div className="w-full lg:max-w-[878px] relative flex justify-center lg:justify-end sm:mt-8 lg:mt-0 ">
          <div className="relative w-[500px] h-[400px] lg:w-[877px] lg:h-[670px] overflow-hidden ">
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