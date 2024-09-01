
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, } from "react-icons/ri";
const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
          <h3>Lets connect</h3>
          <div>
            <p>Phone</p>
            <span>98978-28737</span>
          </div>
          <div>
            <p>Email</p>
            <span>ansh2109ag@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>Surat India</span>
          </div>
          <ul>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
        </ul>
        </div>
        
        <div className="container_2">
          <h3>We would love to hear from you</h3>
          <form>
            <div>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email"/>
            </div>
            <textarea rows="4" placeholder="Your Message..."/>
            <button type="submit">SEND</button>
          </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;
