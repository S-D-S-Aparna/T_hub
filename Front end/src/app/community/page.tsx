"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { 
  Users, Code, Palette, BookOpen, Dumbbell, GraduationCap, 
  Rocket, Briefcase, BrainCircuit, Cloud, Shield, Globe, 
  Library, Trophy, Tent, Heart, MessageCircle, Share2, 
  MoreHorizontal, Image as ImageIcon, Link as LinkIcon, Send, 
  Bot, Calendar, TrendingUp, Bookmark
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_API_URL || "https://t-hub-yxvu.onrender.com"}`;

const CATEGORIES = [
  { id: "all-mentors", name: "All Mentors", icon: Users },
  { id: "tech-upskilling", name: "Tech & Upskilling", icon: Code },
  { id: "creative-design", name: "Creative & Design", icon: Palette },
  { id: "competitive-exams", name: "Competitive Exams", icon: BookOpen },
  { id: "sports-athletics", name: "Sports & Athletics", icon: Dumbbell },
  { id: "higher-education", name: "Higher Education", icon: GraduationCap },
  { id: "entrepreneurship", name: "Entrepreneurship", icon: Rocket },
  { id: "placements-careers", name: "Placements & Careers", icon: Briefcase },
  { id: "ai-data-science", name: "AI & Data Science", icon: BrainCircuit },
  { id: "cloud-computing", name: "Cloud Computing", icon: Cloud },
  { id: "cyber-security", name: "Cyber Security", icon: Shield },
  { id: "web-development", name: "Web Development", icon: Globe },
  { id: "study-groups", name: "Study Groups", icon: Library },
  { id: "hackathons", name: "Hackathons", icon: Trophy },
  { id: "clubs-activities", name: "Clubs & Activities", icon: Tent },
];

const TABS = ["Discussions", "Resources", "Events", "Polls", "Mentors", "Leaderboard"];

export default function CommunityPage() {
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [posts, setPosts] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [mentors, setMentors] = useState<any[]>([]);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [polls, setPolls] = useState<any[]>([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPollQuestion, setNewPollQuestion] = useState("");
  const [newPollOptions, setNewPollOptions] = useState(["", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch Data based on Active Tab
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (activeTab === "Discussions") {
          const res = await axios.get(`${BACKEND_URL}/api/community/posts?category=${activeCategory}`);
          setPosts(res.data.posts || []);
        } else if (activeTab === "Resources") {
          const res = await axios.get(`${BACKEND_URL}/api/resources?category=${activeCategory}`);
          setResources(res.data.resources || []);
        } else if (activeTab === "Events") {
          const res = await axios.get(`${BACKEND_URL}/api/events?category=${activeCategory}`);
          setEvents(res.data.events || []);
        } else if (activeTab === "Mentors") {
          const res = await axios.get(`${BACKEND_URL}/api/users/mentors`);
          setMentors(res.data.mentors || []);
        } else if (activeTab === "Leaderboard") {
          const res = await axios.get(`${BACKEND_URL}/api/community/leaderboard`);
          setLeaderboard(res.data.leaderboard || []);
        } else if (activeTab === "Polls") {
          const res = await axios.get(`${BACKEND_URL}/api/community/polls?category=${activeCategory}`);
          setPolls(res.data.polls || []);
        }
      } catch (error) {
        console.error(`Error fetching ${activeTab}:`, error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [activeCategory, activeTab]);

  // Submit Post
  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("Please login to post");

      const res = await axios.post(`${BACKEND_URL}/api/community/posts`, {
        title: `${activeCategory} Discussion`, // Default title since prompt UI didn't specify separate title field
        content: newPostContent,
        category: activeCategory
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Update feed
      setPosts([res.data.post, ...posts]);
      setNewPostContent("");
      
      // Re-fetch to get author details correctly joined
      const refetch = await axios.get(`${BACKEND_URL}/api/community/posts?category=${activeCategory}`);
      setPosts(refetch.data.posts || []);
      
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    }
  };

  const handleCreatePoll = async () => {
    const validOptions = newPollOptions.filter(o => o.trim() !== "");
    if (!newPollQuestion.trim() || validOptions.length < 2) {
      return alert("Question and at least 2 options are required.");
    }
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("Please login to create a poll");

      await axios.post(`${BACKEND_URL}/api/community/polls`, {
        question: newPollQuestion,
        category: activeCategory,
        options: validOptions
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setNewPollQuestion("");
      setNewPollOptions(["", ""]);
      
      const res = await axios.get(`${BACKEND_URL}/api/community/polls?category=${activeCategory}`);
      setPolls(res.data.polls || []);
    } catch (error) {
      console.error("Error creating poll:", error);
      alert("Failed to create poll. Please try again.");
    }
  };

  const handleVotePoll = async (pollId: number, optionId: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("Please login to vote");

      await axios.post(`${BACKEND_URL}/api/community/polls/${pollId}/vote`, {
        optionId
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const res = await axios.get(`${BACKEND_URL}/api/community/polls?category=${activeCategory}`);
      setPolls(res.data.polls || []);
    } catch (error: any) {
      if (error.response?.status === 400) {
         alert(error.response.data.error || "You have already voted on this poll");
      } else {
         console.error("Error voting:", error);
         alert("Failed to record vote.");
      }
    }
  };

  const currentCategoryData = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0];

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans pt-16 pb-12">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT SIDEBAR - CATEGORIES */}
        <aside className="lg:col-span-3 hidden lg:flex flex-col gap-4">
          <div className="bg-white/70 backdrop-blur-xl rounded-[24px] p-5 shadow-sm border border-indigo-50/50 sticky top-24">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">Categories</h2>
            <div className="space-y-1 max-h-[70vh] overflow-y-auto hide-scrollbar pr-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium ${
                      isActive 
                        ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-sm border border-indigo-100/50" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent"
                    }`}
                  >
                    <Icon className={`w-[18px] h-[18px] ${isActive ? "text-indigo-600" : "text-gray-400"}`} />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* MAIN FEED */}
        <main className="lg:col-span-6 flex flex-col gap-6">
          {/* Banner */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 rounded-[24px] p-8 text-white shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <currentCategoryData.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{currentCategoryData.name}</h1>
                    <p className="text-indigo-100 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span> 1 Online
                      <span className="opacity-50">•</span> 1 Member
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 inline-block">
                  <p className="text-sm font-medium"><span className="opacity-70">Today's Topic:</span> How to break into {currentCategoryData.name.toLowerCase()}?</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-indigo-50 shadow-sm transition-colors">
                  Joined
                </button>
                <Link href="/community/chat" className="bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-indigo-500/50 shadow-sm transition-colors text-center">
                  Live Chat
                </Link>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-1 shadow-sm border border-indigo-50 flex overflow-x-auto hide-scrollbar">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-50/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          {activeTab === "Discussions" && (
            <>
              {/* Create Post */}
              <div className="bg-white rounded-[24px] p-5 shadow-sm border border-indigo-50/50">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0 text-indigo-700 font-bold">
                    {mounted && user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div className="flex-1 flex flex-col gap-3">
                    <textarea 
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      placeholder={`Share something with the ${currentCategoryData.name} community...`}
                      className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 resize-none transition-all"
                      rows={2}
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                          <ImageIcon className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                          <LinkIcon className="w-5 h-5" />
                        </button>
                      </div>
                      <button 
                        onClick={handleCreatePost}
                        disabled={!newPostContent.trim()}
                        className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-md shadow-indigo-200"
                      >
                        Post <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feed */}
              <div className="space-y-4">
                {isLoading ? (
                  <div className="text-center py-10 text-gray-400">Loading posts...</div>
                ) : posts.length === 0 ? (
                  <div className="bg-white rounded-[24px] p-10 text-center shadow-sm border border-indigo-50/50">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-gray-300" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">No posts yet</h3>
                    <p className="text-sm text-gray-500">Be the first to start a discussion in {currentCategoryData.name}!</p>
                  </div>
                ) : (
                  posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-[24px] p-6 shadow-sm border border-indigo-50/50 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 flex items-center justify-center font-bold text-indigo-700">
                            {post.author?.name?.charAt(0) || "U"}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-gray-900 text-sm">{post.author?.name || "Unknown User"}</h4>
                              {post.author?.role === "mentor" && (
                                <span className="bg-indigo-100 text-indigo-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                  Mentor
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                              {new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </p>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:bg-gray-50 p-2 rounded-full transition-colors">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="mb-5">
                        <p className="text-[14px] text-gray-800 leading-relaxed whitespace-pre-line">
                          {post.content}
                        </p>
                      </div>

                      <div className="flex items-center gap-6 border-t border-gray-100 pt-4">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors group">
                          <Heart className="w-[18px] h-[18px] group-hover:fill-current" />
                          <span className="text-xs font-bold">12</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">
                          <MessageCircle className="w-[18px] h-[18px]" />
                          <span className="text-xs font-bold">{post.comments?.length || 0}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 hover:bg-green-50 px-3 py-1.5 rounded-lg transition-colors ml-auto">
                          <Share2 className="w-[18px] h-[18px]" />
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-amber-500 hover:bg-amber-50 px-3 py-1.5 rounded-lg transition-colors">
                          <Bookmark className="w-[18px] h-[18px]" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}

          {activeTab === "Resources" && (
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-indigo-50/50 text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Library className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Community Resources</h3>
              <p className="text-sm text-gray-500 mb-6">Access curated study materials, roadmaps, and guides for {currentCategoryData.name}.</p>
              
              {isLoading ? (
                <div className="text-center py-4 text-gray-400">Loading resources...</div>
              ) : resources.length === 0 ? (
                <p className="text-sm text-gray-400">No resources available for this category yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {resources.map((res) => (
                    <a key={res.id} href={res.url || '#'} target="_blank" rel="noreferrer" className="p-4 border border-gray-100 rounded-xl hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer block">
                      <h4 className="font-bold text-sm text-gray-800 line-clamp-1">{res.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{res.description}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "Events" && (
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-indigo-50/50 text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Upcoming Events</h3>
              <p className="text-sm text-gray-500 mb-6">Join workshops, webinars, and meetups in {currentCategoryData.name}.</p>
              
              {isLoading ? (
                <div className="text-center py-4 text-gray-400">Loading events...</div>
              ) : events.length === 0 ? (
                <p className="text-sm text-gray-400">No events scheduled currently.</p>
              ) : (
                <div className="space-y-3 text-left">
                  {events.map((ev) => (
                    <div key={ev.id} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                      <div className="bg-indigo-50 rounded-lg p-3 text-center min-w-[60px] flex flex-col items-center justify-center">
                        <p className="text-xs font-bold text-indigo-600 uppercase">{new Date(ev.date).toLocaleString('default', { month: 'short' })}</p>
                        <p className="text-lg font-black text-indigo-900">{new Date(ev.date).getDate()}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900">{ev.title}</h4>
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                          <span>{new Date(ev.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span> • <span>{ev.location || 'Online'}</span>
                        </p>
                        <Link href="/events" className="mt-2 inline-block text-xs font-bold text-indigo-600 hover:underline">Register Now</Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "Polls" && (
            <>
              {/* Create Poll */}
              <div className="bg-white rounded-[24px] p-5 shadow-sm border border-indigo-50/50 mb-4">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Create a Poll</h4>
                <input 
                  type="text"
                  value={newPollQuestion}
                  onChange={(e) => setNewPollQuestion(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 mb-3"
                />
                <div className="space-y-2 mb-3">
                  {newPollOptions.map((opt, i) => (
                    <input 
                      key={i}
                      type="text"
                      value={opt}
                      onChange={(e) => {
                        const newOpts = [...newPollOptions];
                        newOpts[i] = e.target.value;
                        setNewPollOptions(newOpts);
                      }}
                      placeholder={`Option ${i + 1}`}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => {
                      if (newPollOptions.length < 4) {
                        setNewPollOptions([...newPollOptions, ""]);
                      }
                    }}
                    className="text-indigo-600 text-xs font-bold hover:underline"
                    disabled={newPollOptions.length >= 4}
                  >
                    + Add Option
                  </button>
                  <button 
                    onClick={handleCreatePoll}
                    className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-sm"
                  >
                    Post Poll
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-[24px] p-8 shadow-sm border border-indigo-50/50 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Community Polls</h3>
                <p className="text-sm text-gray-500 mb-6">Vote and see what others think in {currentCategoryData.name}.</p>
                
                {isLoading ? (
                  <div className="text-center py-4 text-gray-400">Loading polls...</div>
                ) : polls.length === 0 ? (
                  <p className="text-sm text-gray-400">No active polls right now.</p>
                ) : (
                  <div className="space-y-4">
                    {polls.map((poll) => (
                      <div key={poll.id} className="border border-gray-100 rounded-xl p-5 text-left hover:border-indigo-100 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-bold text-sm text-gray-800">{poll.question}</h4>
                          <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded-md">{poll.author?.name || "User"}</span>
                        </div>
                        <div className="space-y-2">
                          {poll.options.map((opt: any, i: number) => (
                            <div 
                              key={i} 
                              onClick={() => handleVotePoll(poll.id, opt.id)}
                              className="relative h-10 rounded-lg bg-gray-50 flex items-center px-4 overflow-hidden cursor-pointer hover:bg-gray-100 group"
                            >
                              <div className="absolute top-0 left-0 h-full bg-indigo-100 transition-all" style={{ width: `${opt.percentage}%` }}></div>
                              <span className="relative z-10 text-xs font-bold text-gray-700 group-hover:text-indigo-700 transition-colors">{opt.text}</span>
                              <span className="relative z-10 ml-auto text-xs font-bold text-gray-500">{opt.percentage}%</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-[10px] text-gray-400 mt-3 text-right">{poll.totalVotes || 0} votes</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === "Mentors" && (
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-indigo-50/50 text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Available Mentors</h3>
              <p className="text-sm text-gray-500 mb-6">Connect with experts in {currentCategoryData.name}.</p>
              
              {isLoading ? (
                <div className="text-center py-4 text-gray-400">Loading mentors...</div>
              ) : mentors.length === 0 ? (
                <p className="text-sm text-gray-400">No mentors available yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mentors.map((mentor) => (
                    <Link href={`/mentors`} key={mentor.id} className="p-4 border border-gray-100 rounded-xl flex items-center gap-4 text-left hover:shadow-md transition-all cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                        {mentor.name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900">{mentor.name}</h4>
                        <p className="text-[10px] text-gray-500 line-clamp-1">{mentor.mentorProfile?.role || 'Mentor'} at {mentor.mentorProfile?.company || 'Company'}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "Leaderboard" && (
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-indigo-50/50 text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Top Contributors</h3>
              <p className="text-sm text-gray-500 mb-6">The most active members in the community.</p>
              
              {isLoading ? (
                <div className="text-center py-4 text-gray-400">Loading leaderboard...</div>
              ) : leaderboard.length === 0 ? (
                <p className="text-sm text-gray-400">No data available.</p>
              ) : (
                <div className="bg-gray-50 rounded-xl overflow-hidden text-left">
                  {leaderboard.map((user, idx) => (
                    <div key={user.id} className="flex items-center gap-4 p-4 border-b border-white last:border-0 hover:bg-indigo-50/50 transition-colors">
                      <span className={`font-black text-lg ${idx === 0 ? 'text-amber-500' : idx === 1 ? 'text-slate-400' : idx === 2 ? 'text-amber-700' : 'text-gray-300'}`}>#{idx + 1}</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-xs text-gray-600 shadow-sm">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-bold text-sm text-gray-800 flex-1">{user.name}</span>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-md">{user.points} pts</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>

        {/* RIGHT SIDEBAR - WIDGETS */}
        <aside className="lg:col-span-3 hidden lg:flex flex-col gap-6">
          {/* About */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-indigo-50/50">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-indigo-500" /> About Community
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Welcome to the {currentCategoryData.name} hub! Connect with peers, find mentors, and stay updated with the latest trends and opportunities.
            </p>
            <div className="flex justify-between items-center text-sm py-3 border-t border-gray-50">
              <span className="text-gray-500">Created</span>
              <span className="font-semibold text-gray-900">Jan 2024</span>
            </div>
            <div className="flex justify-between items-center text-sm py-3 border-t border-gray-50">
              <span className="text-gray-500">Members</span>
              <span className="font-semibold text-gray-900">1</span>
            </div>
          </div>



          {/* Top Contributors */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-indigo-50/50">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-500" /> Top Contributors
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm text-gray-600">
                    U{i}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900">User Name {i}</h4>
                    <p className="text-[10px] text-gray-500">1.2k Reputations</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-indigo-50/50">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-500" /> Upcoming Events
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="bg-indigo-50 rounded-lg p-2 text-center min-w-[48px]">
                  <p className="text-[10px] font-bold text-indigo-600 uppercase">Aug</p>
                  <p className="text-sm font-black text-indigo-900">12</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 line-clamp-2">Mastering {currentCategoryData.name} Workshop</h4>
                  <p className="text-[10px] text-gray-500 mt-1">Online • Free</p>
                </div>
              </div>
            </div>
            <Link href="/events" className="block text-center w-full mt-4 text-indigo-600 text-xs font-bold hover:underline">
              View All Events
            </Link>
          </div>
        </aside>

      </div>
    </div>
  );
}
