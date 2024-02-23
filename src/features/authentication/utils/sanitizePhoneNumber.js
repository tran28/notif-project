export const sanitizePhoneNumber = (phoneNumber) => {
    // Remove all characters except digits and leading +
    const sanitized = phoneNumber.replace(/(?!^\+)\D/g, '');
    return sanitized;
};
