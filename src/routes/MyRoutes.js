import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import PageNotFound from "../pages/PageNotFound";
import DashboardPage from "../pages/DashboardPage";
import PrivateRoute from "./PrivateRoute";
import FAQPage from "../pages/FAQ";
import DevPage from "../pages/DevCorner";

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/dev" element={<DevPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}
