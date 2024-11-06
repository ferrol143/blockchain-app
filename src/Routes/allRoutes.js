
import Dashboard from "../pages/Dashboard/Layout";
import Layout1 from "../pages/Layout1/Layout1";
import Callback from "../pages/Callback/Layout";

const Routes = [
  { path: "/", component: <Layout1 /> },
  { path: "/:username", component: <Dashboard /> },
  { path: "/auth/callback", component: <Callback/> }
];

export default Routes;