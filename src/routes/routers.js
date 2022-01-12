import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/mainpage";
import LoginPage from "../pages/login";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginPage />}/>
        <Route path="/tiket" element={<MainPage />}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </>
  );
};

export default Routers;
