import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";

const Login = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    //   reset error and success msg
    setRegisterError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccess("Log in successfully");
        console.log(result.user);
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.error(error);
      });
  };

  const handleForgetPassword = () => {
    setRegisterError("");
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      setRegisterError("Please Provide a email");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setRegisterError("Please Provide a valid email");
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Checked you Email");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <h3 className="text-3xl my-5 text-center">Please Login</h3>
      <form onSubmit={handleLogin}>
        <div className="w-1/2 mx-auto">
          <input
            className="border py-1 px-4 mb-3 w-3/4 rounded-lg"
            type="email"
            ref={emailRef}
            placeholder="Email Address"
            name="email"
            required
            id=""
          />{" "}
          <br />
          <input
            className="border py-1 px-4 mb-3 w-3/4 rounded-lg"
            type="password"
            placeholder="Password"
            name="password"
            required
            id=""
          />
          <br />
          <label className="label">
            <a
              onClick={handleForgetPassword}
              href="#"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </a>
          </label>
          <button className="w-3/4 btn btn-secondary">Sign In</button>
        </div>
      </form>
      <div className="w-1/2 mx-auto my-4">
        {registerError && <p className="text-red-700">{registerError} </p>}
        {success && <p className="text-green-500">{success} </p>}
      </div>
    </div>
  );
};

export default Login;
