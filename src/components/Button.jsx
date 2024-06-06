// Button.js or Button.jsx
import { motion } from "framer-motion";
import { colors } from "../styles/colors";

function Button({ onClick, children, className, bgHover, textHover, ...restProps }) {
    return (
        <motion.button
            whileHover={{
                backgroundColor: bgHover,
                color: textHover,
                transition: { duration: 0.1 },
            }}
            whileTap={{
                backgroundColor: bgHover,
                color: textHover,
                scale: 1.1,
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
    bgHover: colors.black,
    textHover: colors.white,
};

export default Button;
