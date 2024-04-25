import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function ThreeBoxesContainer({ leftBox, leftClassName, middleBox, middleClassName, rightBox, rightClassName }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end start", "end end"],
    });

    const y1 = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
    return (
        <div className="grid grid-cols-10 overflow-hidden relative h-auto pb-16 md:grid-rows-3 md:h-[90vh] md:pb-0">
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
                style={{y: y1}}
                ref={ref}
                className={`col-span-10 md:col-start-2 md:col-span-5 md:row-start-2 md:row-span-1 z-20 ${middleClassName}`}
            >
                {middleBox}
            </motion.div>
        </div>
    );
}

export default ThreeBoxesContainer;