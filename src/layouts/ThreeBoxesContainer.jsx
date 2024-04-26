import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import useMobileView from "../hooks/useMobileView";

function ThreeBoxesContainer({ leftBox, leftClassName, middleBox, middleClassName, rightBox, rightClassName }) {
    const ref = useRef(null);
    const isMobile = useMobileView();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end start", "end end"],
    });

    const desktopY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
    const mobileY = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <motion.div
            className="grid grid-cols-10 relative grid-rows-1 md:grid-rows-3"
        >
            <motion.div
                className={`col-span-10 md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-1 z-30 ${leftClassName}`}
            >
                {leftBox}
            </motion.div>
            <motion.div
                style={{ opacity: opacity }}
                className={`col-span-10 md:col-start-4 md:col-span-7 md:row-start-1 md:row-span-3 z-10 ${rightClassName}`}
            >
                {rightBox}
            </motion.div>
            <motion.div
                style={isMobile ? { y: mobileY } : { y: desktopY }}
                ref={ref}
                className={`col-span-10 md:col-start-2 md:col-span-5 md:row-start-2 md:row-span-1 z-20 ${middleClassName}`}
            >
                {middleBox}
            </motion.div>
        </motion.div>
    );
}

export default ThreeBoxesContainer;