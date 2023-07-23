import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorContext from "./helper/context_error";
import SuccessContext from './helper/context_success';

import LandingPage from "./page/landing_page";
import SplashScreen from "../src/component/landing_page/splashscreen";
import PersonalProfile from "./page/personalProfile";
import Home from "./page/home";
import Signin from "./page/sign_in";
import Signup from "./page/sign_up";
import Verification from "./page/verification";
import Createotp from "./page/create_otp";
import Reset_password from "./page/reset_password";
import Reset_change_password from "./page/reset_change_password"
import AddPhone from "./page/addPhone";
import ChangePassword from "./page/changePassword";
import ChangePin from "./page/changePIN";
import History from "./page/history";
import Profile from "./page/profile";
import Transfer from "./page/transfer";

function Router() {
  const [success_message, setsuccess_message] = useState("");
  const value_success = { success_message, setsuccess_message };
  const [error_message, seterror_message] = useState("");
  const value_error = { error_message, seterror_message };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ErrorContext.Provider value={value_error}>
      <SuccessContext.Provider value={value_success}>
        <BrowserRouter>
          <Routes>
            {isLoading ? (
              <Route path="/" element={<SplashScreen />} />
            ) : (
              <>
                <Route path="/" element={<LandingPage />} />

                <Route path="/sign-in" element={<Signin />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="/create-otp" element={<Createotp />} />
                <Route path="/reset-password" element={<Reset_password />} />
                <Route path="/reset-change-password" element={<Reset_change_password />} />

                <Route path="/Home" element={<Home />} />
                <Route path="/personal-info" element={<PersonalProfile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/transfer" element={<Transfer />} />

                <Route path="/history" element={<History />} />
                <Route path="/add-phone" element={<AddPhone />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/change-pin" element={<ChangePin />} />

              </>
            )}
          </Routes>
        </BrowserRouter>
      </SuccessContext.Provider>
    </ErrorContext.Provider>
  );
}

export default Router;