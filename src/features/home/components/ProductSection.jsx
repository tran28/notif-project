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
    const isInView = useInView(ref, { amount: 0.9 });

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const cardWidth = 600;
    const gapWidth = 28;
    const totalWidth = cards.length * cardWidth + (cards.length - 1) * gapWidth;
    const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${totalWidth - windowWidth}px`]);

    return (
        <div>
            {/* Pop up banner when the section is in view to notify user to scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="fixed top-0 left-0 w-full flex items-center justify-center text-accent-light text-base bg-accent-dark z-50 p-2"
            >
                <ScrollAlert message='Scroll' />
            </motion.div>

            {/* Main section */}
            <section ref={targetRef} className="relative md:h-[300vh]">
                <div ref={ref} className="md:sticky md:top-0 md:h-screen flex items-center overflow-hidden">
                    <motion.div
                        style={{ x: isMobileView ? 0 : x }}
                        className="flex flex-col gap-4 w-full md:w-auto md:flex-row"
                    >
                        {cards.map((card, index) => {
                            return (
                                <Card key={index} number={card.number} content={card.content} />
                            )
                        })}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default ProductSection;