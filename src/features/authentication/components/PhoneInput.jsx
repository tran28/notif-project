import { formatPhoneNumber } from "../utils/formatPhoneNumber";

function PhoneInput({ phoneNumber, handlePhoneNumberChange, phoneNumberError }) {
    // Handle change event to format the phone number
    const handleChange = (event) => {
        // Directly pass the input value without '+1' since the function will append it.
        const formattedValue = formatPhoneNumber(event.target.value);
        handlePhoneNumberChange({ target: { name: event.target.name, value: formattedValue } });
    };

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber" className="text-sm font-light">Phone Number</label>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="text-sm p-3 bg-accent-aman border-2 border-accent-gray focus:border-accent-dark focus:outline-none w-full"
                placeholder="(+1) 123-456-7890"
                value={formatPhoneNumber(phoneNumber)} // Ensure the displayed value is always formatted
                onChange={handleChange}
                maxLength="20" // Adjust maxLength to account for the formatting characters
            />
            {phoneNumberError && <div className="text-xs font-light text-error">{phoneNumberError}</div>}
        </div>
    );
}

export default PhoneInput;
