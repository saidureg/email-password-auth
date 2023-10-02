import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      return setRegisterError(
        "Password should be at least 6 characters or longer"
      );
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/.test(password)
    ) {
      return setRegisterError(
        "Password should be uppercase letter, special symbol, and number"
      );
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User created successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h3 className="text-3xl text-center">Please Register</h3>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <div className="relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute top-[52px] right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
        {registerError && <p className="text-red-700">{registerError} </p>}
        {success && <p className="text-green-500">{success} </p>}
      </div>
    </div>
  );
};

export default Register;
