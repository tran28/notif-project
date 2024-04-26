import ThreeBoxesContainer from "../../../layouts/ThreeBoxesContainer";
import useLandingContents from "../hooks/useLandingContents";
import ProductSection from "./ProductSection";

function Landing() {
    const { leftBoxContent, middleBoxContent, rightBoxContent } = useLandingContents();
    return (
        < div className="flex flex-col gap-10">
            <div>
                <ThreeBoxesContainer
                    leftBox={leftBoxContent}
                    leftClassName="flex"
                    middleBox={middleBoxContent}
                    middleClassName={`flex bg-accent-mid md:shadow-[0_8px_30px_rgba(178,146,125,0.3)]`}
                    rightBox={rightBoxContent}
                    rightClassName="flex"
                />
                <ProductSection />
            </div>
        </div>
    );
}

export default Landing;