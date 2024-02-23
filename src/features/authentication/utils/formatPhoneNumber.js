/**
 * Formats a US/Canada phone number with a +1 country code, ensuring +1 is always included.
 * @param {string} input The raw phone number input, excluding the +1 prefix.
 * @returns {string} The formatted phone number with the +1 prefix.
 */
export const formatPhoneNumber = (input) => {
    // Ensure input starts without +1 to avoid duplicating the prefix in formatting
    const sanitizedInput = input.startsWith('+1') ? input.slice(2).trim() : input;
    const digits = sanitizedInput.replace(/\D/g, '');

    let formatted = '+1 ';
    if (digits.length === 0) {
        return formatted.trim();
    } else if (digits.length <= 3) {
        formatted += `(${digits}`;
    } else if (digits.length <= 6) {
        formatted += `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length <= 10) {
        formatted += `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else {
        formatted += `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
    return formatted;
};