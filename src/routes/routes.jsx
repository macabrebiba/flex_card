import React from "react";
import {
  LandingPage,
  HomePage,
  LoginPage,
  SignUpPage,
  SendEmail,
  IntroPage1,
  IntroPage2,
  IntroPage3,
  ScanPage,
  Subscription,
  VerificationCode,
  TramSubPage1,
  ProfilePage,
  Ewallet
} from "../pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/register" element={<SignUpPage />}></Route>
        <Route path="/wallet" element={<Ewallet />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/intro1" element={<IntroPage1 />}></Route>
        <Route path="/intro2" element={<IntroPage2 />}></Route>
        <Route path="/intro3" element={<IntroPage3 />}></Route>
        <Route path="/sendmail" element={<SendEmail />}></Route>
        <Route path="/verify" element={<VerificationCode />}></Route>
        <Route path="/scan" element={<ScanPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/subscription" element={<Subscription />}></Route>
        <Route path="/subscription-tram" element={<TramSubPage1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
