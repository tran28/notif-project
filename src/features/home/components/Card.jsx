import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors } from '../../../styles/colors';

function Card({ content, number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.8 });

    // Animation for the number scaling
    const numberAnimation = {
        initial: { scale: 1, opacity: 0.2 },
        animate: { scale: isInView ? 1.5 : 1, opacity: isInView ? 1 : 0.2, color: isInView ? colors.accent.dark : colors.black }
    };

    return (
        <div ref={ref} className="group relative h-[80vw] w-[80vw] md:h-[600px] md:w-[600px] overflow-hidden">
            <div className='flex w-full h-full'>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={numberAnimation}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-6xl font-semibold z-20 md:text-8xl"
                    style={{ position: 'absolute', top: '6%', left: '8%' }}
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