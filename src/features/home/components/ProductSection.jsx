import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ProductSection() {
    const ref = useRef(null);
    const targetRef = useRef(null);
    const isInView = useInView(ref, { amount: 0.8 });
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    const Card = () => {
        return (
            <div
                className="group relative h-[80vw] w-[80vw] bg-accent-mid overflow-hidden md:h-[60vh] md:w-[60vh]"
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
                className="fixed top-0 left-0 h-[60px] w-full flex items-center justify-center bg-black z-50 text-accent-light"
            >
                Scroll Down
            </motion.div>
            <section ref={targetRef} className="relative h-[300vh] bg-accent-ligth">
                <div ref={ref} className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{x: x}} className="flex gap-4">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default ProductSection;