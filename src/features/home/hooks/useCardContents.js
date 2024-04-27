import { siteInfo } from "../../../data/siteInfo";
import useMobileView from "../../../hooks/useMobileView";
import { colors } from "../../../styles/colors";
import { getIcon } from "../../../utils/getIcon";
import { motion } from "framer-motion";

function useCardContents() {
    const isMobileView = useMobileView();

    const createFirstCardContent = () => (
        <div className="grid grid-cols-10 grid-rows-10 h-full">
            <div className="col-start-1 col-span-10 row-start-1 row-span-10 md:col-start-2 md:col-span-9 md:row-start-2 md:row-span-9">
                <div className="flex flex-col justify-between h-full md:justify-around">
                    {/* What is */}
                    <div className="flex flex-col gap-10 p-6 md:py-0 md:px-0">
                        <h1 className="text-2xl md:text-3xl text-black">What is <span className="text-accent-dark">{siteInfo.name}</span>?</h1>

                        {/* Scenario */}
                        <div className="flex flex-col gap-4">
                            <p className="text-sm md:text-base text-accent-dark bg-accent-dark/20 p-2 font-semibold self-start">The scenario</p>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm md:text-base text-black">Your favorite product went on <span className="text-accent-dark font-semibold">sale</span>, but by the time you found out, it already sold out.</p>
                                <p className="text-sm md:text-base text-black font-semibold">"And on clearance too?!"</p>
                                <p className="text-sm md:text-base text-black">Set up <span className="text-accent-dark font-semibold">price alerts</span> today!</p>
                            </div>
                        </div>

                    </div>

                    {/* How it works */}
                    <div className="flex flex-row items-center self-center gap-1 md:text-lg md:self-end">
                        <p className="text-lg text-accent-dark p-2 font-semibold">How it works</p>
                        {!isMobileView &&
                            <motion.div
                                animate={{
                                    x: ["0", "10%", "0"]
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                    repeat: Infinity,  // Repeat the animation indefinitely
                                    repeatType: "loop"
                                }}
                            >
                                {getIcon('arrow-right', { color: colors.accent.dark, size: 24, stroke: 2 })}
                            </motion.div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );

    const createCardContent = () => (
        <div className="grid grid-cols-10 grid-rows-10 h-full">
            <div className="col-start-1 col-span-10 row-start-1 row-span-10 md:col-start-2 md:col-span-9 md:row-start-2 md:row-span-9 bg-accent-mid rounded-md">

            </div>
        </div>
    );

    const cards = [
        { content: createFirstCardContent() },
        { number: 1, content: createCardContent() },
        { number: 2, content: createCardContent() },
        { number: 3, content: createCardContent() },
        { number: 4, content: createCardContent() }
    ];
    return cards;
}

export default useCardContents;