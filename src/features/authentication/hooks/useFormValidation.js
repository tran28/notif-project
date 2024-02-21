import { useState, useCallback } from 'react';

const useFormValidation = (getValidationRules) => {
    const [errors, setErrors] = useState({});
    const resetErrors = () => setErrors({});

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
    }, [getValidationRules]); // Recreate the validate function only if getValidationRules changes

    return { validate, errors, resetErrors };
}

export default useFormValidation;
