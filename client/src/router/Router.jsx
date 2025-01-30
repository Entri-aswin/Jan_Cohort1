import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import { Home } from "../pages/user/Home";
import { Signup } from "../pages/shared/Signup";
import { Login } from "../pages/shared/Login";
import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { Course } from "../pages/user/Course";
import { CourseDetails } from "../pages/user/CourseDetails";
import { ErrorPage } from "../pages/shared/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "",
        element: <UserLayout />,
        errorElement: <ErrorPage  />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "courses",
                element: <Course />,
            },
            {
                path: "courseDetails/:courseId",
                element: <CourseDetails />,
            },
            {
                // element: <ProtectedRoute />,
                path: "user",
                children: [
                    {
                        path: "whishlist",
                        // element: <h1>Wishlist</h1>,
                    },
                    {
                        path: "profile",
                        element: <h1>Profile page</h1>
                        // element: <Profile />,
                    },
                    {
                        path: "cart",
                        // element: <Cart />,
                    },
                    {
                        path: "orders",
                        // element: <h1> orders page</h1>,
                    },
                    {
                        path: "payment/success",
                        // element: <h2>Payment success</h2>,
                    },
                ],
            },
        ],
    },
]);

