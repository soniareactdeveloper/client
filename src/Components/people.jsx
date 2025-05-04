import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Plus, Send } from 'lucide-react';
import { chatService } from '../service/api';

const People = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [email, setEmail] = useState('');
  const [user, setUser] = useState([]);
  const userData = useSelector((state) => state.auth.value);

  useEffect(() => {
    (async () => {
      try {
        const res = await chatService.chatList();
        setUser(res.conversations);
        console.log(res.conversations);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Function to format the time
  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="w-full max-w-md mx-auto lg:ml-0 p-4 sm:px-6 md:px-8 lg:px-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">Chat List</h2>
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
            onClick={() => {}}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
          >
            <Send size={16} />
          </button>
        </div>
      )}

      {/* User List */}
      <div className="space-y-4">
        {user.map((item) =>
          item.creator._id === userData._id ? (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg hover:shadow-md transition bg-blue-50"
            >
              <img
                src={item.participent.avatar || `https://ui-avatars.com/api/?name=${item.participent.fullname}`}
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.participent.fullname}</h3>
                <p className="text-sm text-gray-500">{item.lastMessage.content}</p>
              </div>
              <span className="text-sm text-gray-400 sm:ml-auto">
                {formatTime(item.lastMessage.updatedAt)}
              </span>
            </div>
          ) : (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg hover:shadow-md transition"
            >
              <img
                src={item.creator.avatar || `https://ui-avatars.com/api/?name=${item.creator.fullname}`}
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.creator.fullname}</h3>
                <p className="text-sm text-gray-500">{item.lastMessage.content}</p>
              </div>
              <span className="text-sm text-gray-400 sm:ml-auto">
                {formatTime(item.lastMessage.updatedAt)}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default People;
