import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.style";
import { LoginPage } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { SignupPage } from "./Pages/Signup";
import { OnboardingPage } from "./Pages/OnBoarding";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Onboarding" element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
