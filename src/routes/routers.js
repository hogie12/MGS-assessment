import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/mainpage";
import LoginPage from "../pages/login";
import { useSelector } from "react-redux";

const Routers = () => {
  const { isSuccess } = useSelector((state) => state.Auth);

  return <>{isSuccess ? <MainPage /> : <LoginPage />}</>;
};

export default Routers;
