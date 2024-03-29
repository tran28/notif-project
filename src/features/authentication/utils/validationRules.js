import { sanitizePhoneNumber } from "./sanitizePhoneNumber";

export const loginValidationRules = {
    email: (value) => {
        if (value.length === 0) return 'Email is required.';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Email is not valid.';
        return '';
    },
    password: (value) => {
        if (value.length === 0) return 'Password is required.';
        return '';
    },
    // Add more rules as necessary
};

export const registerValidationRules = {
    email: (value) => {
        if (value.length === 0) return 'Email is required.';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Email is not valid.';
        return '';
    },
    password: (value) => {
        if (value.length < 8) return 'Password must be at least 8 characters.';
        if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter.';
        if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter.';
        if (!/[0-9]/.test(value)) return 'Password must contain at least one number.';
        return '';
    },
    phoneNumber: (value) => {
        const sanitizedValue = sanitizePhoneNumber(value);
        if (sanitizedValue.length === 0) return 'Phone number is required.';
        if (sanitizedValue.length !== 12 || !sanitizedValue.startsWith('+1')) return 'Phone number is not valid.';
        return '';
    },
};
