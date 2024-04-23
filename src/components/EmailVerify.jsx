import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Footer from "./Footer";

function EmailVerify() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <>
      <Navbar />
      <div className="max-w-screen">
        <div className="w-full flex items-center justify-center">
          <div className="w-full md:w-1/2 px-5">
            <div className="text-center lg:px-5 md:px-5">
              <h1 className="font-bold text-2xl md:text-2xl lg:text-4xl mt-10 lg:mt-20">
                Please verify your email...
              </h1>
            </div>
            <div className="text-center text-6xl lg:text-8xl mt-5 text-gray-400">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
              <p className="mt-3 md:mt-4 lg:mt-5 text-base md:text-lg lg:text-xl text-gray-500">
                Please verify your email address. We have sent a confirmation email to:
              </p>
              <h5 className="text-black text-xl lg:text-xl mt-3 font-bold">
                {user.email.email_address}
              </h5>
              <p className="mt-3 md:mt-4 lg:mt-5 text-base md:text-lg lg:text-xl text-gray-500">
                Click the confirmation link in that email to begin using Dribbble.
              </p>
              <p className="mt-3 md:mt-4 lg:mt-5 text-base md:text-lg lg:text-xl text-gray-500">
                Didn't receive the email? Check your spam folder. It may have been caught by a filter. If you still don't see it, you can{" "}
                <span className="text-[#ea4b8b] font-bold cursor-pointer">resend the confirmation email</span>.
              </p>
              <p className="mt-3 md:mt-4 lg:mt-5 text-base md:text-lg lg:text-xl text-gray-500">
                Wrong email address?{" "}
                <span className="text-[#ea4b8b] font-bold cursor-pointer">Change it.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EmailVerify;
