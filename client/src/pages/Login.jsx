import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [userErrors, setUserErrors] = useState({ error: false, code: "" });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1) + " !";
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(
        firebaseAuth,
        formValues.email,
        formValues.password
      )
        .then((user) => {
          console.log("Login Successful", user);
        })
        .catch((error) => {
          setUserErrors({
            error: true,
            code: capitalizeFirstLetter(
              error.code.replace("auth/", "").replace("-", " ")
            ),
          });
          console.log(
            "Vaibhav can't you take care of these errors? Devs on other side, Big apology from Vaibhav!!",
            error
          );
        });
    } catch (error) {
      console.log("Error in login screen", error);
    }
    // setFormValues({ email: "", password: "" });
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });

  return (
    <div>
      <BackgroundImage />
      <Header typePage="sigin" />
      <div className="absolute top-24 left-0 right-0 mx-auto text-white bg-black h-[32rem] w-96 opacity-90">
        <div className="CONTENT BOX px-20 py-14">
          {userErrors.error && (
            <h2 className="bg-[#e87c03] rounded-md px-2 py-1 ">
              {userErrors.code}
            </h2>
          )}
          <h1 className=" text-3xl font-[650] mb-4">Sign In</h1>
          <form action="">
            <input
              className="w-[100%] h-10 pl-4 rounded-[0.25rem] my-[0.375rem] text-black"
              type="email"
              name="email"
              placeholder="Email or phone number"
              id="inputemail"
              value={formValues.email}
              onChange={handleChange}
            />
            <input
              className="w-[100%] h-10 pl-4 rounded-[0.25rem] my-[0.375rem] text-black"
              type="password"
              name="password"
              placeholder="Password"
              id="inputpasswd"
              value={formValues.password}
              onChange={handleChange}
            />
            <button
              onClick={handleSignIn}
              className="w-[100%] bg-red-600 font-medium h-10 rounded-[0.25rem] mt-6 mb-2 hover:bg-red-500  cursor-pointer"
            >
              Sign In
            </button>
          </form>
          <div className="textBottom font-normal text-xs text-gray-400">
            <div className="Below SignIn flex mb-16">
              <div className="R">Remember Me</div>
              <div className="N ml-auto cursor-pointer hover:underline">
                Need Help?
              </div>
            </div>
            <div className="bottomText mb-4">
              New to Netflix?{" "}
              <button
                className="text-white text-sm cursor-pointer hover:underline"
                onClick={() => {
                  return navigate("/signup");
                }}
              >
                Sign up now.
              </button>
            </div>
            <div className="bottomText text-[0.7rem]">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className="text-blue-400 cursor-pointer hover:underline">
                Learn more.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
