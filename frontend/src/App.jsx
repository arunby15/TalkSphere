import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import SettingsPage from './Pages/SettingsPage';
import ProfilePage from './Pages/ProfilePage';
import AboutUsPage from './Pages/AboutUs';
import ContactPage from './Pages/Contact';
import { useAuthStore } from './store/useAuthStore';
import { Loader } from "lucide-react";
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/useThemeStore';
import Footer from './components/Footer';

function App() {
  const { authUser, checkAuth, ischeckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();

  console.log("online users are:", onlineUsers);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (ischeckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div data-theme={theme} className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/setting" element={<SettingsPage />} />
          <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />   {/* ✅ Footer added */}
      <Toaster />
    </div>
  );
}

export default App;
