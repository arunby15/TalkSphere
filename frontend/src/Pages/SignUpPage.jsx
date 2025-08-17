import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  MessageSquare,
  Loader2,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  // Validation
  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    )
      return toast.error("Enter a valid email format.");
    if (!formData.password) return toast.error("Password is required!");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) {
      await signup(formData);
    }
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
            Create Your Account ✨
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Join our vibrant community today! Sign up to connect, share, and
            explore together.
          </p>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 rounded-3xl"></div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-6 sm:p-12">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl p-10 space-y-8 border border-white/30">
          {/* Heading */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">Sign Up 🚀</h2>
            <p className="text-white/70 text-sm">
              Create your account to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 size-5" />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 size-5" />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 size-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70"
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSigningUp}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              {isSigningUp ? (
                <div className="flex justify-center items-center gap-2">
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center">
            <p className="text-white/70">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-pink-300 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
