import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CartCards } from "../../components/user/Cards";
import toast from "react-hot-toast";
import axios from "axios";
import { axiosInstance } from "../../config/axiosInstance";
import { loadStripe } from "@stripe/stripe-js";

export const Cart = () => {
    const [refreshState, setRefreshState] = useState(false);

    const [cartDetails, isLoading, error] = useFetch("/cart/get-cart", refreshState);

    
    
    const makePayment = async () => {
        try {
            const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

            const session = await axiosInstance({
                url: "/payment/create-checkout-session",
                method: "POST",
                data: { products: cartDetails?.courses },
            });

            console.log(session, "=======session");
            const result = stripe.redirectToCheckout({
                sessionId: session.data.sessionId,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemoveCartItem = async (courseId) => {
        try {
            const response = await axiosInstance({
                method: "DELETE",
                url: "/cart/remove-from-cart",
                data: { courseId },
            });
            toast.success("course removed ");
            setRefreshState((prev) => !prev);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "failed to remove");
        }
    };

    return (
        <div>
            <section>
                <h1>Cart page</h1>
            </section>
            <section className="flex">
                <div className="w-6/12 ">
                    <h1 className="text-2xl">Items in cart</h1>
                    {cartDetails?.courses?.map((value) => (
                        <CartCards item={value} key={value?._id} handleRemove={handleRemoveCartItem} />
                    ))}
                </div>
                <div className="w-6/12 px-20 py-20">
                    {cartDetails?.courses?.map((value) => (
                        <h2>price :{value?.courseId?.price} </h2>
                    ))}
                    <h2> Total Price : {cartDetails?.totalPrice} </h2>
                    <button className="btn btn-success mt-20" onClick={makePayment} >Make payment</button>
                </div>
            </section>
        </div>
    );
};
