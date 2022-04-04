import "./app.css";
import { Outlet } from "react-router-dom";
import Header from "../navigation/Header/Header";
import Footer from "../navigation/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
