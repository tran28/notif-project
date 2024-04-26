import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function PageContainer({ children }) {
    const location = useLocation();
    const onHomePage = location.pathname === '/';
    return (
        <>
            {!onHomePage && <Navbar />}
            <div className={`mx-auto min-h-screen max-w-screen-2xl px-6 py-6`}>
                {children}
            </div>
        </>

    );
}

export default PageContainer;