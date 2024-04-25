import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiRequest } from "../utils/axios";

function RegisterPage() {
    const [userData, setUserData] = useState({
        firstName : "",
        lastName : "",
        profilePicture : "",
        email : "",
        password : ""
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await apiRequest({
                method: "POST",
                url: "/register",
                data: userData
            });

            navigate("/login")
        } catch (error) {
            console.log(error);
        }

    };

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="flex justify-center items-center">
                <img src="" alt="" />
            </div>
            <div className="bg-sky-100 px-auto flex flex-col justify-center gap-3">
                <div className="px-52">
                    <p className="mb-5 text-3xl font-semibold">Create your account</p>
                    <p>Connect with people around the world!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col px-11 xl:px-52">
                        <label htmlFor="firstName" className="text-left text-lg">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            className="mb-5 px-2 py-2 text-xl rounded"
                            onChange={handleInputChange}
                        />

                        <label htmlFor="lastName" className="text-left text-lg">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className="mb-5 px-2 py-2 text-xl rounded"
                            onChange={handleInputChange}
                        />

                        <label htmlFor="profilePicture" className="text-left text-lg">Profile Picture Link</label>
                        <input
                            type="text"
                            name="profilePicture"
                            className="mb-5 px-2 py-2 text-xl rounded"
                            onChange={handleInputChange}
                        />

                        <label htmlFor="email" className="text-left text-lg">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="mb-5 px-2 py-2 text-xl rounded"
                            onChange={handleInputChange}
                        />

                        <label
                            htmlFor="password"
                            className="text-left text-xl"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="mb-10 px-2 py-2 text-xl rounded"
                            onChange={handleInputChange}
                        />

                        <button type="submit" className="bg-blue-500 py-2 rounded text-slate-50">Register</button>
                    </div>
                </form>
                <div className="px-52">
                    <p>You have account? <NavLink to="/login"><span className="text-blue-700">Login now</span></NavLink></p>
                </div>
            </div>
        </div>
    )
};

export default RegisterPage;