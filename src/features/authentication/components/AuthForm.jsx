import { useState } from "react";
import Button from "../../../components/Button";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";
import FormInput from "./FormInput";
import FriendlyCaptcha from "./FriendlyCaptcha";

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
            setTimeout(() => setCaptchaError(false), 3000);
            return;
        }

        onSubmit(event);
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

                    <div className={`relative rounded-md ${captchaError ? "p-1 border-2 border-accent-dark/50" : ""}`}>
                        <FriendlyCaptcha sitekey={sitekey} setIsCaptchaSolved={setIsCaptchaSolved} />

                        {captchaError && (
                            <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2"> {/* Dot positioned relative to CAPTCHA */}
                                <span className="flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-dark opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-dark"></span>
                                </span>
                            </div>
                        )}
                    </div>
                </>
            )}

            <Button type="submit" className="">
                {loginSelected ? 'Login' : 'Register'}
            </Button>
        </form>
    );
}

export default AuthForm;