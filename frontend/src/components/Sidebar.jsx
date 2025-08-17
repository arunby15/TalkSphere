import React, { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { User, Users } from "lucide-react";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { useAuthStore } from "../store/useAuthStore";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-24 lg:w-72 border-r border-base-300 flex flex-col bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-500 text-white transition-all duration-300 shadow-lg">
      {/* Header */}
      <div className="border-b border-white/20 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-semibold hidden lg:block text-lg tracking-wide">
            Contacts
          </span>
        </div>
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm checkbox-primary"
            />
            Show online only
          </label>
          <span className="text-xs opacity-80">
            ({onlineUsers.length - 1} online)
          </span>
        </div>
      </div>

      {/* User List */}
      <div className="overflow-y-auto w-full py-3 px-2 space-y-2">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 
            ${
              selectedUser?._id === user._id
                ? "bg-white/20 shadow-md"
                : "hover:bg-white/10"
            }`}
          >
            {/* Avatar */}
            <div className="relative mx-auto lg:mx-0">
              <img
                src={
                  user.profilePic ||
                  "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                }
                alt={user.fullName}
                className="size-12 object-cover rounded-full border-2 border-white/30"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-400 rounded-full ring-2 ring-white" />
              )}
            </div>

            {/* User Info (Visible on larger screens) */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-semibold truncate">{user.fullName}</div>
              <div
                className={`text-sm ${
                  onlineUsers.includes(user._id)
                    ? "text-green-300"
                    : "text-gray-300"
                }`}
              >
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-gray-200 py-4 text-sm">
            No users found
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
