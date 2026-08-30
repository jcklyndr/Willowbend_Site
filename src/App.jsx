import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import AppRoutes from "./router/AppRoutes";
import "./variable.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
