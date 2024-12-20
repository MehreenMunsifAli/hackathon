import Image from "next/image";

export default function Banner({Title, Page }: {Title: string, Page: string}) {
    return(
        <>
            <div className="container max-w-screen-lg mx-auto mt-4 relative ">
                <div className="relative w-full h-[200px] md:h-[250px]">
                    <Image
                        className="object-cover"
                        src={"/assets/images/banner/unsplash_4ycv3Ky1ZZU.svg"}
                        alt="Vegetable Image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw"
                    />
                </div>
                <div className="text-white text-center absolute inset-y-1/3 left-[45%]">
                    <h4 className="text-2xl font-bold">{Title}</h4>
                    <p className="mt-4 text-xs">Home &gt; <span className="text-[#FF9F0D]">{Page}</span></p>
                </div>
            </div>        
        </>
    )
}