import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Menu from "./Menu";
import { siteInfo } from "../../../data/siteInfo"

function Nav({ className }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <nav ref={ref} className={`flex justify-center ${className}`}>
            <motion.div style={{ y, opacity }} className="flex w-full max-w-[1440px] px-10 my-8 justify-between items-center">
                {/* Logo */}
                <div className=" w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
                    <h1 className="text-5xl">{siteInfo.name}</h1>
                </div>

                <div className="flex">
                    <Menu />
                </div>

            </motion.div>
        </nav>
    );
}

export default Nav;
