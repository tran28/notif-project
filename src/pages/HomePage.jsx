import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const handleClick = (to) => () => { // Return a function from handleClick
        switch (to) {
            case 'auth':
                navigate('/auth');
                break;
            case 'dynamo':
                navigate('/dynamo');
                break;
            default:
                navigate('/notfound'); // Added leading slash for consistency
        }
    };

    return (
        <div className="flex flex-col gap-5">
            <h1>Home Page</h1>
            {/* Update onClick to pass a function that will be called on click */}
            <button onClick={handleClick('auth')} className="p-3 bg-accent-gray hover:bg-accent-dark hover:text-accent-aman">Go to Login/Register</button>
            <button onClick={handleClick('dynamo')} className="p-3 bg-accent-gray hover:bg-accent-dark hover:text-accent-aman">Go to Dynamo Visual</button>
        </div>
    );
}

export default HomePage;
