import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

function Signup() {
	const [getStarted, setGetStarted] = useState("");
	const [passwd, setPasswd] = useState("none");

	function handleGetStarted(e) {
		e.preventDefault();
		setGetStarted("none");
		//show input for email and password
		setPasswd("");
		document.getElementById("inputemail").className =
			"w-[50%] sm:w-[40%] lg:w-[20%] lg:h-12 h-10 pl-4 rounded-sm mt-2 mb-[0.125rem]";
		document.getElementById("inputpasswd").className =
			"w-[50%] sm:w-[40%] lg:w-[20%] lg:h-12 h-10 pl-4 rounded-sm mb-2 mb-[0.125rem] ml-[0.125rem]";

		//Sign In button
	}

	return (
		<div>
			<BackgroundImage />
			<Header typePage="signup" />
			<div className="absolute top-36 left-0 right-0 ">
				<div className="CONTENT mx-auto text-center text-white">
					<h1 className="TEXT1 text-3xl sm:text-5xl sm:w-[40rem] font-bold my-2 w-auto mx-auto">
						Unlimited movies, TV shows and more.
					</h1>
					<h3 className="TEXT2 text-lg font-semibold w-72 my-4 mx-auto ">
						Watch anywhere. Cancel anytime.
					</h3>
					<h4 className="TEXT3 text-base font-semibold w-72 lg:w-fit my-2 mx-auto">
						Ready to watch? Enter your email to create or restart your
						membership.
					</h4>

					<div className="EMAIL flex flex-col lg:flex-none">
						<form action="">
							<input
								className="w-[70%] sm:w-[60%] lg:w-[30%] lg:h-12 h-10 pl-4 rounded-sm my-2"
								type="email"
								name="email"
								placeholder="Email address"
								id="inputemail"
							/>
							<input
								className="w-[70%] sm:w-[60%] lg:w-[30%] lg:h-12 h-10 pl-4 rounded-sm my-2"
								style={{ display: passwd }}
								type="password"
								name="password"
								placeholder="Password"
								id="inputpasswd"
							/>
							<button
								onClick={handleGetStarted}
								style={{ display: getStarted }}
								className="bg-red-600 mx-auto lg:inline hidden lg:mx-0 lg:h-12 font-medium w-32 h-10 rounded-sm my-2 hover:bg-red-500  cursor-pointer"
							>
								Get Started
							</button>
						</form>
						<button
							onClick={handleGetStarted}
							style={{ display: getStarted }}
							className="bg-red-600 mx-auto lg:hidden lg:mx-0 lg:h-12 font-medium w-32 h-10 rounded-sm my-2 hover:bg-red-500  cursor-pointer"
						>
							Get Started
						</button>

						<button
							// onClick={handleGetStarted}
							style={{ display: passwd }}
							className="w-[4.5rem] sm:p-1 lg:p-[0.3rem] rounded-[0.22rem]  bg-red-600 mx-auto lg:hidde font-medium my-2 hover:bg-red-500  cursor-pointer"
						>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
