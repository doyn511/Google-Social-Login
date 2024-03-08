import { BrowserRouter, Route, Routes } from "react-router-dom";
import Complete from "./Complete";
import Login from "./Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
