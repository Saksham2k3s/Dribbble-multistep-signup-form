import React, { useState } from "react";
import Logo from "../Images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { singUp_Info } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import HeroImage from "../Images/Curriculum Design.png";
import dribbbleImg from "../Images/dribbble.png";
import { UsernameAndEmail } from "../utils/PrevUserName&Email";

function UserInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    acceptedConditions: false,
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useState(false);
  const [errorType, setErrorType] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation checks
    if (formData.password.length < 6) {
      setError(true);
      setErrorType("password");
      setErrorMessage("Password must have at least 6 characters");
      return;
    }
    if (!formData.acceptedConditions) {
      setErrorType("term&condition");
      setError(true);
      setErrorMessage("Please accept the terms and conditions");
      return;
    }

    // Check if username or email already exists
    const isUsernameExists = UsernameAndEmail.some(
      (item) => item.username === formData.username
    );

    if (isUsernameExists) {
      setError(true);
      setErrorMessage("Username has already been taken");
      setErrorType("username");
      return;
    }

    const isEmailExists = UsernameAndEmail.some(
      (item) => item.email === formData.email
    );

    if (isEmailExists) {
      setError(true);
      setErrorMessage("User with this email has already exits");
      setErrorType("email");
      return;
    }

    // Dispatch action to store user info
    dispatch(singUp_Info(formData));
    if (user.signup_step.first_complete) {
      navigate("/register/add-avatar");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-screen min-h-screen flex">
      {/* Side Section */}
      <div className="w-1/3 bg-[#f2d184] hidden md:block px-10">
        <div className="w-1/2 dribbble-font">
          <img
            className="w-full h-[100] cursor-pointer"
            src={Logo}
            alt="logo"
          />
        </div>
        <div>
          <h1 className="text-[#815e12] font-bold text-sm lg:text-xl xl:text-2xl 2xl:text-3xl">
            Discover the world's top Designers and Creatives.
          </h1>
        </div>
        <div className="h-1/2 w-full">
          <img className="w-full h-full" src={HeroImage} alt="" />
        </div>
      </div>
      {/* Side Section End */}
      <div className="flex w-full md:w-2/3">
        <div className="text-start md:text-end w-full h-auto px-10  mt-5">
          <div  >
            <img
              src={dribbbleImg}
              alt="dribbble logo"
              className="w-20 block lg:hidden mb-5 mx-5"
            />
          </div>
          <div className="px-5" >
            {!login ? "Already a member?" : "Don't have account?"}
            <Link
              className="text-blue-500"
              href="#"
              onClick={() => setLogin(!login)}
            >
              {!login ? "Sign In" : "Sign Up"}
            </Link>{" "}
          </div>
          <div className="flex items-center justify-center">
            <div className="login-signup-form  justify-center   w-full px-5 md:w-3/4  lg:w-1/2">
              <div className="text-black w-full text-xl md:text-3xl font-bold mt-10 text-start">
                {!login ? "Sign up to Dribbble" : "Sign In to Dribbble"}
              </div>
              <div className="text-start">
                {error &&
                  errorMessage &&
                  (errorType === "username" || errorType === "email") && (
                    <div className="text-sm text-red-600 mt-4">
                      {errorMessage}
                    </div>
                  )}
              </div>
              {!login ? (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row md:gap-10 mt-5 lg:mt-2">
                    <InputField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      error={error && errorType === "username"}
                    />
                  </div>
                  <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={error && errorType === "email"}
                  />
                  <InputField
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    error={error && errorType === "password"}
                  />
                  <div className="text-start">
                    {error && errorMessage && errorType === "password" && (
                      <div className="text-sm text-red-600 mt-4">
                        {errorMessage}
                      </div>
                    )}
                  </div>
                  <div className="check-box flex flex-row gap-2 mt-10">
                    <input
                      type="checkbox"
                      id="acceptedConditions"
                      name="acceptedConditions"
                      checked={formData.acceptedConditions}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="acceptedConditions"
                      className="text-start text-gray-400 text-sm"
                    >
                      Creating an account means you are okay with our{" "}
                      <span className="text-blue-500 cursor-auto">
                        terms and conditions
                      </span>
                      , and our{" "}
                      <span className="text-blue-500 cursor-pointer">
                        default Notification settings
                      </span>
                    </label>
                  </div>
                  <div className="text-start">
                    {error &&
                      errorMessage &&
                      errorType === "term&condition" && (
                        <div className="text-sm text-red-600 mt-4">
                          {errorMessage}
                        </div>
                      )}
                  </div>
                  <div className="text-start">
                    <button
                      type="submit"
                      className="mt-10 items-start bg-[#ea4b8b] rounded-lg px-8 py-3 text-white font-bold"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit}>
                  <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <InputField
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {error && errorMessage && (
                    <div className="text-sm text-red-600">{errorMessage}</div>
                  )}
                  <div className="text-start">
                    <button
                      type="submit"
                      className="mt-10 items-start bg-[#ea4b8b] rounded-lg px-8 py-3 text-white font-bold"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              )}
               <div className="text-start pr-2 lg:pr-10 mb-10" >
               <div className="text-sm mt-5 text-gray-500" >This site is protected by reCAPTCHA and the Google <span className="text-blue-500 cursor-pointer">Privacy Policy</span> and <span className="text-blue-500 cursor-pointer">Terms of Service</span> apply</div>
               </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
