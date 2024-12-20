import Image from "next/image";
import { IoIosStar } from "react-icons/io";


interface LatestProductsType {
    ComponentWidth: number;
    ImagePath: string;
    ImageText: string;
    ImageWidth: number;
    DishName: string;
    Price: number;
}

export default function LatestProductsCard({ComponentWidth, ImagePath, ImageText, ImageWidth, DishName, Price}: LatestProductsType) {
    return(
        <div className="flex gap-3" style={{width: ComponentWidth}}>
            <div className="relative w-[50%]" style={{width: ImageWidth}}>
                <Image 
                    src={ImagePath}
                    alt={ImageText}
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <p className="text-sm">{DishName}</p>
                <div className="flex">
                    <IoIosStar className="text-[#FF9F0D] text-xs" />
                    <IoIosStar className="text-[#FF9F0D] text-xs" />
                    <IoIosStar className="text-[#E0E0E0] text-xs" />
                    <IoIosStar className="text-[#E0E0E0] text-xs" />
                    <IoIosStar className="text-[#E0E0E0] text-xs" />
                </div>
                <p className="text-sm">${Price}</p>
            </div>
        </div>
    )
}