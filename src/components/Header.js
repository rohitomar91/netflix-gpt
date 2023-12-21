import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign out success
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error
        navigate("/error");
      });
  };

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-52" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center">
          <img className="w-10 h-10" src={user.photoURL} alt="usericon" />
          <button
            className="p-2 font-bold text-gray-200"
            onClick={handleSignOut}
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
