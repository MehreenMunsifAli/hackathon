import Link from "next/link";
import { IconType } from "react-icons";

interface SocialIconType {
    Icon: IconType;
    Url: string;
    Color?: string;
    Text?: number;
}

export default function SocialIcon({Icon, Url, Color = '#4F4F4F', Text = 16 }: SocialIconType) {

    return(
        <div className="w-[36px] h-[34px] rounded-[2px] bg-white text-[#4F4F4F] flex items-center justify-center">
            <Link href={Url} target="_blank" rel="noopener noreferrer">
                <Icon style={{ fontSize: Text, color: Color}} />
            </Link>
        </div>
    )
}