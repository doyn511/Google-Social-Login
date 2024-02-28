import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Complete from "./Complete";
import LoginCallback from "./LoginCallback";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login-callback" element={<LoginCallback />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
