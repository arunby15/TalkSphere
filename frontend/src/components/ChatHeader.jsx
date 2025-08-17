import React from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { X } from "lucide-react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="px-4 py-3 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left: Avatar + User Info */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full ring ring-indigo-400 ring-offset-2 shadow">
              <img
                src={
                  selectedUser.profilePic ||
                  "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                }
                alt={selectedUser.fullName}
              />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-semibold text-gray-800">
              {selectedUser.fullName}
            </h3>
            <p
              className={`text-sm ${
                onlineUsers.includes(selectedUser._id)
                  ? "text-green-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              {onlineUsers.includes(selectedUser._id) ? "● Online" : "○ Offline"}
            </p>
          </div>
        </div>

        {/* Right: Close Button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
