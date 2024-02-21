import { useDispatch, useSelector } from "react-redux";
import { selectLogin, selectRegister } from "../../../redux/authSlice";
import { useState } from "react";
import useValidateRegisterForm from "../hooks/useValidateRegisterForm";
import { useNavigate } from 'react-router-dom';


function Login({ className }) {
    // Redux states
    const login_selected = useSelector(state => state.auth_selection.login_selected);
    const register_selected = useSelector(state => state.auth_selection.register_selected);
    const dispatch = useDispatch();

    // UseNavigate for navigating between routes
    const navigate = useNavigate();

    // UseState for email, password
    const [password, setPassword] = useState('');

    // Custom hook to validate password submission using register form
    const { validatePassword, errorMessage } = useValidateRegisterForm();

    // Handle submit function for both login and register form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (register_selected) {
            if (validatePassword(password)) {
                navigate('/dashboard');
            }
        }
    }

    return (
        <div className={className}>
            <div className="flex">
                <div className={`text-md py-2 cursor-pointer ${login_selected ? 'text-accent-dark' : 'text-accent-gray'}`} onClick={() => dispatch(selectLogin())}>login</div>
                <div className="text-md py-2 px-1 text-accent-dark">/</div>
                <div className={`text-md py-2 cursor-pointer ${register_selected ? 'text-accent-dark' : 'text-accent-gray'}`} onClick={() => dispatch(selectRegister())}>register</div>
            </div>
            <div className='border-2 p-10 border-accent-gray'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="email" className="text-sm font-light">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="text-sm w-full p-3 bg-accent-aman border-2 border-accent-gray mt-2 focus:border-accent-dark focus:outline-none"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="text-sm font-light">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="text-sm w-full p-3 bg-accent-aman border-2 border-accent-gray mt-2 focus:border-accent-dark focus:outline-none"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errorMessage && <div className="text-sm font-light text-error py-1">{errorMessage}</div>}
                    </div>
                    <button type="submit" className="w-full bg-accent-gray p-3 hover:bg-accent-dark hover:text-accent-gray">{login_selected ? 'Login' : 'Register'}</button>
                </form>
            </div>
        </div>
    );
}

export default Login;