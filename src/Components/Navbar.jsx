import React from 'react';
import { NavLink } from 'react-router'; 
import { MessageSquare, Users, UserPlus, LogOut } from 'lucide-react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const userData = useSelector((state) => state.auth.value);
  console.log(userData);

  return (
    <div className="min-h-screen w-16 sm:w-20 md:w-24 lg:w-64 bg-gradient-to-b from-blue-100 to-white shadow-md z-50 flex flex-col justify-between">
      {/* Logo and Navigation Links */}
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 text-center py-6 hidden lg:block">
          Connect
        </h1>
        <nav className="flex flex-col px-2 space-y-2">
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-blue-700 hover:bg-blue-200'
              }`
            }
          >
            <MessageSquare size={20} />
            <span className="hidden lg:inline">Chat</span>
          </NavLink>

          <NavLink
            to="/group"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-blue-700 hover:bg-blue-200'
              }`
            }
          >
            <Users size={20} />
            <span className="hidden lg:inline">Group</span>
          </NavLink>

          <NavLink
            to="/people"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-blue-700 hover:bg-blue-200'
              }`
            }
          >
            <UserPlus size={20} />
            <span className="hidden lg:inline">People</span>
          </NavLink>
        </nav>
      </div>

      {/* Footer - User Info and Logout */}
      <div className="px-2 py-4 lg:px-4 border-t border-blue-200 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2">
        {/* Avatar */}
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden bg-blue-500 text-white flex items-center justify-center text-base lg:text-lg font-semibold">
          {userData?.avatar ? (
            <img
              src={userData.avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            userData?.fullname?.[0]?.toUpperCase() || 'S'
          )}
        </div>

        {/* User Name (visible only on lg+) */}
        <div className="hidden lg:block text-blue-700 font-medium">
          {userData?.fullname || 'Sonia Akter'}
        </div>

        {/* Logout */}
        <button className="text-red-500 hover:text-red-700 transition-all duration-200 flex items-center justify-center gap-1 text-sm">
          <LogOut size={18} />
          <span className="hidden lg:inline">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
