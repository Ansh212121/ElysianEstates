
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Our villas are equipped with advanced security systems and 24/7 concierge support for your peace of mind.</p>
          <p>Enjoy unparalleled comfort with meticulously designed interiors, plush furnishings, and personalized amenities tailored to your needs.</p>
          <p>Experience the epitome of luxury with exclusive locations, exceptional service, and opulent features that redefine elegance.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
