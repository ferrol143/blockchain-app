import React from "react";

import About from "../components/About";
import BackToTop from "../components/BackToTop";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Counter from "../components/Counter";
import CTA from "../components/CTA";
import Footer from "../Layout/Footer";
import FooterAlt from "../Layout/FooterAlt";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

const Layout = (props) => {
  return (
    <React.Fragment>
      {props.children}
      <Services />
      <About />
      <Process />
      <Testimonial />
      <Footer />
      <FooterAlt />
      <BackToTop />
    </React.Fragment>
  );
};

export default Layout;
