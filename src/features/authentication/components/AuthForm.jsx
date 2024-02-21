import Button from "../../../components/Button";
import { updateFormData } from "../../../utils/updateFormData";
import FormInput from "./FormInput";

// Configuration for form fields
const formFields = [
    { label: "Email", type: "email", name: "email", placeholder: "name@example.com" },
    { label: "Password", type: "password", name: "password", placeholder: "••••••••" },
];

function AuthForm({ onSubmit, formData, setFormData, errors, login_selected }) {
    const handleChange = (event) => {
        setFormData(currentFormData => updateFormData(currentFormData, event));
    };

    return (
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
            {formFields.map(field => (
                <FormInput
                    key={field.name}
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    error={errors[field.name]}
                />
            ))}
            <Button type="submit" className="">
                {login_selected ? 'Login' : 'Register'}
            </Button>
        </form>
    );
}

export default AuthForm;

