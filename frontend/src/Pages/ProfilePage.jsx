import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, User, Mail, Calendar, ShieldCheck } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdateingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      <div className="container mx-auto px-4 pt-20 max-w-5xl flex-grow">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden border border-white/20">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-center">
            <h1 className="text-3xl font-bold text-white">My Profile</h1>
            <p className="text-slate-100 mt-1 text-sm">
              Manage your personal information
            </p>
          </div>

          {/* Avatar Section */}
          <div className="flex flex-col items-center px-6 py-8">
            <div className="relative group">
              <img
                src={
                  selectedImg ||
                  authUser.profilePic ||
                  "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-2 right-2 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full cursor-pointer shadow-md transition-transform transform hover:scale-110 ${
                  isUpdateingProfile
                    ? "animate-pulse pointer-events-none"
                    : ""
                }`}
              >
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdateingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-slate-400 mt-3">
              {isUpdateingProfile
                ? "Uploading..."
                : "Click the camera icon to change your photo"}
            </p>
          </div>

          {/* Profile Details */}
          <div className="px-6 pb-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-1">
                  <User className="w-4 h-4" />
                  Full Name
                </label>
                <p className="px-4 py-2.5 bg-slate-800 text-white rounded-lg border border-slate-700">
                  {authUser?.fullName}
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-1">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <p className="px-4 py-2.5 bg-slate-800 text-white rounded-lg border border-slate-700">
                  {authUser?.email}
                </p>
              </div>
            </div>

            {/* Account Information */}
            <div className="bg-slate-800/70 rounded-xl p-5 border border-slate-700">
              <h2 className="text-lg font-semibold text-white mb-4">
                Account Information
              </h2>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    Member Since
                  </span>
                  <span>{authUser.createdAt?.split("T")[0]}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    Account Status
                  </span>
                  <span className="text-green-400 font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ProfilePage;
