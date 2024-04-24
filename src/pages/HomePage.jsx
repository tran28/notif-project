import { useNavigate } from "react-router-dom";
import { createClickHandler } from "../utils/createClickHandler";
import Button from "../components/Button";
import { colors } from "../styles/colors";
import { useScroll, useTransform, motion } from "framer-motion";
import image from "./../assets/shopping-bag.jpg"

function HomePage() {
    // const navigate = useNavigate();

    // const actionMap = {
    //     'auth': () => {
    //         navigate('/auth');
    //     },
    //     'dashboard': () => {
    //         navigate('/dashboard');
    //     },
    // };

    // const handleClick = createClickHandler(actionMap);

    // return (
    //     <div className="flex flex-col gap-5">
    //         <h1>Home Page → Currently Links to Routes</h1>
    //         {/* Update onClick to pass a function that will be called on click */}
    //         <Button onClick={() => handleClick('auth')} className="bg-accent-mid text-accent-dark" bgHover={colors.accent.dark} textHover={colors.accent.light}>Go to Login/Register</Button>
    //         <Button onClick={() => handleClick('dashboard')} className="bg-accent-mid text-accent-dark" bgHover={colors.accent.dark} textHover={colors.accent.light}>Go to Dashboard</Button>
    //     </div>
    // );

    const { scrollY } = useScroll();
    const navigate = useNavigate();

    // Create motion values that respond to the scrollY value
    // Change the range values to control the speed and effect of the parallax
    const y1 = useTransform(scrollY, [0, 500], [0, -100]);

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/auth');
    }

    return (
        <div className="flex flex-col gap-10 pt-16">
            <div className="grid grid-cols-10 h-[40vh] items-center overflow-hidden relative md:h-[80vh]">
                <motion.div
                    className="bg-accent-mid col-start-1 col-span-10 w-full h-full flex items-center justify-center text-white z-10 md:col-start-4 md:col-span-7"
                >
                    <img src={image} className="object-cover h-full w-full" />
                </motion.div>
                <motion.div
                    style={{ y: y1 }}
                    className="bg-accent-mid col-start-2 col-span-7 w-full flex flex-col items-start justify-start absolute z-20 p-8 gap-6 md:p-12 lg:p-16 md:col-start-2 md:col-span-5"
                >
                    <p className="text-black text-4xl font-extrabold md:text-[56px] lg:text-[72px]">no•tif</p>
                    <div className="flex flex-col gap-1 text-black text-sm md:text-base lg:text-lg">
                        <p>Missed the last <span className="text-accent-dark italic">price drop</span>?</p>
                        <p>Be <span className="text-accent-dark italic">notified</span> next time!</p>
                    </div>
                    <Button className="bg-accent-mid text-black border-2 border-black/40" bgHover={colors.black} textHover={colors.accent.light} onClick={handleClick}>Get Started</Button>
                </motion.div>
            </div>
            <div className="bg-accent-mid border-black h-screen"></div>
        </div>
    );
}

export default HomePage;
