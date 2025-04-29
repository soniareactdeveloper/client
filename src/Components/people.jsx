import React, { useState } from 'react';
import { Plus, Send } from 'lucide-react';

const People = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [email, setEmail] = useState('');

  const users = [
    {
      id: 1,
      name: 'Sonia Akter',
      avatar: 'https://i.pravatar.cc/150?img=1',
      lastMessage: 'See you at 5!',
      lastDate: 'April 22, 2025',
    },
    {
      id: 2,
      name: 'Aman Raj',
      avatar: 'https://i.pravatar.cc/150?img=2',
      lastMessage: 'Let’s catch up tomorrow!',
      lastDate: 'April 21, 2025',
    },
  ];

  const handleAdd = () => {
    if (email) {
      console.log('Add user with email:', email);
      setEmail('');
      setShowSearch(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto lg:ml-0 p-4 sm:px-6 md:px-8 lg:px-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">ChatList</h2>
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="text-blue-600 hover:text-blue-800"
        >
          <Plus size={24} />
        </button>
      </div>

      {/* Search Box */}
      {showSearch && (
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="email"
            placeholder="Enter user email"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
          >
            <Send size={16} />
          </button>
        </div>
      )}

      {/* User List */}
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg hover:shadow-md transition"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.lastMessage}</p>
            </div>
            <span className="text-sm text-gray-400 sm:ml-auto">{user.lastDate}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
