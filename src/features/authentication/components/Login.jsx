import { useDispatch, useSelector } from "react-redux";
import { selectLogin, selectRegister } from "../../../redux/authSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginValidationRules, registerValidationRules } from "../utils/validationRules";
import useFormValidation from "../hooks/useFormValidation";
import { createClickHandler } from "../../../utils/createClickHandler";
import AuthForm from "./AuthForm";

const initialFormData = {
    email: '',
    password: '',
};

function Login({ className }) {
    // ================================================
    // ** States and Hooks **
    // ================================================
    const login_selected = useSelector(state => state.auth_selection.login_selected);
    const register_selected = useSelector(state => state.auth_selection.register_selected);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const { validate, errors, resetErrors } = useFormValidation(() => login_selected ? loginValidationRules : registerValidationRules);

    // ================================================
    // ** Handlers **
    // ================================================
    const handleSubmit = (e) => {
        e.preventDefault();

        // validate the form to ensure all fields are correctly entered
        if (validate(formData)) {
            if (login_selected) {

            }
            else {
                // successful registration
                navigate("/dashboard");
            }
        }
    };

    const actionMap = {
        'login': () => {
            dispatch(selectLogin());
            resetFormAndErrors();
        },
        'register': () => {
            dispatch(selectRegister());
            resetFormAndErrors();
        },
    };
    const handleAuthClick = createClickHandler(actionMap);

    // ================================================
    // ** Helpers **
    // ================================================
    const resetFormAndErrors = () => {
        setFormData(initialFormData);
        resetErrors();
    };

    return (
        <div className={className}>
            <div className="flex">
                <div className={`text-md py-2 cursor-pointer ${login_selected ? 'text-accent-dark' : 'text-accent-gray'}`} onClick={() => handleAuthClick('login')}>login</div>
                <div className="text-md py-2 px-1 text-accent-dark">/</div>
                <div className={`text-md py-2 cursor-pointer ${register_selected ? 'text-accent-dark' : 'text-accent-gray'}`} onClick={() => handleAuthClick('register')}>register</div>
            </div>
            <div className='border-2 px-4 py-10 border-accent-gray sm:px-8 md:px-10'>
                <AuthForm
                    onSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    login_selected={login_selected}
                />
            </div>
        </div>
    );
}

export default Login;