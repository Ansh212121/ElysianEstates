
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>For inquiries or personalized assistance, email us at info@elysianestates.com </p>
        <p>
        Our team is available to help with any questions or booking needs. We look forward to hearing from you!
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Lets connect</h3>
              <div>
                <p>Phone</p>
                <span>+91 9897829737</span>
              </div>
              <div>
                <p>Email</p>
                <span>ansh2109ag@gmail.com@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>Surat India</span>
              </div>
              <ul>
                <Link to={"/google"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
