import { useNavigate } from "react-router-dom";
import { createClickHandler } from "../../utils/createClickHandler";
import ThreeBoxesContainer from "../../layouts/ThreeBoxesContainer";
import { colors } from "../../styles/colors";
import Button from "../../components/Button";

function Home() {
    const navigate = useNavigate();

    const actionMap = {
        'auth': () => {
            navigate('/auth');
        },
        'faq': () => {
            navigate('/faq');
        },
        'dev': () => {
            navigate('/dev');
        },
    };

    const handleClick = createClickHandler(actionMap);

    const leftBoxContent = (
        <div className="flex flex-col gap-1 items-start py-4 px-0 md:py-4 md:px-4" >
            <Button className="bg-accent-mid text-accent-dark text-sm md:text-base " bgHover={colors.black} textHover={colors.accent.light} onClick={() => handleClick('faq')}>&gt; FAQ</Button>
            <Button className="bg-accent-mid text-accent-dark text-sm md:text-base " bgHover={colors.black} textHover={colors.accent.light} onClick={() => handleClick('dev')}>&gt; Dev Corner</Button>
        </div>
    );

    const middleBoxContent = (
        <div className="flex flex-col items-start justify-center gap-6 p-10">
            <p className="text-black text-4xl md:text-6xl">no•tif</p>
            <div className="flex flex-col text-base text-black">
                <p className="">Missed the last <span className="text-accent-dark italic">price drop</span>?</p>
                <p className="">Be <span className="text-accent-dark italic">notified</span> next time!</p>
            </div>
            <Button className="bg-accent-dark text-accent-light" bgHover={colors.black} textHover={colors.accent.light} onClick={() => handleClick('auth')}>Get Started</Button>
        </div>
    );

    const rightBoxContent = (
        <div className="relative w-full h-full"> {/* Container for image and overlay */}
            <img src="https://notif-assets.s3.amazonaws.com/shopping-cart.webp" className="h-full w-full saturate-100 object-cover" alt="shopping cart"/>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-accent-contrast via-transparent to-transparent md:bg-gradient-to-r"></div> {/* Overlay */}
        </div>
    );

    return (
        < div className="flex flex-col gap-2">
            <ThreeBoxesContainer
                leftBox={leftBoxContent}
                leftClassName="flex"
                middleBox={middleBoxContent}
                middleClassName="flex bg-accent-mid"
                rightBox={rightBoxContent}
                rightClassName="flex"
            />
            <div className="h-screen w-full bg-accent-mid"></div>
        </div>
    );
}

export default Home;