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
