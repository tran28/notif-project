import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors } from '../../../styles/colors';
import useMobileView from "./../../../hooks/useMobileView"

function Card({ content, number }) {
    const ref = useRef(null);
    const isMobileView = useMobileView();
    const isInView = useInView(ref, { once: false, amount: 0.8 });

    // Animation for the number scaling
    const numberAnimation = {
        initial: { scale: 1, opacity: 0.2 },
        animate: { scale: isInView ? 1.5 : 1, opacity: isInView ? 1 : 0.2, color: isInView ? colors.accent.dark : colors.black }
    };

    return (
        <div ref={ref} className="group relative h-[100vw] w-full md:h-[600px] md:w-[600px]">
            <div className='flex w-full h-full'>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={numberAnimation}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-5xl font-semibold md:text-7xl z-20"
                    style={{ position: 'absolute', top: isMobileView ? '5%' : '8%', left: isMobileView ? '5%' : '8%' }}
                >
                    {number}
                </motion.div>
                <div className="w-full h-full">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Card;