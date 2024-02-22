import Authentication from "../features/authentication";

function AuthPage() {
    return (
        <div className="flex justify-center">
            <Authentication className="w-full max-w-[600px]" />
        </div>
    );
}

export default AuthPage;