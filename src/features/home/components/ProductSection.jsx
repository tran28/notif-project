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
    const isChildInPartialView = useInView(ref, { amount: isMobileView ? 0.2 : 0.5, once: true });

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const cardWidth = 600;
    const gapWidth = 28;
    const totalWidth = cards.length * cardWidth + (cards.length - 1) * gapWidth;
    const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${totalWidth - windowWidth}px`]);

    const cardAnimations = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        },
    }

    return (
        <div>
            {/* Pop up banner when the section is in view to notify user to scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="fixed top-0 left-0 w-full flex items-center justify-center text-accent-light text-base bg-accent-contrast z-50 p-2"
            >
                <ScrollAlert message='Scroll to continue' />
            </motion.div>

            {/* Main section */}
            <section ref={targetRef} className="relative md:h-[300vh]">
                <div ref={ref} className="md:sticky md:top-0 md:h-screen flex items-center overflow-hidden">
                    <motion.div
                        style={{ x: isMobileView ? 0 : x }}
                        initial="hidden"
                        animate={isChildInPartialView ? "visible" : "hidden"}
                        transition={{ staggerChildren: 0.2 }}
                        className="flex flex-col gap-4 w-full md:w-auto md:flex-row"
                    >
                        {cards.map((card, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardAnimations}
                                >
                                    <Card key={index} number={card.number} content={card.content} />
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default ProductSection;