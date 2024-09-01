
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>Elysian Estates</h4>
          <p>
          Contact Us: info@elysianestates.com | Follow us on social media for updates and offers.

Privacy Policy | Terms & Conditions | © 2024 Elysian Estates. All rights reserved.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+91 98978-29737</p>
          <p>ansh2109ag@gmail.com</p>
          <p>© All Rights Reserved By Ansh Agarwal</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
