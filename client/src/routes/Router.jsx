import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";

export const router = createBrowserRouter([
    {
        path: "",
        element: <UserLayout />,
        errorElement: <ErrorPage  />,
        children: [
            {
                path: "",
                element: <h1>Home</h1>
                // element: <Home />,
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
                element: <CoursePage />,
            },
            {
                path: "courseDetails/:courseId",
                element: <CourseDetailsPage />,
            },
            {
                element: <ProtectedRoute />,
                path: "user",
                children: [
                    {
                        path: "whishlist",
                        element: <h1>Wishlist</h1>,
                    },
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                    {
                        path: "cart",
                        element: <Cart />,
                    },
                    {
                        path: "orders",
                        element: <h1> orders page</h1>,
                    },
                    {
                        path: "payment/success",
                        element: <h2>Payment success</h2>,
                    },
                ],
            },
        ],
    },
]);

