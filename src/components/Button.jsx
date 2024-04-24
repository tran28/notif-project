// Button.js or Button.jsx
import { colors } from "../styles/colors";
import { hexToRGB } from "../styles/hexToRGB";
import { motion } from "framer-motion";

function Button({ onClick, children, className, bgHover, textHover, ...restProps }) {
    return (
        <motion.button
            whileHover={{
                backgroundColor: bgHover,
                color: textHover,
                transition: { duration: 0.1 },
            }}
            onClick={onClick}
            className={`p-3 ${className}`}
            {...restProps}
        >
            {children}
        </motion.button>
    );
}

Button.defaultProps = {
    bgHover: `rgba(${hexToRGB(colors.accent.dark)}, 0.2)`,
    textHover: colors.accent.dark,
  };

export default Button;
