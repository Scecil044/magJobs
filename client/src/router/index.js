import { lazy } from "react";

const MyNetwork = lazy(() => import("../pages/MyNetwork.jsx"));

const coreRoutes = [
  {
    path: "/my/network",
    title: "MyNetwork",
    component: MyNetwork
  }
];

const routes = [...coreRoutes];
export default routes;
