import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContactsPage } from "./Pages/contactsPage/ContactsPage";
import { ErrorPage } from "./Pages/errorPage/ErrorPage";
import { HomePage } from "./Pages/homePage/HomePage";
import { PricePage } from "./Pages/pricePage/PricePage";
import { TeamPage } from "./Pages/teamPage/TeamPage";
import { GoTop } from "./components/goTop/GoTop";
import { Footer } from "./layout/footer/Footer";
import { DesktopHeader } from "./layout/header/desktopHeader/DesktopHeader";
import { MobileHeader } from "./layout/header/mobileHeader/MobileHeader";

export const App: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="App">
      {width < breakpoint ? <MobileHeader /> : <DesktopHeader />}
      <Routes>
        <Route
          path="/Delote-Beauty/"
          element={<Navigate to={"/Delote-Beauty/home"} />}
        />
        <Route path="/Delote-Beauty/home" element={<HomePage />} />
        <Route path="/Delote-Beauty/team" element={<TeamPage />} />
        <Route path="/Delote-Beauty/price" element={<PricePage />} />
        <Route path="/Delote-Beauty/contacts" element={<ContactsPage />} />
        <Route path="/Delote-Beauty/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <GoTop />
    </div>
  );
};
