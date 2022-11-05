import "./login.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Signup() {
  return (
    <div className="intro">
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
        </form>
      </div>
    </div>
  );
}
