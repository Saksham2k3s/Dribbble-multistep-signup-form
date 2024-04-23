import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
function InputField({ label, type, name, value, onChange, error }) {
  return (
    <div className="mt-10">
      <div className="text-start">
        <label htmlFor={name}>{error ?  <FontAwesomeIcon icon={faTriangleExclamation} size='xl' className=" text-red-500" /> : ''} {label}</label>
        <br />
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`w-full p-2 mt-1 outline-none border-none  text-black rounded-md h-[100] ${error ? 'bg-red-200' : 'bg-gray-200'}`}

        />
      </div>
    </div>
  );
}

export default InputField;
