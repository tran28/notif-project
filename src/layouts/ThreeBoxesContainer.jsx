import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function ThreeBoxesContainer({ leftBox, leftClassName, middleBox, middleClassName, rightBox, rightClassName }) {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end start", "end end"],
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const y1 = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

    return (
        <motion.div
            className="grid grid-cols-10 relative md:grid-rows-3">
            <motion.div
                className={`col-span-10 md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-1 z-30 ${leftClassName}`}
            >
                {leftBox}
            </motion.div>
            <motion.div
                className={`col-span-10 md:col-start-4 md:col-span-7 md:row-start-1 md:row-span-3 z-10 ${rightClassName}`}
            >
                {rightBox}
            </motion.div>
            <motion.div
                style={isMobile ? {y: 0}: {y: y1}}
                ref={ref}
                className={`col-span-10 md:col-start-2 md:col-span-5 md:row-start-2 md:row-span-1 z-20 ${middleClassName}`}
            >
                {middleBox}
            </motion.div>
        </motion.div>
    );
}

export default ThreeBoxesContainer;