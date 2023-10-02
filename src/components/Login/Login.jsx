import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h3 className="text-3xl my-5 text-center">Please Login</h3>
      <form onSubmit={handleLogin}>
        <div className="w-1/2 mx-auto">
          <input
            className="border py-1 px-4 mb-3 w-3/4 rounded-lg"
            type="email"
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
          />{" "}
          <br />
          <button className="w-3/4 btn btn-secondary">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
