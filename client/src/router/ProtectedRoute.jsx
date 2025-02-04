import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoute = () => {
    const navigate = useNavigate();

    if (!isUserAuth) {
        navigate("/login");
        return
    }

    return <Outlet />;
};
