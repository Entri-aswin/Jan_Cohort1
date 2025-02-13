import React from "react";
import { useNavigate } from "react-router-dom";

export const CourseCards = ({ course }) => {
    console.log("courseCard======", course);
    const navigate = useNavigate();

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={course?.image} alt="courses" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{course?.title} </h2>
                <p>Price : {course?.price} Rs </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => navigate(`/courseDetails/${course?._id}`)}>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export const CartCards = ({ item, handleRemove }) => {
    console.log("item=====", item);
    return (
        <div className="flex w-full h-32 items-center gap-20 bg-base-300 mb-10 rounded-md ">
            <img src={item?.courseId?.image} alt="cart-item" className="w-24 h-20" />

            <div>
                <h2>{item?.courseId?.title} </h2>
                <h3>{item?.courseId?.price} </h3>
            </div>

            <button
                className="btn btn-secondary"
                onClick={() => {
                    handleRemove(item?.courseId?._id);
                }}
            >
                Remove
            </button>
        </div>
    );
};
