import React from "react";
import NavBar from "../../Layout/Navbar";
import Section from "./Section";

const Layout1 = () => {
  return (
    <React.Fragment>
      <NavBar isDark={false} />
      {/* import Section */}
      <Section />
    </React.Fragment>
  );
};

export default Layout1;
