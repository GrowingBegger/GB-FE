import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.style";
import { LoginPage } from "./Pages/Login";
import { SignupPage } from "./Pages/signup";
import { Home } from "./Pages/Home";
import { BoardDetail } from "./Pages/BoardDetail";

function router() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/board/detail" element={<BoardDetail />} />
                <Route path="/Signup" element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default router;
