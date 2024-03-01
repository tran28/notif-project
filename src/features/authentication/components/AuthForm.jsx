import Button from "../../../components/Button";
import { updateFormData } from "../../../utils/updateFormData";
import FormInput from "./FormInput";
import PhoneInput from "./PhoneInput";

// Configuration for form fields
const formFields = [
    { label: "Email", type: "email", name: "email", placeholder: "name@example.com" },
    { label: "Password", type: "password", name: "password", placeholder: "••••••••" },
];

function AuthForm({ onSubmit, formProps, loginSelected, authErrorProps, phoneProps }) {
    const handleChange = (event) => {
        const { name } = event.target;
        formProps.resetFieldError(name);
        authErrorProps.resetAuthErrors();
        formProps.setFormData(currentFormData => updateFormData(currentFormData, event));
    };

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
            {!loginSelected && <PhoneInput {...phoneProps} />}
            <Button type="submit" className="">
                {loginSelected ? 'Login' : 'Register'}
            </Button>
        </form>
    );
}

export default AuthForm;