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
import { ReviewPage } from "./Pages/reviewsPage/ReviewsPage";
import { RecomendationPage } from "./Pages/recomendationPage/RecomendationPage";

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
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/recomendation" element={<RecomendationPage />} />
      </Routes>
      <Footer />
      <GoTop />
    </div>
  );
};
