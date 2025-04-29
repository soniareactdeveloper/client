import React from 'react';
import { NavLink } from 'react-router';
import { MessageSquare, Users, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="min-h-screen w-16 sm:w-20 md:w-24 lg:w-64 bg-gradient-to-b from-blue-100 to-white shadow-md z-50 flex flex-col">
      {/* Logo/Header */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 text-center py-6 hidden lg:block">
        Connect
      </h1>

      {/* Navigation Links */}
      <nav className="flex-1 px-2 space-y-2">
        {/* Chat Link */}
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

        {/* Group Link */}
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

        {/* People Link */}
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
  );
};

export default Navbar;
