import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiRequest } from "../utils/axios";

function LoginPage() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    // const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    async function handleCredentialResponse(response) {
        // console.log("Encoded JWT ID token: " + response.credential);
        try {
            const { data } = await apiRequest({
                method: "POST",
                url: "/google-login",
                headers: {
                    google_token: response.credential
                }
            });

            localStorage.setItem("token", data.access_token);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: "982258102041-eo1doeutrvrckku3fqiv4t05ue50q6qj.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }  // customization attributes
            );
            // google.accounts.id.prompt(); // also display the One Tap dialog
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await apiRequest({
                method: "POST",
                url: "/login",
                data: userData
            });

            localStorage.setItem("token", data.token)
            navigate("/")
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
                    <p className="mb-5 text-3xl font-semibold">Login to your Account</p>
                    <p>Welcome Back!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col px-11 xl:px-52">
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

                        <button type="submit" className="bg-blue-500 py-2 rounded text-slate-50">Login</button>
                    </div>
                </form>
                <div className="px-52">
                    <div id="buttonDiv"></div>
                </div>
                <div className="px-52">
                    <p>Don't have account? <NavLink to="/register"><span className="text-blue-700">Create an account</span></NavLink></p>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;