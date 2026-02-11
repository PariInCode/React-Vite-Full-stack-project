import React, { useState } from "react";
import authService from "../Appwrite/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Login } from "../store/authSlice";
import { Button, Input, Logo } from './index';

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData)
                    dispatch(Login(userData));
                navigate("/")

            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 text-center leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                </p>
                {error && <p className="text-red-500 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)} className="mt-8">
                    <div className="space-y-5">
                        <input
                            label="Name:"
                            type="text"
                            placeholder="Enter your Full Name"
                            {...register("name", {
                                required: true,
                            })} />

                        <Input
                            label="Email: "
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",   /*use RegExr:Pattern to get so */
                                } /* always spread to get data */
                            })} />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                                minLength: 6
                            })} />
                        <Button type="submit" className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold
             hover:bg-blue-700 transition duration-200">Sign Up</Button>
                    </div>
                </form>

            </div>
        </div>
    )

}


export default Signup

/*handle submit is a method where we give our function as a parameter it is like a keyword */