
import Dashboard from "../pages/Dashboard/Layout";
import Instansi from "../pages/Instansi/Layout";
import Layout1 from "../pages/Layout1/Layout1"

  
  const Routes = [
    { path: "/", component: <Layout1 /> },
    { path: "/dashboard", component: <Dashboard /> },
    { path: "/instansi", component: <Instansi /> },
  ];
  
  export default Routes;