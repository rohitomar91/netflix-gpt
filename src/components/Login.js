import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { checkValidData } from "../utils/validate";
import Header from "./Header";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const userName = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    // validate the form data
    const name = isSignInForm ? "user" : userName.current.value;
    const validateMsg = checkValidData(
      email.current.value,
      pass.current.value,
      name
    );
    setErrorMessage(validateMsg);

    // Case: validation failed
    if (validateMsg) return;

    // Case: sign up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // Update user profile with provided user name
          updateProfile(user, {
            displayName: name,
            photoURL:
              "https://lh3.googleusercontent.com/ogw/ANLem4Z9-9Ie7ehSPJkxRnhws3y8ose9EO6O_EEKlxT33Q=s32-c-mo",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.errorCode + "-" + error.message);
        });
    }
    // Case: sign in
    else {
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.errorCode + "-" + error.message);
        });
      //
    }
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
      <form
        className="absolute px-20 py-12 bg-black w-[25%] my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full rounded-md bg-nf-gray-100"
            ref={userName}
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-2 w-full rounded-md bg-nf-gray-100"
          ref={email}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-nf-gray-100"
          ref={pass}
        />
        <p className="text-red-700 font-bold text-lg py-1">{errorMessage}</p>
        <button
          className="w-full my-8 p-4 bg-red-600 rounded-md"
          onClick={handleSubmit}
        >
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
