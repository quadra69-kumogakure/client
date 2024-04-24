import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../utils/axios";

function UpdateProfilePage() {
    const navigate = useNavigate();
    let { UserId } = useParams();
    const [userData, setUserData] = useState({
      firstName: "",
      lastName: "",
      profilePicture: ""
    });
  
    useEffect(() => {
      if (UserId) {
        fetchDataDB();
      }
    }, []);
    
    async function fetchDataDB() {
        setIsLoading(true)
      try {
        let { data } = await apiRequest({
          method: "get",
          url: `/user-data`,
          headers: { authorization: `Bearer ${localStorage.access_token}` },
        });
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }

    function handleInput(event) {
      setUserData((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      });
    }

    async function handleSubmit(event) {
      try {
        console.log(userData);
        event.preventDefault();
        if (UserId) {
          await apiRequest({
            method: "put",
            url: `/update-profile`,
            data: {
                firstName: userData.firstName,
                lastName: userData.lastName,
                profilePicture: userData.profilePicture,
            },
            headers: { authorization: `Bearer ${localStorage.access_token}` },
          });
        }
        navigate("/");
      } catch (error) {
        console.log(error)
      }
    }

    return (
        <>
          <div className="d-flex w-100 vh100 justify-content-center align-items-center">
            <div className="w-50 botder bg-secondary text-black p-5">
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <h2 className="mb-4">Update Profile</h2>
                  <div className="form-outline mb-1">
                    <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        onChange={handleInput}
                        value={userData.firstName}
                      />
                    </div>
                    <div className="form-outline mb-1">
                      <label htmlFor="lastName">Last Name</label>
                        <input
                          id="lastName"
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={handleInput}
                        />
                    </div>
                    <div className="form-outline mb-1">
                      <label htmlFor="profilePicture">Profile Picture</label>
                        <input
                          id="profilePicture"
                          type="text"
                          name="profilePicture"
                          className="form-control"
                          placeholder="Image URL"
                          onChange={handleInput}
                          value={userData.profilePicture}
                        />
                       </div>
                      </div>
                    <div className="modal-footer">
                  <button type="submit" className="btn btn-success btn-block">
                      Update
                  </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
};

export default UpdateProfilePage;