import { motion } from "framer-motion";

function CTASection() {
    return (
        <motion.div className="flex flex-col gap-10 min-h-screen">
            <div className="flex flex-col md:flex-row border-4 border-accent-dark">
                <h1 className="text-6xl text-accent-dark font-bold bg-accent-dark/20 p-8">OUR GOAL</h1>
                <div className="flex flex-col gap-4 p-8">
                    <p className="text-sm md:text-base text-accent-dark">Every app we create is inspired by our own everyday needs. At the heart of our business is a steadfast commitment to <span className="font-bold">protecting your privacy</span>.</p>
                    <p className="text-sm md:text-base text-accent-dark">Retailers frequently run sales and you are likely already receiving marketing emails to alert you of these opportunities.</p>
                    <p className="text-sm md:text-base text-accent-dark">Yet, it's the <span className="italic font-bold">quiet</span> deals that really draw a crowd; those are the ones not to miss. Vendors also need to clear out existing inventory quickly, which means steep discounts that often come without any notice. Just like you, we love scoring a fantastic deal, so happy shopping!</p>
                </div>
            </div>
        </motion.div>
    );
}

export default CTASection;