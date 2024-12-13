import Image from "next/image";

interface FoodCardType {
    ImagePath: string;
    AltText: string;
    ImageWidth?: number;
    ImageHeight?: number;
    ComponentWidth?: number;
    ComponentHeight?: number;
    Subtitle: string;
    Title: string;
}

export default function FoodCard({ ImagePath, AltText, ImageWidth = 120, ImageHeight = 120, ComponentWidth = 218, ComponentHeight = 247, Subtitle, Title }: FoodCardType) {

    return(
        <div style={{width: ComponentWidth, height: ComponentHeight}} className="flex flex-col justify-between items-center py-4 text-white">
            <div className="relative">
                <Image
                    src={ImagePath}
                    alt={AltText}
                    width={ImageWidth}
                    height={ImageHeight}
                    className="object-cover"
                />
            </div>
            <h5 className="font-bold text-[16px] lg:text-h5 py-4">{Subtitle}</h5>
            <h3 className="font-bold text-[24px] lg:text-h3">{Title}</h3>
        </div>
    )
}