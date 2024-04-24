// Button.js or Button.jsx
import { colors } from "../styles/colors";
import { hexToRGB } from "../styles/hexToRGB";
import { motion } from "framer-motion";

function Button({ onClick, children, className, ...restProps }) {
    return (
        <motion.button
            whileHover={{
                backgroundColor: `rgba(${hexToRGB(colors.accent.dark)}, 0.2)`,
                color: colors.accent.dark,
                transition: { duration: 0.2 },
            }}
            onClick={onClick}
            className={`p-3 bg-accent-dark text-accent-light ${className}`}
            {...restProps}
        >
            {children}
        </motion.button>
    );
}

export default Button;
