import { Route, Routes } from "react-router-dom";
import * as useComponent from "../index";

export function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<useComponent.Home />} />
      </Routes>
    </>
  );
}
