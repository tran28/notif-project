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

    const desktopY = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const mobileY = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <motion.div
            className="grid grid-cols-10 relative"
        >
            <motion.div
                className={`col-span-10 z-30 ${leftClassName}`}
            >
                {leftBox}
            </motion.div>
            <motion.div
                style={{ opacity: opacity }}
                className={`col-span-10 z-10 ${rightClassName}`}
            >
                {rightBox}
            </motion.div>
            <motion.div
                style={isMobile ? { y: mobileY } : { y: desktopY }}
                ref={ref}
                className={`col-span-10 z-20 ${middleClassName}`}
            >
                {middleBox}
            </motion.div>
        </motion.div>
    );
}

export default ThreeBoxesContainer;