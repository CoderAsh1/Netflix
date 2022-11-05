import "./intro.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import stranger from "../../assets/stranger.jpg";
import tvImg from "../../assets/tv.png";
import children from "../../assets/children.png";
import strangerposter from "../../assets/stranger-poster.png";
import downloadGif from "../../assets/download-icon.gif";
import { TfiWorld } from "react-icons/tfi";
import { accordionData } from "../../accordionData";
import Accordion from "../../components/Accordion/Accordion";

const Intro = () => {
  return (
    <>
      <section className="intro">
        <nav>
          <img id="logo" src={logo} alt="logo" />
          <div className="select">
            <TfiWorld />
            <select>
              <option value="English">Eng</option>
              <option value="English">Hindi</option>
            </select>
          </div>
          <Link to="/login">
            <button id="signin">Sign In</button>
          </Link>
        </nav>
        <main>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form className="form">
            <input type="email" name="email" required />
            <label htmlFor="email">Enter Email</label>
            <button>Get Started &#62;</button>
          </form>
        </main>
      </section>
      {/* animated tv section */}
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
        {/* stranger things section */}
        <section className="feature">
          <div className="title">
            <h1>Download your shows to watch offline.</h1>
            <h2>
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
          <div className="img_group">
            <img id="stranger" src={stranger} alt="tv" />
            <div className="download-status">
              <img src={strangerposter} alt="strangerposter" />
              <div>
                <h3>Stranger Things</h3>
                <p>Downloading...</p>
              </div>
              <img
                src={downloadGif}
                className="downloadGif"
                alt="downloadGif"
                width="50px"
              />
            </div>
          </div>
        </section>
        {/* animated tv section */}
        <section className="feature">
          <div className="title">
            <h1>Watch everywhere.</h1>
            <h2>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
          <div className="tv">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt="tv"
            />
            <video
              id="video"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </section>
        {/* children section */}
        <section className="feature">
          <div className="title">
            <h1>Create profiles for children.</h1>
            <h2>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h2>
          </div>
          <img id="stranger" src={children} alt="tv" />
        </section>
      </section>
      {/* accordian */}
      <section className="accordion">
        <div className="title">
          <h1>Frequently Asked Questions</h1>
          {accordionData.map((data, i) => (
            <Accordion key={i} title={data.title} content={data.content} />
          ))}
        </div>
        <h2>
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <form id="lastform" className="form">
          <input type="email" required />
          <label htmlFor="email">Enter Email</label>
          <button>Get Started &#62;</button>
        </form>
      </section>
    </>
  );
};

export default Intro;
