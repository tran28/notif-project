import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ProductSection() {
    const myRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: myRef,
        offset: ["start end", "end end"],
    });

    const o1 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    return (
        <motion.div
        ref={myRef}
        style={{ opacity: o1 }}
        className="flex items-center justify-center h-screen w-full bg-accent-mid">
        <h1 className="text-black">Second Section</h1>
    </motion.div>
    );
}

export default ProductSection;