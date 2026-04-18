import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CalmCornerPage from "./pages/CalmCornerPage";
import HomePage from "./pages/HomePage";
import FrameworkPage from "./pages/FrameworkPage";
import RREPage from "./pages/RREPage";
import SenseMathsPage from "./pages/SenseMathsPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ForumPage from "./pages/ForumPage";
import RegisterPage from "./pages/RegisterPage";
import UserFormPage from "./pages/UserFormPage";
import SupportPage from "./pages/SupportPage";
import NotFoundPage from "./pages/NotFoundPage";
import TeacherCornerPage from "./pages/TeacherCornerPage";
import RegulationPage from "./pages/RegulationPage";
import { visibility } from "./config/visibility";
import { AccessibilityProvider } from "./context/AccessibilityContext";
import { LanguageProvider } from "./context/LanguageContext";
import AccessibilityHub from "./components/AccessibilityHub";

function AppShell() {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        <AccessibilityHub />
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="main" element={<HomePage />} />
            <Route path="/" element={<Navigate to="/main" replace />} />
            <Route
              path="framework"
              element={
                visibility.frameworkPage
                  ? <FrameworkPage />
                  : <Navigate to="/main" replace />
              }
            />
            <Route path="rre" element={<RREPage />} />
            <Route path="sensemaths" element={<SenseMathsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="calm-corner" element={<CalmCornerPage />} />
            <Route path="forum" element={<ForumPage />} />
            <Route path="user-form" element={<UserFormPage />} />
            <Route path="services" element={<SupportPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="teacher-corner" element={<TeacherCornerPage />} />
            <Route path="regulation" element={<RegulationPage />} />
          </Route>
          <Route path="home" element={<Navigate to="/main" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AccessibilityProvider>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

export default App;
