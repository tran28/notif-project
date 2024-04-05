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


    return (
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
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
                <FormInput
                    label="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    value={formProps.formData.phoneNumber}
                    onChange={handleChange}
                    error={formProps.errors.phoneNumber}
                />
            )}
            {!loginSelected && (
                <FriendlyCaptcha sitekey={sitekey} />
            )}
            <Button type="submit" className="">
                {loginSelected ? 'Login' : 'Register'}
            </Button>
        </form>
    );
}

export default AuthForm;