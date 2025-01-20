import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const Provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const handlegooglelogin = () => {
    signInWithPopup(auth, Provider)
      .then((result) => {
        const loggedinuser = result.user;
        console.log(loggedinuser);
        setUser(loggedinuser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGitHublogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loggedbyGit = result.user;
        console.log(loggedbyGit);
        setUser(loggedbyGit);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlegooglelogOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col text-center items-center justify-center">
      <div className="flex">
        {user ? (
          <button onClick={handlegooglelogOut} className="btn btn-warning ">
            Log Out
          </button>
        ) : (
          <>
            <button
              onClick={handlegooglelogin}
              className="p-4 ml-10  btn btn-success"
            >
              Google Login
            </button>
            <button
              onClick={handleGitHublogin}
              className="p-4 ml-10  btn btn-success"
            >
              github Login
            </button>
          </>
        )}
      </div>

      {user && (
        <div>
          <h1 className="text-6xl ">user: {user.displayName}</h1>
          <h1 className="text-4xl ">Email: {user.email}</h1>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
