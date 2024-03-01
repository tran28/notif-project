import { useState, useCallback } from 'react';

const useFormValidation = (getValidationRules) => {
    const [errors, setErrors] = useState({});

    // Function to reset all errors
    const resetErrors = () => setErrors({});

    // Function to reset the error for a specific field
    const resetFieldError = useCallback((fieldname) => {
        setErrors((currentErrors) => {
            const newErrors = { ...currentErrors };
            delete newErrors[fieldname]; // Remove the error for the specified field
            return newErrors;
        });
    }, []);

    const validate = useCallback((fields) => {
        const rules = getValidationRules();
        const validationErrors = {};

        Object.keys(fields).forEach((field) => {
            const rule = rules[field]; // Retrieve the specific validation rule for the field
            if (rule) {
                const message = rule(fields[field]); // Execute the validation rule
                if (message) {
                    validationErrors[field] = message; // If there's an error message, add it to the errors object
                }
            }
        });

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0; // Return true if no errors were found, indicating valid input
    }, [getValidationRules]);

    return { validate, errors, resetErrors, resetFieldError };
}

export default useFormValidation;
