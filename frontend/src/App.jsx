import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
    // KEY CHANGE: Corrected 'ischeckingAuth' to 'isCheckingAuth' to match the store.
    const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
    const { theme } = useThemeStore();
    const location = useLocation();

    // This logic correctly hides the nav/footer on login and signup pages.
    const noNavFooterPaths = ['/login', '/signup'];
    const showNavFooter = !noNavFooterPaths.includes(location.pathname);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // KEY CHANGE: This loading check will now work correctly.
    // It will pause the app on the initial load until the check is complete,
    // which prevents the redirect issue.
    if (isCheckingAuth) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className="size-10 animate-spin" />
            </div>
        );
    }

    return (
        <div data-theme={theme} className="flex flex-col min-h-screen">
            {showNavFooter && <Navbar />}

            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
                    <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
                    <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
                    
                    {/* Protected Routes */}
                    <Route path="/setting" element={authUser ? <SettingsPage /> : <Navigate to="/login" />} />
                    <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
                    <Route path="/about" element={authUser ? <AboutUsPage /> : <Navigate to="/login" />} />
                    <Route path="/contact" element={authUser ? <ContactPage /> : <Navigate to="/login" />} />
                </Routes>
            </div>

            {showNavFooter && <Footer />}
            <Toaster />
        </div>
    );
}

export default App;
