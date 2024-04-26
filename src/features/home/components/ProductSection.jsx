import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getIcon } from "../../../utils/getIcon";
import { colors } from "../../../styles/colors";

function ProductSection() {
    const ref = useRef(null);
    const targetRef = useRef(null);
    const isInView = useInView(ref, { amount: 0.9 });
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

    const Card = () => {
        return (
            <div
                className="group relative h-[80vw] w-[80vw] bg-accent-mid overflow-hidden md:h-[70vw] md:w-[70vw] lg:h-[80vh] lg:w-[80vh]"
            >
            </div>
        );
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="fixed top-0 left-0 w-full flex items-center justify-center text-accent-light text-base bg-accent-dark z-50 p-2"
            >
                <div className="flex flex-row gap-1 items-center">
                    <motion.div
                        animate={{
                            y: ["0", "-10%", "0"]
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            repeat: Infinity,  // Repeat the animation indefinitely
                            repeatType: "loop"
                        }}
                    >
                        {getIcon('mouse', { color: colors.black, size: 24, stroke: 1.2 })}
                    </motion.div>
                    <p className="text-xs text-black tracking-tight italic">Scroll down</p>
                </div>

            </motion.div>
            <section ref={targetRef} className="relative h-[300vh]">
                <div ref={ref} className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x: x }} className="flex gap-4">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </motion.div>
                </div>
                <div className="flex h-[600px] w-full"></div>
            </section>
            <div className="h-screen w-full bg-accent-mid"></div>
        </>
    );
}

export default ProductSection;