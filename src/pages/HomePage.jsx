import { useNavigate } from "react-router-dom";
import { createClickHandler } from "../utils/createClickHandler";
import Button from "../components/Button";

function HomePage() {
    const navigate = useNavigate();

    const actionMap = {
        'auth': () => {
            navigate('/auth');
        },
        'dynamo': () => {
            navigate('/dynamo');
        },
        'dashboard': () => {
            navigate('/dashboard');
        },
    };

    const handleClick = createClickHandler(actionMap);

    return (
        <div className="flex flex-col gap-5">
            <h1>Home Page/Currently Links to Routes</h1>
            {/* Update onClick to pass a function that will be called on click */}
            <Button onClick={() => handleClick('auth')}>Go to Login/Register</Button>
            <Button onClick={() => handleClick('dynamo')} >Go to Dynamo Visual</Button>
            <Button onClick={() => handleClick('dashboard')} >Go to Dashboard</Button>
        </div>
    );
}

export default HomePage;
