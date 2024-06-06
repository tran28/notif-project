import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import MenuButton from './MenuButton';
import MenuLinks from './MenuLinks';
import useMobileView from '../../../hooks/useMobileView';

export default function Menu() {
    const [isActive, setIsActive] = useState(false);
    const isMobile = useMobileView();

    const menuVariants = {
        open: {
            width: `${isMobile ? "90vw" : "500px"}`,
            height: `${isMobile ? "80vh" : "600px"}`,
            top: "-16px",
            right: "-18px",
            zIndex: "20",
            borderRadius: "18px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
        },
        closed: {
            width: "56px",
            height: "56px",
            top: "0px",
            right: "0px",
            zIndex: "20",
            borderRadius: "28px",
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
        }
    }

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
    }, [isActive]);

    return (
        <div className="relative">
            <motion.div
                className="bg-accent-dark/10 absolute backdrop-blur-lg"
                variants={menuVariants}
                initial="closed"
                animate={isActive ? "open" : "closed"}
            >
                <AnimatePresence>
                    {isActive && <MenuLinks />}
                </AnimatePresence>
            </motion.div>
            <MenuButton isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
        </div>
    );
}
