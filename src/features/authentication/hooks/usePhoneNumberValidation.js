import { sanitizePhoneNumber } from "../utils/sanitizePhoneNumber";

const usePhoneNumberValidation = (phoneNumber) => {
    const isValid = (phone) => {
        const digits = sanitizePhoneNumber(phone);
        // Check if there are exactly 11 digits (including the '1' following the '+')
        return digits.length === 12 && digits.startsWith('+1');
    };

    // Check if the phone number is valid
    const isValidPhoneNumber = isValid(phoneNumber);
    const sanitizedPhoneNumber = sanitizePhoneNumber(phoneNumber);

    return { isValidPhoneNumber, sanitizedPhoneNumber };
};

export default usePhoneNumberValidation;
