import { useDispatch, useSelector } from "react-redux";
import { selectLogin, selectRegister } from "../../redux/authSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginValidationRules, registerValidationRules } from "./utils/validationRules";
import useFormValidation from "./hooks/useFormValidation";
import { createClickHandler } from "../../utils/createClickHandler";
import AuthForm from "../authentication/components/AuthForm";
import { METHODS } from "../../api/methods.js";
import { LOGIN_API_URL, REGISTER_API_URL } from "../../api/urls.js";
import callLambda from '../../services/callLambda.js'
import useLoading from "../../hooks/useLoading.js";
import { sanitizePhoneNumber } from "./utils/sanitizePhoneNumber.js";

const initialFormData = {
    email: '',
    password: '',
    phoneNumber: '+1 ',
};

function Authentication({ className }) {
    // ================================================
    // ** States and Hooks **
    // ================================================
    const login_selected = useSelector(state => state.auth_selection.login_selected);
    const register_selected = useSelector(state => state.auth_selection.register_selected);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [authError, setAuthError] = useState('');
    const [formData, setFormData] = useState(initialFormData);
    const { validate, errors, resetErrors, resetFieldError } = useFormValidation(() => login_selected ? loginValidationRules : registerValidationRules);
    const { isLoading, startLoading, stopLoading } = useLoading();

    // ================================================
    // ** Handlers **
    // ================================================
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form to ensure all fields are correctly entered
        if (!validate(formData)) {
            return;
        }

        let requestBody = {
            email: formData.email,
            password: formData.password,
        };

        // Add phoneNumber to the request body only if registering
        if (register_selected) {
            requestBody.phoneNumber = sanitizePhoneNumber(formData.phoneNumber); // sanitize phone number to AWS requirements
        }

        try {
            startLoading();
            let response = await callLambda({
                method: METHODS.POST,
                url: login_selected ? LOGIN_API_URL : REGISTER_API_URL,
                body: requestBody,
            });
            stopLoading();

            // Store the token in localStorage
            localStorage.setItem('userToken', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            stopLoading();
            setAuthError(error.response.data.message);
        }
    };

    const actionMap = {
        'login': () => {
            dispatch(selectLogin());
            resetForm();
        },
        'register': () => {
            dispatch(selectRegister());
            resetForm();
        },
    };
    const handleAuthClick = createClickHandler(actionMap);

    // ================================================
    // ** Helpers **
    // ================================================
    const resetForm = () => {
        // reset input fields
        setFormData(initialFormData);

        // reset errors
        resetErrors();
        resetAuthErrors();
    };

    const resetAuthErrors = () => {
        setAuthError('');
    }

    return (
        <div className={className}>
            <div className="flex">
                <div className={`text-md py-2 cursor-pointer ${login_selected ? 'text-accent-dark' : 'text-accent-dark/50'}`} onClick={() => handleAuthClick('login')}>login</div>
                <div className="text-md py-2 px-1 text-accent-dark">/</div>
                <div className={`text-md py-2 cursor-pointer ${register_selected ? 'text-accent-dark' : 'text-accent-dark/50'}`} onClick={() => handleAuthClick('register')}>register</div>
            </div>
            <div className='px-4 py-6 bg-accent-mid sm:px-10 sm:py-10'>
                {isLoading ? 'Submitting...' :
                    <AuthForm
                        onSubmit={handleSubmit}
                        formProps={{
                            formData: formData,
                            setFormData: setFormData,
                            errors: errors,
                            resetFieldError: resetFieldError
                        }}
                        loginSelected={login_selected}
                        authErrorProps={{
                            authError: authError,
                            resetAuthErrors: resetAuthErrors
                        }}
                    />
                }
            </div>
        </div>
    );
}

export default Authentication;