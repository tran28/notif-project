import { colors } from "../../../styles/colors";
import { getIcon } from "../../../utils/getIcon";
import { motion } from "framer-motion";

function ScrollAlert({ message }) {
    return (
        <div className="flex flex-row gap-1 items-center">
            <motion.div
                animate={{
                    y: ["0", "-10%", "0"]
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,  // Repeat the animation indefinitely
                    repeatType: "loop"
                }}
            >
                {getIcon('mouse', { color: colors.black, size: 24, stroke: 1.2 })}
            </motion.div>
            <p className="text-xs text-black tracking-tight italic">{message}</p>
        </div>
    );
}

export default ScrollAlert;