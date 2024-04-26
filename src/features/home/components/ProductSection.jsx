import { motion } from "framer-motion";

function ProductSection() {
    return (
        <motion.div
            className="flex items-center justify-center h-screen w-full bg-accent-mid">
            <h1 className="text-black">Second Section</h1>
        </motion.div>
    );
}

export default ProductSection;