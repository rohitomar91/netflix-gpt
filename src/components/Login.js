import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute px-20 py-12 bg-black w-[25%] my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full rounded-md bg-nf-gray-100"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-2 w-full rounded-md bg-nf-gray-100"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-nf-gray-100"
        />
        <button className="w-full my-8 p-4 bg-red-600 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span className="text-gray-500">
          {isSignInForm ? "New to Netflix?" : "Already a member?"}
        </span>
        <span
          className="cursor-pointer hover:underline px-1"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "Sign Up" : "Sign In"} now.
        </span>
      </form>
    </div>
  );
};

export default Login;
