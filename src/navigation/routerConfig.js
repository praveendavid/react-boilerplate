import LandingPage from "../pages/landingPage/landingPage";
import { ROOT } from "./constants";
import { NotFound } from "./notFound";

export const approutes = () => [
    { path: ROOT, element: <LandingPage /> },
    { path: '*', element: <NotFound /> }
];

