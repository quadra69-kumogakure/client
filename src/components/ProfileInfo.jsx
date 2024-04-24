import { NavLink } from "react-router-dom";

function ProfileInfo({ userData }) {
    console.log(userData.user, "?<<<<")

    return (
        <div className="flex flex-col items-center gap-2 mb-5">
            <NavLink to="/update-profile">
                <img
                    src={userData.user.profilePicture} alt="..."
                    className="shadow-sm hover:cursor-pointer rounded-full w-20 h-20 align-middle border-none object-cover"
                />
            </NavLink>
            <p className="font-semibold text-xl">{userData.user.firstName} {userData.user.lastName}</p>
        </div>
    )
};

export default ProfileInfo;