import useLandingContents from './hooks/useLandingContents'
import ThreeBoxesContainer from './../../layouts/ThreeBoxesContainer'
import ProductSection from './components/ProductSection'

function Home() {
    const { leftBoxContent, middleBoxContent, rightBoxContent } = useLandingContents();

    return (
        < div className="flex flex-col gap-10">
            <div>
                <ThreeBoxesContainer
                    leftBox={leftBoxContent}
                    leftClassName="flex"
                    middleBox={middleBoxContent}
                    middleClassName="flex bg-accent-mid"
                    rightBox={rightBoxContent}
                    rightClassName="flex"
                />
            </div>
            <ProductSection />
        </div>
    );
}

export default Home;