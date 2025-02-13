import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import toast from "react-hot-toast";

export const CourseDetails = () => {
    const params = useParams();
    const { courseId } = params;

    console.log("params===", courseId);

    const [courseDetails, isLoading, error] = useFetch(`/courses/course-details/${courseId}`);

    const addToCart = async () => {
        try {
            const response = await axiosInstance({
                url: "/cart/add-to-cart",
                method: "POST",
                data: { courseId },
            });

            console.log("response====", response);
            toast.success("course added to cart");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    };

    return (
        <div>
            <section>
                <h2 className="text-2xl font-bold">Course Details Page</h2>
            </section>
            <section>
                <h2 className="text-3xl font-bold">{courseDetails?.title} </h2>
                <p className="text-md font-semibold">{courseDetails?.description} </p>
                <img src={courseDetails?.image} alt="" />
                <button onClick={addToCart} className="btn btn-success">
                    {" "}
                    Add to Cart{" "}
                </button>
            </section>
        </div>
    );
};
