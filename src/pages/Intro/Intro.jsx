import "./intro.scss";
import logo from "../../assets/logo.jpg";
import heroImg from "../../assets/hero-img.jpg";
import tvImg from "../../assets/tv.png";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineRight } from "react-icons/ai";

const Intro = () => {
  return (
    <>
      <section className="intro">
        {/* <img src={heroImg} alt="heroImg" id="hero_img" /> */}
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
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form>
            <input type="email" required placeholder="Enter Email" />
            <button>
              Get Started <AiOutlineRight />
            </button>
          </form>
        </main>
      </section>
      <section className="features">
        <section className="feature">
          <div className="title">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div className="tv">
            <img src={tvImg} alt="tv" />
            <video
              id="video"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </section>
        <section className="feature">
          <div className="title">
            <h1>Download your shows to watch offline.</h1>
            <h2>
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
          <img
            id="stranger"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="tv"
          />
        </section>
      </section>
    </>
  );
};

export default Intro;
