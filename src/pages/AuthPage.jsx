import Authentication from "../features/authentication";
import PageContainer from "../layouts/PageContainer";

function AuthPage() {
    return (
        <PageContainer>
            <div className="flex w-full justify-center ">
                <Authentication className="w-full max-w-xl" />
            </div>
        </PageContainer>
    );
}

export default AuthPage;