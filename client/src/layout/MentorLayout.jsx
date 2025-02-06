import React from "react";
import { Footer } from "../components/user/Footer";
import { Outlet } from "react-router-dom";
import { MentroHeader } from "../components/mentor/MentroHeader";
import { Header } from "../components/mentor/Header";

export const MentorLayout = () => {
    const isUserAuth = true;

    return (
        <div>
            {isUserAuth ? <MentroHeader/> : <Header />}

            <div className="min-h-96">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};
