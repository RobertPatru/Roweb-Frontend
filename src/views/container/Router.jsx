import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";
import VerifyEmail from "../pages/verifyEmail/VerifyEmail";
import Home from "../pages/home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
