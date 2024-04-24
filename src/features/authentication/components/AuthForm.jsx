import { useState } from "react";
import Button from "../../../components/Button";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";
import FormInput from "./FormInput";
import FriendlyCaptcha from "./FriendlyCaptcha";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../../../styles/colors";

// Configuration for form fields
const formFields = [
    { label: "Email", type: "email", name: "email", placeholder: "name@example.com" },
    { label: "Password", type: "password", name: "password", placeholder: "••••••••" },
];

function AuthForm({ onSubmit, formProps, loginSelected, authErrorProps }) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        formProps.resetFieldError(name);
        authErrorProps.resetAuthErrors();

        const formattedValue = name === 'phoneNumber' ? formatPhoneNumber(value) : value;
        formProps.resetFieldError(name);
        authErrorProps.resetAuthErrors();
        formProps.setFormData(currentFormData => ({
            ...currentFormData,
            [name]: formattedValue
        }));
    };

    const sitekey = 'FCMQGA04UM0JI03B';
    const [isCaptchaSolved, setIsCaptchaSolved] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!loginSelected && !isCaptchaSolved) {
            setCaptchaError(true);
            setTimeout(() => setCaptchaError(false), 1000);
            return;
        }

        onSubmit(event);
    };

    const captchaVariants = {
        initial: {
            x: 0, // Start at the initial horizontal position
        },
        animate: {
            x: [0, -4, 4, -4, 0], // Move left and right along the x-axis
            transition: {
                x: {
                    repeat: Infinity, // Repeat the wiggle indefinitely
                    repeatType: "reverse", // Reverse the animation on each iteration
                    duration: 0.5 // Duration of one complete wiggle cycle
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {authErrorProps.authError && <div className="text-xs font-light text-error">{authErrorProps.authError}</div>}
            {formFields.map(field => (
                <FormInput
                    key={field.name}
                    {...field}
                    value={formProps.formData[field.name]}
                    onChange={handleChange}
                    error={formProps.errors[field.name]}
                />
            ))}
            {!loginSelected && (
                <>
                    <FormInput
                        label="Phone Number"
                        type="tel"
                        name="phoneNumber"
                        value={formProps.formData.phoneNumber}
                        onChange={handleChange}
                        error={formProps.errors.phoneNumber}
                    />

                    <AnimatePresence>
                        <motion.div
                            className={`relative rounded-md px-2 ${captchaError ? "bg-accent-dark/20" : ""}`}
                            variants={captchaVariants}
                            initial="initial"
                            animate={captchaError ? "animate" : "initial"}
                        >
                            <FriendlyCaptcha sitekey={sitekey} setIsCaptchaSolved={setIsCaptchaSolved} />
                        </motion.div>
                    </AnimatePresence>
                </>
            )}

            <Button type="submit" className="bg-accent-dark text-accent-light" bgHover={colors.accent.light} textHover={colors.accent.dark}>
                {loginSelected ? 'Login' : 'Register'}
            </Button>
        </form>
    );
}

export default AuthForm;