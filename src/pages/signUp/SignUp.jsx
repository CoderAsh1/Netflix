import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../login/login.scss";

export default function Signup() {
  return (
    <div className="intro" data-aos="fade-in">
      <img src={logo} alt="logo" width={"150px"} className="logo" />
      <div className="login">
        <form className="login-form">
          <h1>Signup</h1>
          <input type="text" className="email" name="email" required />
          <label htmlFor="email">Email or phone number</label>
          <input
            type="password"
            className="password"
            name="password"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="c_password"
            name="c_password"
            required
          />
          <label htmlFor="password">Confirm Password</label>
          <button>Sign up</button>

          <p style={{ marginTop: "30px" }}>
            {" "}
            <p style={{ color: "gray", marginRight: "10px" }}>
              Don't have an account?
            </p>
            <Link to="/login">Sign In now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
