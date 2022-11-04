import "./intro.scss";
import logo from "../../assets/logo.jpg";
import heroImg from "../../assets/hero-img.jpg";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineRight } from "react-icons/ai";

const Intro = () => {
  return (
    <div className="intro">
      <img src={heroImg} alt="heroImg" id="hero_img" />
      <div className="transparent"></div>
      <nav>
        <img id="logo" src={logo} alt="logo" />
        <div className="select">
          <TfiWorld />
          <select>
            <option value="English">Eng</option>
            <option value="English">Hindi</option>
          </select>
        </div>
        <button id="signin">Sign In</button>
      </nav>
      <main>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="input">
          <form>
            <input type="email" required placeholder="Email address" />
            <button>
              Get Started <AiOutlineRight />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Intro;