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
import usePhoneNumberValidation from "./hooks/usePhoneNumberValidation.js";

const initialFormData = {
    email: '',
    password: '',
};

function Authentication({ className }) {
    // ================================================
    // ** States and Hooks **
    // ================================================
    const login_selected = useSelector(state => state.auth_selection.login_selected);
    const register_selected = useSelector(state => state.auth_selection.register_selected);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const [authError, setAuthError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const { validate, errors, resetErrors } = useFormValidation(() => login_selected ? loginValidationRules : registerValidationRules);
    const { isValidPhoneNumber, sanitizedPhoneNumber } = usePhoneNumberValidation(phoneNumber);

    // ================================================
    // ** Handlers **
    // ================================================
    const handleSubmit = async (e) => {
        e.preventDefault();
        resetPhoneNumberError();

        // validate the form to ensure all fields are correctly entered
        if (!validate(formData)) {
            return; // stop the function if validation fails
        }

        // Prepare the body for the API call
        let requestBody = {
            email: formData.email,
            password: formData.password,
        };

        // Check phone number validity only if registering
        if (register_selected) {
            if (isValidPhoneNumber) {
                requestBody.phoneNumber = sanitizedPhoneNumber;
            } else {
                setPhoneNumberError("Invalid phone number.");
                return; // Exit early only if registration and phone number is invalid
            }
        }

        try {
            let response = await callLambda({
                method: METHODS.POST,
                url: login_selected ? LOGIN_API_URL : REGISTER_API_URL,
                body: requestBody,
            });
            // Store the token in localStorage
            localStorage.setItem('userToken', response.data.token);

            navigate('/dashboard');
        } catch (error) {
            setAuthError(error.response.data.message);
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

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    // ================================================
    // ** Helpers **
    // ================================================
    const resetFormAndErrors = () => {
        setFormData(initialFormData);
        resetPhoneNumberError();
        resetErrors();
        resetAuthErrors();
    };

    const resetAuthErrors = () => {
        setAuthError('');
    }

    const resetPhoneNumberError = () => {
        setPhoneNumberError('')
    }

    return (
        <div className={className}>
            <div className="flex">
                <div className={`text-md py-2 cursor-pointer ${login_selected ? 'text-accent-dark' : 'text-accent-gray'}`} onClick={() => handleAuthClick('login')}>login</div>
                <div className="text-md py-2 px-1 text-accent-dark">/</div>
                <div className={`text-md py-2 cursor-pointer ${register_selected ? 'text-accent-dark' : 'text-accent-gray'}`} onClick={() => handleAuthClick('register')}>register</div>
            </div>
            <div className='border-2 px-2 py-6 border-accent-gray sm:px-10 sm:py-10'>
                <AuthForm
                    onSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    login_selected={login_selected}
                    authError={authError}
                    resetAuthErrors={resetAuthErrors}
                    phoneNumber={phoneNumber}
                    handlePhoneNumberChange={handlePhoneNumberChange}
                    phoneNumberError={phoneNumberError}
                />
            </div>
        </div>
    );
}

export default Authentication;