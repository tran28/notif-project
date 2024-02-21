import { useState } from 'react';

function useValidateLoginForm() {
    const [errorMessage, setErrorMessage] = useState('');

    const validatePassword = (password) => {
        // Reset error message at the beginning of validation
        setErrorMessage('');

        // Check if the password length is greater than 8 characters
        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters.');
            return false;
        }

        // Check if the password contains at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            setErrorMessage('Password must contain at least one uppercase letter.');
            return false;
        }

        // Check if the password contains at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            setErrorMessage('Password must contain at least one lowercase letter.');
            return false;
        }

        // Check if the password contains at least one number
        if (!/[0-9]/.test(password)) {
            setErrorMessage('Password must contain at least one number.');
            return false;
        }

        // If all conditions are met, the password is valid
        return true;
    };

    // The hook returns both the validation function and the current error message
    return { validatePassword, errorMessage };
}

export default useValidateLoginForm;
