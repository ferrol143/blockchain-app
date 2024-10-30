import React from "react";
import NavBar from "../../Layout/Navbar";
import BackToTop from "../../components/BackToTop";
import Footer from "../../Layout/Footer";
import FooterAlt from "../../Layout/FooterAlt";
import ContainerProfile from "../../components/ContainerProfile";
import NavBarDashboard from "../../Layout/NavbarDashboard";
import BadgeWalletCard from "../../components/Badge";

const Dashboard = () => {
  return (
    <React.Fragment>
      <NavBarDashboard isDark={true} />
      {/* import Section */}
    <ContainerProfile />
    <BadgeWalletCard />
      <Footer />
      <FooterAlt />
      <BackToTop />
    </React.Fragment>
  );
};

export default Dashboard;
