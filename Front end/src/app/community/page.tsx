"use client";

import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Users, Search, MessageSquare, Image as ImageIcon, Link as LinkIcon, Code, Send, ThumbsUp, MessageCircle, Share2, Star, CheckCircle2, TrendingUp, UserPlus, MoreHorizontal } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

// --- MOCK DATA FOR FALLBACK (Resilience against backend failures) ---
const communitiesList = [
  { name: "Tech & Upskilling", members: "24.8k", featured: true },
  { name: "Education Hub", members: "12.5k" },
  { name: "Sports & Athletics", members: "8.2k" },
  { name: "Competitive Exams", members: "45.1k" },
  { name: "Co-Curricular", members: "5.4k" },
];

const mockMentors = [
  { name: "Sarah Jenkins", role: "AI Specialist", avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "David Chen", role: "Senior Developer", avatar: "https://i.pravatar.cc/150?img=11" },
  { name: "Priya Patel", role: "Product Manager", avatar: "https://i.pravatar.cc/150?img=47" },
];

const mockPeers = [
  { name: "Alex K.", role: "Learning React", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Rahul S.", role: "Data Science Enthusiast", avatar: "https://i.pravatar.cc/150?img=13" },
];

const trendingTopics = [
  "#SystemDesign", "#NextJS14", "#AIInterviews", "#ReactHooks", "#GoogleCloud"
];

type Comment = {
  id: number;
  author: string;
  content: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  author: { name: string; role: string; avatar: string };
  likes: number;
  comments: Comment[];
  isLikedByMe?: boolean;
};

const initialMockPosts: Post[] = [
  {
    id: 1,
    title: "Best resources for learning System Design in 2024?",
    content: "Hi everyone! I'm prepping for some senior backend roles and struggling to find structured resources for System Design. I've read DDIA but looking for more practical case studies (like how Uber or Discord handles scale). Any recommendations?",
    category: "Tech & Upskilling",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    author: { name: "Jason Li", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?img=33" },
    likes: 24,
    comments: [{ id: 101, author: "Sarah Jenkins", content: "Check out the ByteByteGo newsletter and Alex Xu's books. They are fantastic for visual learners!" }]
  },
  {
    id: 2,
    title: "My React App is finally live! 🚀",
    content: "After 3 months of learning and debugging, I just deployed my first full-stack application using Next.js and Tailwind. The learning curve was steep but definitely worth it. Happy to share my journey if anyone is starting out!",
    category: "Tech & Upskilling",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    author: { name: "Emma Watson", role: "Frontend Student", avatar: "https://i.pravatar.cc/150?img=44" },
    likes: 156,
    comments: [
      { id: 201, author: "David Chen", content: "Huge congratulations Emma! Next.js is a great choice." },
      { id: 202, author: "Alex K.", content: "Could you share what tutorial you followed?" }
    ]
  },
  {
    id: 3,
    title: "UPSC Prelims Strategy - Last 3 Months",
    content: "For those giving the attempt this year, how are you allocating time between mock tests and revision? I feel like I'm falling behind on current affairs.",
    category: "Competitive Exams",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    author: { name: "Ananya S.", role: "Aspirant", avatar: "https://i.pravatar.cc/150?img=9" },
    likes: 45,
    comments: []
  }
];

export default function CommunityHub() {
  const [activeCommunity, setActiveCommunity] = useState("Tech & Upskilling");
  const [activeTab, setActiveTab] = useState("Discussions");
  const [posts, setPosts] = useState<Post[]>(initialMockPosts);
  const [newPostContent, setNewPostContent] = useState("");
  const { token, user } = useAuth();

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      title: newPostContent.split('\n')[0].slice(0, 50) + (newPostContent.length > 50 ? "..." : ""),
      content: newPostContent,
      category: activeCommunity,
      createdAt: new Date().toISOString(),
      author: { 
        name: user?.name || "Anonymous Learner", 
        role: "Student", 
        avatar: "https://i.pravatar.cc/150?img=1" 
      },
      likes: 0,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          likes: p.isLikedByMe ? p.likes - 1 : p.likes + 1,
          isLikedByMe: !p.isLikedByMe
        };
      }
      return p;
    }));
  };

  const filteredPosts = posts.filter(post => post.category === activeCommunity || !post.category);

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row gap-6 mb-8 h-[calc(100vh-8rem)]">
        
        {/* --- LEFT SIDEBAR (Modules) --- */}
        <div className="w-full lg:w-64 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden flex-shrink-0 hidden md:flex">
          <div className="p-5 border-b border-gray-100 bg-gray-50/50">
            <h2 className="font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#4D28E0]" /> Communities
            </h2>
          </div>
          <div className="p-3 overflow-y-auto flex-1 space-y-1 custom-scrollbar">
            {communitiesList.map((c, i) => {
              const isActive = activeCommunity === c.name;
              return (
                <button 
                  key={i} 
                  onClick={() => setActiveCommunity(c.name)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl transition-all flex items-center justify-between group ${
                    isActive 
                      ? 'bg-[#4D28E0] shadow-md' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold text-[13px] ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-[#4D28E0]'}`}>
                      {c.name}
                    </span>
                  </div>
                  {c.featured && (
                    <Star className={`w-3.5 h-3.5 ${isActive ? 'text-yellow-300 fill-yellow-300' : 'text-yellow-400 fill-yellow-400'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- MAIN CONTENT (Feed) --- */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          
          {/* Header */}
          <div className="bg-white rounded-t-2xl border-x border-t border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10 shadow-sm">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">{activeCommunity}</h1>
              <div className="flex items-center gap-2 mt-1">
                {activeCommunity === "Tech & Upskilling" && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-500 to-indigo-500 px-2 py-0.5 rounded-md">
                    Featured
                  </span>
                )}
                <span className="text-xs font-medium text-gray-500">
                  {communitiesList.find(c => c.name === activeCommunity)?.members} Members
                </span>
              </div>
            </div>
            
            <div className="flex bg-gray-100 p-1 rounded-xl">
               {["Discussions", "Mentors", "Events"].map(tab => (
                 <button 
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                     activeTab === tab 
                     ? 'bg-white text-[#4D28E0] shadow-sm' 
                     : 'text-gray-500 hover:text-gray-700'
                   }`}
                 >
                   {tab}
                 </button>
               ))}
            </div>
          </div>

          {/* Scrollable Feed Area */}
          <div className="flex-1 overflow-y-auto bg-gray-50/50 border-x border-b border-gray-100 rounded-b-2xl p-4 lg:p-6 custom-scrollbar flex flex-col xl:flex-row gap-6">
            
            {/* Feed Column */}
            <div className="flex-1 max-w-3xl mx-auto xl:mx-0 w-full space-y-6">
              
              {/* Rich Composer */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex gap-3">
                   <img src="https://i.pravatar.cc/150?img=1" alt="You" className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                   <div className="flex-1">
                     <textarea 
                       placeholder={`Share your thoughts, ask a question in ${activeCommunity}...`}
                       className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4D28E0]/20 focus:border-[#4D28E0] resize-none transition-all"
                       rows={3}
                       value={newPostContent}
                       onChange={(e) => setNewPostContent(e.target.value)}
                     />
                     <div className="flex items-center justify-between mt-3">
                        <div className="flex gap-1">
                          <button className="p-2 text-gray-400 hover:text-[#4D28E0] hover:bg-indigo-50 rounded-lg transition-colors">
                            <ImageIcon className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-[#4D28E0] hover:bg-indigo-50 rounded-lg transition-colors">
                            <LinkIcon className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-[#4D28E0] hover:bg-indigo-50 rounded-lg transition-colors">
                            <Code className="w-5 h-5" />
                          </button>
                        </div>
                        <button 
                          onClick={handleCreatePost}
                          disabled={!newPostContent.trim()}
                          className="bg-[#4D28E0] hover:bg-[#3b1fa8] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-2 px-6 rounded-xl transition-all shadow-sm flex items-center gap-2 text-sm"
                        >
                          Post <Send className="w-4 h-4" />
                        </button>
                     </div>
                   </div>
                </div>
              </div>

              {/* Posts */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-700">No discussions yet</h3>
                  <p className="text-gray-500 text-sm mt-1">Be the first to start a conversation in this community!</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    
                    {/* Post Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border border-gray-100" />
                        <div>
                          <h4 className="font-bold text-gray-900 text-[15px] hover:underline cursor-pointer">{post.author.name}</h4>
                          <p className="text-[13px] text-gray-500">
                            {post.author.role} • {new Date(post.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 p-1">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Post Content */}
                    <h3 className="font-extrabold text-gray-900 text-lg mb-2">{post.title}</h3>
                    <p className="text-[15px] text-gray-700 mb-5 leading-relaxed whitespace-pre-wrap">
                      {post.content}
                    </p>
                    
                    {/* Post Stats & Actions */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                       <div className="flex items-center gap-1 sm:gap-4">
                         <button 
                           onClick={() => handleLike(post.id)}
                           className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${post.isLikedByMe ? 'text-[#4D28E0] bg-indigo-50' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}
                         >
                           <ThumbsUp className={`w-4 h-4 ${post.isLikedByMe ? 'fill-[#4D28E0]' : ''}`} /> 
                           {post.likes} <span className="hidden sm:inline">Likes</span>
                         </button>
                         <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 text-sm font-semibold transition-colors">
                           <MessageCircle className="w-4 h-4" /> 
                           {post.comments.length} <span className="hidden sm:inline">Comments</span>
                         </button>
                       </div>
                       <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 text-sm font-semibold transition-colors">
                         <Share2 className="w-4 h-4" /> <span className="hidden sm:inline">Share</span>
                       </button>
                    </div>

                    {/* Quick preview of comments if any */}
                    {post.comments.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-50 space-y-3">
                        {post.comments.map(c => (
                          <div key={c.id} className="bg-gray-50 rounded-xl p-3 text-sm">
                            <span className="font-bold text-gray-900 mr-2">{c.author}</span>
                            <span className="text-gray-700">{c.content}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* --- RIGHT SIDEBAR (Widgets) --- */}
            <div className="w-full xl:w-72 space-y-6 flex-shrink-0">
              
              {/* Trending Topics */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-[15px] mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#4D28E0]" /> Trending Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map(tag => (
                    <span key={tag} className="bg-gray-100 hover:bg-indigo-50 hover:text-[#4D28E0] cursor-pointer text-gray-600 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mentors Widget */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-[15px] mb-4">Top Mentors</h3>
                <div className="space-y-4">
                  {mockMentors.map((mentor, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <img src={mentor.avatar} alt={mentor.name} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm group-hover:text-[#4D28E0] transition-colors cursor-pointer">{mentor.name}</p>
                          <p className="text-[11px] font-medium text-gray-500">{mentor.role}</p>
                        </div>
                      </div>
                      <button className="text-[#4D28E0] bg-indigo-50 hover:bg-[#4D28E0] hover:text-white p-1.5 rounded-lg transition-colors">
                        <UserPlus className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Peers Widget */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-[15px] mb-4">Peers to Connect</h3>
                <div className="space-y-4">
                  {mockPeers.map((peer, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <img src={peer.avatar} alt={peer.name} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm group-hover:text-[#4D28E0] transition-colors cursor-pointer">{peer.name}</p>
                          <p className="text-[11px] font-medium text-gray-500">{peer.role}</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-[#4D28E0] bg-gray-50 hover:bg-indigo-50 p-1.5 rounded-lg transition-colors">
                        <UserPlus className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}</style>
    </MainLayout>
  );
}
