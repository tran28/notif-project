import { createClickHandler } from "../utils/createClickHandler";
import Button from "../components/Button";
import Home from "../features/home";

function HomePage() {
    // const navigate = useNavigate();

    // const actionMap = {
    //     'auth': () => {
    //         navigate('/auth');
    //     },
    //     'dashboard': () => {
    //         navigate('/dashboard');
    //     },
    // };

    // const handleClick = createClickHandler(actionMap);

    // return (
    //     <div className="flex flex-col gap-5">
    //         <h1>Home Page → Currently Links to Routes</h1>
    //         {/* Update onClick to pass a function that will be called on click */}
    //         <Button onClick={() => handleClick('auth')} className="bg-accent-mid text-accent-dark" bgHover={colors.accent.dark} textHover={colors.accent.light}>Go to Login/Register</Button>
    //         <Button onClick={() => handleClick('dashboard')} className="bg-accent-mid text-accent-dark" bgHover={colors.accent.dark} textHover={colors.accent.light}>Go to Dashboard</Button>
    //     </div>
    // );


    return (
        <div>
            <Home />
        </div>
    );
}

export default HomePage;
