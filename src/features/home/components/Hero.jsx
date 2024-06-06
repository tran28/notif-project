import VideoPlayer from "./VideoPlayer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

function Hero({ className }) {
    const navigate = useNavigate();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // when the value of scrollYProgress is 0, border radius is 16px, when it is 1, border radius is 0px
    const borderRadius = useTransform(scrollYProgress, [0, 1], [16, 0]);

    // matrix transform from (0.95, 0, 0, 0.95, 0, 0) to (1, 0, 0, 1, 0, 0)
    const matrixTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [
            "matrix(0.9, 0, 0, 0.9, 0, 0)",
            "matrix(1, 0, 0, 1, 0, 0)"
        ]
    );

    return (
        <div ref={ref} className={`relative w-full flex justify-center ${className}`}>
            <div className="flex flex-col pt-8 gap-10 max-w-7xl lg:flex-row lg:gap-0 lg:pt-0">
                {/* Hero Tagline and Description */}
                <div className="flex flex-1 flex-col relative justify-center z-10 gap-4 items-center text-center px-10 lg:items-start lg:text-start">
                    <h1 className="text-5xl font-semibold tracking-tight lg:text-6xl">
                        <span className="text-accent-dark">Automated </span>
                        price tracker
                    </h1>
                    <p className="text-base lg:text-lg">Receive a text message whenever one of your products goes on sale!</p>
                    <div className="pt-4">
                        <Button className="bg-accent-dark/20 text-black" onClick={() => navigate('/auth')}>Get Started</Button>
                    </div>
                </div>

                {/* Hero Video */}
                <motion.div
                    style={{
                        borderRadius: borderRadius,
                        transform: matrixTransform
                    }}
                    className="flex flex-1 min-h-[80vh] max-h-[80vh] h-full overflow-hidden relative 2xl:-mr-[100px]"
                >
                    <VideoPlayer src="https://notif-assets.s3.amazonaws.com/video.mp4" />
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;