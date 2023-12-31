import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Boards from "../pages/Boards";
import NotReadyYet from "../pages/NotReadytYet";

export const Routing = () => (
  <Routes>
    <Route path={routes.dashboard} element={NotReadyYet()} />
    <Route path={routes.boards} element={Boards()} />
    <Route path={routes.profile} element={NotReadyYet()} />
    <Route path={routes.search} element={NotReadyYet()} />
    <Route path={routes.settings} element={NotReadyYet()} />

    <Route path="/*" element={NotReadyYet()} />
  </Routes>
);
