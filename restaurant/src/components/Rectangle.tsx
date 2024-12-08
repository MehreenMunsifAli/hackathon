import Image from "next/image";

interface RectangleType {
    ImageSrc: string;
    AltText: string;
    Label?: string;
    ImageWidth?: number;
    ImageHeight?: number;
    IconWidth?: number;
    IconHeight?: number;
}

export default function Rectangle({ImageSrc, AltText, Label, ImageWidth = 102, ImageHeight = 100, IconWidth = 56, IconHeight = 56 }: RectangleType) {

    return(
        <div style={{width: ImageWidth}}>
            <div className=" bg-[#FF9F0D] rounded-[6px] flex items-center justify-center" style={{height: ImageHeight}}>
                <Image 
                    src={ImageSrc}
                    alt={AltText}
                    width={IconWidth}
                    height={IconHeight}
                    className="object-cover"
                />
            </div>
            {Label && (
                <p className="text-[18px] text-center mt-[9px]">{Label}</p>
            )}
      </div> 
    )
}