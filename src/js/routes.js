import HomePage from "../pages/home.jsx";
import AboutPage from "../pages/about.jsx";
import FormPage from "../pages/form.jsx";

import DynamicRoutePage from "../pages/dynamic-route.jsx";
import RequestAndLoad from "../pages/request-and-load.jsx";
import NotFoundPage from "../pages/404.jsx";

import GamePage from "../pages/game.jsx";

var routes = [
  {
    path: "/",
    component: GamePage
  },
  {
    path: "(.*)",
    component: NotFoundPage
  }
];

export default routes;
