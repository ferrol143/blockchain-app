import React from "react";
import Section from "./Section"
import NavBar from "../../Layout/Navbar";
import About from "../../components/About";
import BackToTop from "../../components/BackToTop";
import Footer from "../../Layout/Footer";
import FooterAlt from "../../Layout/FooterAlt";
import Process from "../../components/Process";
import Services from "../../components/Services";
import Testimonial from "../../components/Testimonial";
import Sertificate from "../../components/Sertificate";

const Layout1 = () => {
  return (
    <React.Fragment>
      <NavBar isDark={false} />
      {/* import Section */}
      <Section />
      <Services />
      <About />
      <Process />
      <Testimonial />
      <Sertificate/>
      <Footer />
      <FooterAlt />
      <BackToTop />
    </React.Fragment>
  );
};

export default Layout1;
