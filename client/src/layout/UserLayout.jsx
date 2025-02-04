import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";
import { axiosInstance } from "../config/axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../redux/features/userSlice";

export const UserLayout = () => {
    const { isUserAuth,userData } = useSelector((state) => state.user);
    const dispatch = useDispatch()

    console.log("isUserAuth====", isUserAuth);

    const checkUser = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/user/check-user",
            });
            dispatch(saveUser(response?.data?.data))
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        checkUser();
    }, []);

    return (
        <div>
            {isUserAuth ? <UserHeader /> : <Header />}

            <div className="min-h-96">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};
