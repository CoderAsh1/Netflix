import "./login.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Login() {
  return (
    <div className="intro" data-aos="fade-in">
      <img src={logo} alt="logo" width={"150px"} className="logo" />
      <div className="login">
        <form className="login-form">
          <h1>Sign In</h1>
          <input type="text" className="email" name="email" required />
          <label htmlFor="email">Email or phone number</label>
          <input
            type="password"
            className="password"
            name="password"
            required
          />
          <label htmlFor="password">Password</label>
          <button>Sign In</button>
          <div className="rememberMe">
            <div>
              <input type="checkbox" id="check" />
              <label htmlFor="checkbox" className="checkbox">
                Remember me
              </label>
            </div>
            <span>Need help?</span>
          </div>
          <p style={{ marginTop: "30px" }}>
            {" "}
            <span style={{ color: "gray", marginRight: "10px" }}>
              New to Netflix?
            </span>
            <Link to="/signup">Sign up now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
