import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./page/landing_page";
import SplashScreen from "../src/component/landing_page/splashscreen";
import PersonalProfile from "./page/personalProfile";

function Router() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isLoading ? (
          <Route path="/" element={<SplashScreen />} />
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Home" element={<Home/>}/>
            <Route path="/personal-profile" element={<PersonalProfile />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;