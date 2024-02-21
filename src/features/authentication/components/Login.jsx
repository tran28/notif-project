import { useDispatch, useSelector } from "react-redux";
import { selectLogin, selectRegister } from "../../../redux/authSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginValidationRules, registerValidationRules } from "../utils/validationRules";
import useFormValidation from "../hooks/useFormValidation";
import FormInput from "./FormInput";

function Login({ className }) {
    // Redux states
    const login_selected = useSelector(state => state.auth_selection.login_selected);
    const register_selected = useSelector(state => state.auth_selection.register_selected);
    const dispatch = useDispatch();

    // useNavigate for navigating between routes
    const navigate = useNavigate();

    // useState for form fields
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Custom hook to validate form submission
    const { validate, errors, resetErrors } = useFormValidation(() => login_selected ? loginValidationRules : registerValidationRules);

    // Handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate(formData)) {
            if(login_selected) {

            }
            else {
                navigate("/dashboard");
            }
        } else {
            console.log("Error with register or no login found.");
        }
    };

    // Reset form state and errors
    const resetFormAndErrors = () => {
        setFormData({
            email: '',
            password: '',
        });
        resetErrors(); // Reset errors function from useFormValidation hook
    };

    // Handle login or register click
    const handleAuthClick = (actionType) => {
        if (actionType === 'login') {
            dispatch(selectLogin());
        } else if (actionType === 'register') {
            dispatch(selectRegister());
        }
        resetFormAndErrors();
    };

    return (
        <div className={className}>
            <div className="flex">
                <div className={`text-md py-2 cursor-pointer ${login_selected ? 'text-accent-dark' : 'text-accent-gray'}`} onClick={() => handleAuthClick('login')}>login</div>
                <div className="text-md py-2 px-1 text-accent-dark">/</div>
                <div className={`text-md py-2 cursor-pointer ${register_selected ? 'text-accent-dark' : 'text-accent-gray'}`} onClick={() => handleAuthClick('register')}>register</div>
            </div>
            <div className='border-2 p-10 border-accent-gray'>
                <form onSubmit={handleSubmit} noValidate>
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                    <button type="submit" className="w-full bg-accent-gray p-3 hover:bg-accent-dark hover:text-accent-gray">{login_selected ? 'Login' : 'Register'}</button>
                </form>
            </div>
        </div>
    );
}

export default Login;