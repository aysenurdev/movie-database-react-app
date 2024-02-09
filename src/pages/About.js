import { FaGithub } from "react-icons/fa";
import chairs from "../images/chairs.png";
import { APP_NAME } from "../utilities/constants";

const About = () => {
  document.title = APP_NAME + "About";
  return (
    <div className="about-section">
    <main className="about-page">
     <div> <img alt="Humaaans hard at work." src={chairs} /></div>
      <div className="about-text">
        <div className="main-heading">
          <div className="future-text">
      
    
          </div>
        
        </div>
        <h2>About CineDB</h2>
        <p>
        At CineDB, we believe in the power of storytelling and the magic that unfolds on the silver screen. Our mission is to provide movie enthusiasts with a seamless and immersive experience as they explore the vast world of cinema. Whether you're a casual viewer or a dedicated cinephile, CineDB is your go-to destination for all things movies.
        </p>
      
        <p>
          Check out our code on{" "}
          <a
            className="github-link"
            href="https://github.com/aysenurdev"
          >
            GitHub! <FaGithub className="social-icon" />
          </a>
        </p>
      </div>
    </main>
    </div>
  );
};

export default About;
