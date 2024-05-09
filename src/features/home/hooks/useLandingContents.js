import { useNavigate } from "react-router-dom";
import { createClickHandler } from "../../../utils/createClickHandler";
import Button from "../../../components/Button";
import { colors } from "../../../styles/colors";
import { siteInfo } from "../../../data/siteInfo";
import ScrollAlert from "../components/ScrollAlert";
import useMobileView from "../../../hooks/useMobileView";


function useLandingContents() {
    const navigate = useNavigate();
    const isMobileView = useMobileView();

    const actionMap = {
        'dashboard': () => {
            navigate('/dashboard');
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
        <div className="flex flex-col gap-1 items-start mb-4 md:hidden">
            <Button className="bg-accent-mid text-accent-dark text-sm md:text-base " bgHover={colors.black} textHover={colors.accent.light} onClick={() => handleClick('faq')}>FAQ</Button>
            <Button className="bg-accent-mid text-accent-dark text-sm md:text-base " bgHover={colors.black} textHover={colors.accent.light} onClick={() => handleClick('dev')}>Dev Corner</Button>
        </div>
    );

    const middleBoxContent = (
        <div className="flex flex-col items-start justify-center gap-6 p-10 w-full">
            <p className="text-black text-4xl md:text-6xl">{siteInfo.name}</p>
            <div className="flex flex-col text-base text-black">
                <p className="">Missed the last <span className="text-accent-dark italic">price drop</span>?</p>
                <p className="">Be <span className="text-accent-dark italic">notified</span> next time!</p>
            </div>

            <Button className="bg-accent-dark text-accent-light text-sm md:text-base" bgHover={colors.black} textHover={colors.accent.light} onClick={() => handleClick('dashboard')}>Get Started</Button>
            <ScrollAlert message="Scroll down to learn more" />
        </div>
    );

    const rightBoxContent = (
        <div className="relative w-full h-full"> {/* Container for image and overlay */}
            {isMobileView ?
                <div>
                    <img src="https://notif-assets.s3.amazonaws.com/shopping-cart.webp" className="w-full object-cover" alt="shopping cart" />
                    <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-accent-mid"></div>
                </div>
                :
                <div>
                    <video src="https://notif-assets.s3.amazonaws.com/video.mp4" type="video/mp4" className="w-full object-cover h-full min-h-[60vh] max-h-[70vh]" autoPlay muted loop playsInline />
                    {/* <div className="absolute top-3/4 left-0 w-full h-1/4 bg-gradient-to-t from-accent-mid"></div> */}
                </div>
            }
        </div>
    );
    return { leftBoxContent, middleBoxContent, rightBoxContent };
}

export default useLandingContents;