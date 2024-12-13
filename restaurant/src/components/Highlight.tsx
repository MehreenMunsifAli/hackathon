import FoodCard from "./FoodCard";

export default function Highlight() {

    return (
        <div className="container max-w-screen-[1280px] mx-auto my-16 py-16 relative">
            {/* Background image with opacity */}
            <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/images/unsplash_bpPTlXWTOvg.png')",
                    opacity: 0.2,
                }}
            ></div>

            {/* Content */}
            <div className=" relative z-10 mx-auto flex justify-between items-center flex-wrap lg:flex-nowrap">
                <FoodCard
                    ImagePath="/assets/images/Group-1.png"
                    AltText="Food Item"
                    Subtitle="Professional Chefs"
                    Title="420"
                />
                <FoodCard
                    ImagePath="/assets/images/Group-2.png"
                    AltText="Food Item"
                    Subtitle="Delicious Food"
                    Title="320"
                />
                <FoodCard
                    ImagePath="/assets/images/Group-3.png"
                    AltText="Food Item"
                    Subtitle="Delicious Food"
                    Title="320"
                />
                <FoodCard
                    ImagePath="/assets/images/Group-4.png"
                    AltText="Food Item"
                    Subtitle="Delicious Food"
                    Title="320"
                />
            </div>
        </div>
    )
}