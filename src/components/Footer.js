import {
    FaFacebook,
    FaInstagram,
    FaRegCopyright,
    FaTwitter,
  } from "react-icons/fa";

  
  const Footer = () => {
    return (
      <footer>

        <div className="socials">
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
        <span className="copyright">
          <FaRegCopyright />
          <p>{new Date().getFullYear()} Aysenur Demir</p>
        </span>
      </footer>
    );
  };
  
  export default Footer;
  