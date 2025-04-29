import React from 'react';
import { Send } from 'lucide-react';

const ChatBox = () => {
  return (
    <div className="flex flex-col h-[100vh] w-full md:w-[500px] border shadow-lg bg-white">
      
      {/* Header */}
      <div className="p-4 border-b bg-gradient-to-r from-blue-100 to-white text-blue-700 font-semibold rounded-t-xl">
        Chat with Aman
      </div>

      {/* Messages Section */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
        {/* Example Message - Left */}
        <div className="flex justify-start">
          <div className="max-w-[70%] px-4 py-2 bg-white text-gray-800 border rounded-lg rounded-bl-none shadow-sm">
            <p className="text-xs font-semibold mb-1">Aman</p>
            <p className="text-sm">Hello! How are you?</p>
          </div>
        </div>

        {/* Example Message - Right */}
        <div className="flex justify-end">
          <div className="max-w-[70%] px-4 py-2 bg-blue-500 text-white rounded-lg rounded-br-none shadow-sm">
            <p className="text-xs font-semibold mb-1">You</p>
            <p className="text-sm">I'm doing great!</p>
          </div>
        </div>
      </div>

      {/* Input Box */}
      <div className="flex items-center gap-4 p-3 border-t bg-white rounded-b-xl">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-l-md outline-none"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
