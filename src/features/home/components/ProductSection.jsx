import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollAlert from "./ScrollAlert";
import useCardContents from "../hooks/useCardContents";
import Card from "./Card";
import useMobileView from "../../../hooks/useMobileView";
import useWindowWidth from "../hooks/useWindowWidth";

function ProductSection() {
    const cards = useCardContents();
    const isMobileView = useMobileView();
    const windowWidth = useWindowWidth();

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.8 });

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const cardWidth = isMobileView ? 0.8 * windowWidth : 600;
    const gapWidth = 28;
    const totalWidth = cards.length * cardWidth + (cards.length - 1) * gapWidth;
    const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${totalWidth - windowWidth}px`]);

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="fixed top-0 left-0 w-full flex items-center justify-center text-accent-light text-base bg-accent-dark z-50 p-2"
            >
                <ScrollAlert message='Scroll down' />
            </motion.div>
            <section ref={targetRef} className="relative h-[300vh]">
                <div ref={ref} className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div
                        style={{ x: x }}
                        className="flex gap-4 sticky right-0"
                    >
                        {cards.map((card, index) => {
                            return (
                                <div key={index}>
                                    <Card card={card} />
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default ProductSection;