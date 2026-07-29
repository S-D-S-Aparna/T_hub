"use client";

import { useState, useEffect, useRef } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Send, Users, Circle } from "lucide-react";
import io from "socket.io-client";
import axios from "axios";

// Assume we have a token stored in localStorage for auth
const getToken = () => typeof window !== "undefined" ? localStorage.getItem("token") : null;

// Replace with your actual backend URL or use env var
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_API_URL || "https://t-hub-yxvu.onrender.com"}`;

export default function ChatPage() {
  const [activeRoom, setActiveRoom] = useState("sports");
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const rooms = [
    { id: "sports", name: "Sports", icon: "⚽" },
    { id: "education", name: "Education", icon: "📚" },
    { id: "cocurricular", name: "Co-curricular", icon: "🎨" },
    { id: "competitive", name: "Competitive Exams", icon: "✍️" },
  ];

  // Fetch current user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getToken();
        if (!token) return;
        const res = await axios.get(`${BACKEND_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCurrentUser(res.data.user);
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    };
    fetchUser();
  }, []);

  // Initialize socket connection
  useEffect(() => {
    const newSocket = io(BACKEND_URL);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  // Handle room joining and fetching history
  useEffect(() => {
    if (!socket || !activeRoom) return;

    socket.emit("join_room", activeRoom);

    // Fetch history
    const fetchHistory = async () => {
      try {
        const token = getToken();
        const res = await axios.get(`${BACKEND_URL}/api/chat-history/${activeRoom}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessages(res.data.messages || []);
        scrollToBottom();
      } catch (error) {
        console.error("Failed to fetch chat history", error);
      }
    };
    fetchHistory();

    const handleReceiveMessage = (message: any) => {
      if (message.room === activeRoom) {
        setMessages((prev) => [...prev, message]);
        scrollToBottom();
      }
    };

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [socket, activeRoom]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !socket || !currentUser) return;

    const messageData = {
      room: activeRoom,
      content: newMessage,
      senderId: currentUser.id,
      senderName: currentUser.name,
      senderRole: currentUser.role
    };

    socket.emit("send_message", messageData);
    setNewMessage("");
  };

  return (
    <SportsLayout>
      <div className="max-w-6xl mx-auto h-[80vh] flex flex-col md:flex-row gap-6 pb-6">
        
        {/* Sidebar Rooms */}
        <div className="w-full md:w-1/4 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/community" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
               <Users className="w-5 h-5 text-indigo-500" /> Communities
            </h1>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-2">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                  activeRoom === room.id 
                    ? "bg-indigo-50 border border-indigo-100 shadow-sm" 
                    : "hover:bg-gray-50 border border-transparent"
                }`}
              >
                <div className="text-xl">{room.icon}</div>
                <div className="flex-1">
                  <h3 className={`text-sm font-bold ${activeRoom === room.id ? "text-indigo-900" : "text-gray-700"}`}>
                    {room.name}
                  </h3>
                  <p className="text-[10px] text-gray-400 flex items-center gap-1">
                    <Circle className="w-2 h-2 fill-green-500 text-green-500" /> Live Chat
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="w-full md:w-3/4 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-lg">
              {rooms.find(r => r.id === activeRoom)?.icon}
            </div>
            <div>
              <h2 className="font-bold text-gray-900">{rooms.find(r => r.id === activeRoom)?.name} Community</h2>
              <p className="text-xs text-gray-500">Connect with others in real-time</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                No messages yet. Be the first to say hi!
              </div>
            ) : (
              messages.map((msg, idx) => {
                const isMe = currentUser && msg.senderId === currentUser.id;
                return (
                  <div key={idx} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-medium text-gray-500">
                        {isMe ? "You" : msg.sender?.name || "Unknown User"}
                      </span>
                      {msg.sender?.role && msg.sender.role !== 'student' && (
                        <span className="text-[9px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-full font-bold uppercase">
                          {msg.sender.role}
                        </span>
                      )}
                    </div>
                    <div className={`px-4 py-2.5 rounded-2xl max-w-[80%] text-[13px] ${
                      isMe 
                        ? "bg-indigo-600 text-white rounded-tr-none shadow-sm shadow-indigo-200" 
                        : "bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100"
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
            {currentUser ? (
              <form onSubmit={sendMessage} className="flex items-center gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={`Message ${rooms.find(r => r.id === activeRoom)?.name}...`}
                  className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
                <button 
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="bg-indigo-600 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-indigo-200"
                >
                  <Send className="w-5 h-5 ml-1" />
                </button>
              </form>
            ) : (
              <div className="text-center text-sm text-gray-500 py-2">
                Please log in to participate in the chat.
              </div>
            )}
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
