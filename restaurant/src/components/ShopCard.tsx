import Image from "next/image";


interface ShopCardType {
    id?: number;
    ImagePath: string;
    AltText: string;
    ImageWidth?: string;
    ImageHeight?: string;
    CurrentPrice: number;
    OldPrice?: number;
    DishName: string;
    ComponentWidth?: string
}

export default function ShopCard({ ComponentWidth = '200px', ImagePath, ImageHeight, ImageWidth, AltText, CurrentPrice, DishName, OldPrice}: ShopCardType) {
    return(
        <div className=" overflow-hidden text-white bg-transparent " style={{width: ComponentWidth}}>
            <div className="relative" style={{width: ImageWidth, height: ImageHeight}}>
                <Image
                    className="object-cover"
                    src={ImagePath}
                    alt={AltText}
                    fill
                />
            </div>
            <div className="my-2">
                
                <p className=" font-bold text-wrap text-[#333333] ">{DishName}</p>
                <p className="text-[#FF9F0D] text-sm mt-1">${CurrentPrice} 
                {OldPrice && (<span className="line-through text-[#828282] ml-2">${OldPrice}</span>)}
                </p>
            </div>
        </div>
    )
}