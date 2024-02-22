import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import PageNotFound from "../pages/PageNotFound";
import DashboardPage from "../pages/DashboardPage";
import DynamoPage from "../pages/DynamoPage";
import PrivateRoute from "./PrivateRoute";

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
            <Route path="/dynamo" element={<DynamoPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}
