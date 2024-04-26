import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollAlert from "./ScrollAlert";
import useCardContents from "../hooks/useCardContents";
import Card from "./Card";

function ProductSection() {
    const ref = useRef(null);
    const targetRef = useRef(null);
    const isInView = useInView(ref, { amount: 0.9 });
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
    const cards = useCardContents();

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="fixed top-0 left-0 w-full flex items-center justify-center text-accent-light text-base bg-accent-dark z-50 p-2"
            >
                <ScrollAlert message='Scroll down' />
            </motion.div>
            <section ref={targetRef} className="relative h-[300vh]">
                <div ref={ref} className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x: x }} className="flex gap-4">
                        {cards.map((card, index) => {
                            return (
                                <Card key={index} card={card} />
                            )
                        })}
                    </motion.div>
                </div>
                <div className="flex h-[600px] w-full"></div>
            </section>
            <div className="h-screen w-full bg-accent-mid"></div>
        </>
    );
}

export default ProductSection;