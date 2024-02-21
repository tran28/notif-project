import { Login } from "../features/authentication";

function AuthPage() {
    return (
        <div className="flex justify-center">
            <Login className="w-full max-w-[600px]" />
        </div>
    );
}

export default AuthPage;