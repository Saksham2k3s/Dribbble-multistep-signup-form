import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import role from "../utils/Role";
import { useDispatch, useSelector} from "react-redux";
import { add_role } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import dribbble_image from "../Images/dribbble.png";
function ChooseRole() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [clickedRoles, setClickedRoles] = useState(() => role.map(() => false));

  const handleRoleClick = (idx) => {
    const updatedClickedRoles = [...clickedRoles];
    updatedClickedRoles[idx] = !updatedClickedRoles[idx];
    setClickedRoles(updatedClickedRoles);
  };

  const handleNext = () => {
    const seletedRoles = clickedRoles.map((role) => role);
    dispatch(add_role({ seletedRoles }));
    if(user.signup_step.third_complete){
      navigate('/register/email-verify')
    }
  };

  const handleReturn = () => {
    navigate("/register/add-avatar");
  };

  return (
    <div className="w-screen min-h-screen pt-10">
      <div className="px-15">
        <div className=" lg:ml-20 font-poppins text-[#ea4b8b]">
          <img
            src={dribbble_image}
            alt="dribbble_logo"
            className=" w-24 h-15"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-1/2 px-5">
          <div className="text-center lg:px-5 md:px-5">
            <h1 className="font-bold text-2xl md:text-2xl lg:text-4xl">
              What brings you to Dribbble
            </h1>
            <p className="mt-3 md:mt-4 lg:mt-5 text-sm md:text-md lg:text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="px-5 flex flex-col lg:flex-row gap-10 mt-5 lg:mt-20">
          {role.map((role, idx) => (
            <div
              key={idx}
              className={`h-60 w-60 rounded-xl flex flex-col text-center items-center ${
                clickedRoles[idx]
                  ? "border-2 border-[#ea4b8b]"
                  : "border border-gray-500"
              }`}
              onClick={() => handleRoleClick(idx)}
            >
              <div className="w-full flex items-center justify-center">
                <img
                  src={role.image}
                  alt="designer"
                  className={`w-20 h-20 ${
                    clickedRoles[idx] ? "relative bottom-5" : "mt-3"
                  }`}
                />
              </div>
              <div
                className={`text-lg font-bold ${
                  clickedRoles[idx] ? "mt-0" : "mt-5"
                }`}
              >
                {role.role}
              </div>
              {clickedRoles[idx] && (
                <div className="text-sm text-slate-500">{role.description}</div>
              )}
              <button
                type="button"
                className={`rounded-full border border-gray-400 h-7 w-7 cursor-pointer ${
                  clickedRoles[idx] ? "mt-1 bg-[#ea4b8b]" : "mt-5"
                }`}
              >
                <FontAwesomeIcon icon={faCheck} size="sm" color="white" />
              </button>
            </div>
          ))}
        </div>

        {clickedRoles.some((clicked) => clicked) && (
          <div className="text-center font-bold text-xl mt-10">
            Anything else? You can select multiple.
          </div>
        )}

        <div className="text-center w-full">
          <button
            className="mt-10 bg-[#ea4b8b] rounded-lg px-8 py-3 text-white font-bold w-1/2 md:w-40"
            onClick={handleNext}
          >
            Finish
          </button>
          {clickedRoles.some((clicked) => clicked) && (
            <div className="text-center text-gray-400 font-bold mb- text-xl mt-2">
              or Press{" "}
              <span className=" cursor-pointer  " onClick={handleReturn}>
                RETURN
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChooseRole;