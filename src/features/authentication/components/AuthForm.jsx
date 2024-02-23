import Button from "../../../components/Button";
import { updateFormData } from "../../../utils/updateFormData";
import FormInput from "./FormInput";
import PhoneInput from "./PhoneInput";

// Configuration for form fields
const formFields = [
    { label: "Email", type: "email", name: "email", placeholder: "name@example.com" },
    { label: "Password", type: "password", name: "password", placeholder: "••••••••" },
];

function AuthForm({ onSubmit, formData, setFormData, errors, login_selected, authError, resetAuthErrors, phoneNumber, handlePhoneNumberChange, phoneNumberError }) {
    const handleChange = (event) => {
        resetAuthErrors();
        setFormData(currentFormData => updateFormData(currentFormData, event));
    };

    return (
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
            {authError && <div className="text-xs font-light text-error">{authError}</div>}
            {formFields.map(field => (
                <FormInput
                    key={field.name}
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    error={errors[field.name]}
                />
            ))}
            {!login_selected && <PhoneInput phoneNumber={phoneNumber} handlePhoneNumberChange={handlePhoneNumberChange} phoneNumberError={phoneNumberError} />}
            <Button type="submit" className="">
                {login_selected ? 'Login' : 'Register'}
            </Button>
        </form>
    );
}

export default AuthForm;

