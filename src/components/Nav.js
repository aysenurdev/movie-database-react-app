import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { ImHome3 } from "react-icons/im";
import { FaQuestion } from "react-icons/fa";



const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);
    const showHideNav = () => {
        setNavOpen(!navOpen);
    };

  return (
  <>
  {/* //Mobile Nav */}

  <nav className={`mobile-nav${navOpen ? " active" : ""}`}>
  <div onClick={() => showHideNav()} className="nav-component">
    <div className="hamburger-menu">
      <span className="hamburger-line"></span>
    </div>

    <ul>
      <li className="nav-component home-link">
        <Link aria-label="navigate to the home page" className="link" to="/">
          <ImHome3 className="nav-icon" />
        </Link>
      </li>

      <li className="nav-component favorites-link">
        <Link aria-label="navigate to the favorites page" className="link" to="/favorites">
          <IoMdHeart className="nav-icon" />
        </Link>
      </li>

      <li className="nav-component about-link">
        <Link aria-label="navigate to the about page" className="link" to="/about">
          <FaQuestion className="nav-icon" />
        </Link>
      </li>
    </ul>
  </div>
</nav>
 {/* END Mobile Nav */}
      {/* Desktop Nav */}
      <nav className="desktop-nav">
        <ul>
          <li>
            <Link className="focus-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="focus-link" to="/favorites">
              Favorites
            </Link>
          </li>
          <li>
            <Link className="focus-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      {/* End Desktop Nav */}
  
  
  
  
  
  
  </>


  )


};

export default Nav;