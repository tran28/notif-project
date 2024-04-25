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
            <div className="grid grid-cols-10 h-auto items-center overflow-hidden relative md:h-[65vw]">
                <motion.div
                    className="col-start-1 col-span-10 w-full h-auto flex items-start justify-start self-start text-white z-30 px-0 py-4 lg:px-12 lg:py-8 md:col-start-1 md:col-span-3 md:px-6"
                >
                    <div className="flex flex-col gap-1 items-start" >
                        <Button className="bg-accent-mid text-accent-dark text-sm md:text-lg " bgHover={colors.black} textHover={colors.accent.light} onClick={() => handleClick('faq')}>&gt; FAQ</Button>
                        <Button className="bg-accent-mid text-accent-dark text-sm md:text-lg " bgHover={colors.black} textHover={colors.accent.light} onClick={() => handleClick('dev')}>&gt; DEV Corner</Button>
                    </div>
                </motion.div>
                <motion.div
                    className="bg-accent-mid col-start-1 col-span-10 w-full h-full flex items-center justify-center text-white z-10 md:col-start-4 md:col-span-7 md:flex"
                >
                    <div className="relative w-full h-full"> {/* Container for image and overlay */}
                        <img src="https://notif-assets.s3.amazonaws.com/shopping-cart.webp" className="object-cover h-full w-full saturate-100 object-left" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-accent-contrast via-transparent to-transparent md:bg-gradient-to-r"></div> {/* Overlay */}
                    </div>
                </motion.div>
                <motion.div
                    style={{ y: y1 }}
                    className="bg-accent-mid col-start-1 col-span-10 w-full flex flex-col items-start relative z-20 p-8 gap-4 lg:p-16 md:col-start-2 md:col-span-5 md:absolute"
                >
                    <p className="text-black text-4xl font-light md:text-[48px] lg:text-[64px] lg:pb-2">no•tif</p>
                    <div className="flex flex-col gap-1 text-black text-xs md:text-sm lg:text-base">
                        <p>Missed the last <span className="text-accent-dark italic font-medium">price drop</span>?</p>
                        <p>Be <span className="text-accent-dark italic font-medium">notified</span> next time!</p>
                    </div>
                    <Button className="bg-accent-dark text-accent-light" bgHover={colors.black} textHover={colors.accent.light} onClick={() => handleClick('auth')}>Get Started</Button>
                </motion.div>
            </div>
            <div className="bg-accent-mid h-screen"></div>
        </div>
    );
}

export default Home;