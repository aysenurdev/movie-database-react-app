
import logoImage from '../images/logo.png'
import { Link } from "react-router-dom";


// Your React component code


const Logo = () => {
  return (

        <Link to="/" className="logo">
        <img src={logoImage} alt="CineDB Logo"/>
        CineDB
      </Link>
 
  )
}

export default Logo;
