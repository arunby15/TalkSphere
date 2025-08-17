import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquare, Loader2, Eye, EyeOff, Mail, Lock } from "lucide-react";
import AuthimagePattern from "../components/AuthimagePattern";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLogingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(FormData);
  };

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      {/* Left Side - Illustration / Info */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 text-white p-12 relative overflow-hidden">
        <div className="z-10 text-center max-w-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl shadow-lg">
              <MessageSquare className="size-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Join Our Community 🚀
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Connect with friends, share your journey, and explore new ideas every day.
            Sign in now to be part of something amazing!
          </p>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 rounded-3xl"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-6 sm:p-12">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl p-10 space-y-8 border border-white/30">
          {/* Logo / Welcome */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">Welcome Back 👋</h2>
            <p className="text-white/70 text-sm">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 size-5" />
              <input
                type="email"
                placeholder="Email"
                value={FormData.email}
                onChange={(e) =>
                  setFormData({ ...FormData, email: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 size-5" />
              <input
                type={ShowPassword ? "text" : "password"}
                placeholder="Password"
                value={FormData.password}
                onChange={(e) =>
                  setFormData({ ...FormData, password: e.target.value })
                }
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!ShowPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70"
              >
                {ShowPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLogingIn}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              {isLogingIn ? (
                <div className="flex justify-center items-center gap-2">
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center">
            <p className="text-white/70">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-pink-300 font-medium hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
