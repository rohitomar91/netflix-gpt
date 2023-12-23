import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { BG_IMAGE, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { checkValidData } from "../utils/validate";
import Header from "./Header";

const Login = () => {
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
            photoURL: USER_AVATAR,
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
        .then(() => {
          // Sign in success
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
        <img src={BG_IMAGE} alt="bg" />
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
