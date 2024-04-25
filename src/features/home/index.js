import { useNavigate } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import Button from "../../components/Button";
import { colors } from "../../styles/colors";
import { createClickHandler } from "../../utils/createClickHandler";

function Home() {
    const { scrollY } = useScroll();
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

    // Create motion values that respond to the scrollY value
    // Change the range values to control the speed and effect of the parallax
    const y1 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <div className="flex flex-col gap-10">
            <div className="grid grid-cols-10 h-1/2 items-center overflow-hidden relative">
                <motion.div
                    className="col-start-1 col-span-10 w-full h-auto flex items-start justify-start self-start text-white z-30 px-6 py-4 lg:px-12 lg:py-8 md:col-start-1 md:col-span-3"
                >
                    <div className="flex flex-col text-black text-base gap-1 md:text-lg" >
                        <p className="cursor-pointer hover:text-accent-mid" onClick={() => handleClick('faq')}>&gt; FAQ</p>
                        <p className="cursor-pointer hover:text-accent-mid" onClick={() => handleClick('dev')}>&gt; DEV Corner</p>
                    </div>
                </motion.div>
                <motion.div
                    className="bg-accent-mid col-start-1 col-span-10 w-full h-full flex items-center justify-center text-white z-10 md:col-start-4 md:col-span-7"
                >
                    <div className="relative w-full h-full"> {/* Container for image and overlay */}
                        <img src="https://notif-assets.s3.amazonaws.com/shopping-cart.webp" className="object-cover h-full w-full saturate-100" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-accent-contrast via-transparent to-transparent md:bg-gradient-to-r"></div> {/* Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-accent-contrast via-transparent to-transparent md:bg-gradient-to-l"></div> Overlay
                    </div>
                </motion.div>
                <motion.div
                    style={{ y: y1 }}
                    className="bg-accent-mid col-start-3 col-span-7 w-full flex flex-col items-start relative z-20 p-8 gap-4 transform !-translate-y-[40%] lg:p-16 md:col-start-2 md:col-span-5 md:absolute md:!translate-y-0"
                >
                    <p className="text-accent-dark text-4xl font-extrabold md:text-[56px] lg:text-[72px]">no•tif</p>
                    <div className="flex flex-col gap-1 text-black text-xs md:text-sm lg:text-base">
                        <p>Missed the last <span className="text-accent-dark italic font-bold">price drop</span>?</p>
                        <p>Be <span className="text-accent-dark italic font-bold">notified</span> next time!</p>
                    </div>
                    <Button className="bg-accent-dark text-accent-light" bgHover={colors.black} textHover={colors.accent.light} onClick={() => handleClick('auth')}>Get Started</Button>
                </motion.div>
            </div>
            <div className="bg-accent-mid h-screen"></div>
        </div>
    );
}

export default Home;