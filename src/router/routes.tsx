import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import LandingPage from "../pages/LandingPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LandingPage />} />;
    </>,
  ),
);

export default routes;
