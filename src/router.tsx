import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.style";
import { LoginPage } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { SignupPage } from "./Pages/signup";
import { OnboardingPage } from "./Pages/OnBoarding";
import { BoardDetail } from "./Pages/BoardDetail";
import { PayGraph } from "./Pages/PayGraph";
import { MyPage } from "./Pages/MyPage";
import { MyInfoEdit } from "./Pages/MyInfoEdit";
import { CreatePost } from "./Pages/CreatePost";
import { ExpenditureDetails } from "./Pages/ExpenditureDetails";
import { MyLevel } from "./Pages/MyLevel";
import { MyBoards } from "./Pages/MyBoards";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Onboarding" element={<OnboardingPage />} />
        <Route path="/board/detail" element={<BoardDetail />} />
        <Route path="/mypage/paygraph" element={<PayGraph />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<MyInfoEdit />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route
          path="/mypage/ExpenditureDetails"
          element={<ExpenditureDetails />}
        />
        <Route path="/mypage/level" element={<MyLevel />} />
        <Route path="/mypage/board" element={<MyBoards />} />
      </Routes>
    </BrowserRouter>
  );
}
export default router;
