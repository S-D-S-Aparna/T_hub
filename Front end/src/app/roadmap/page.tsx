"use client";

import { useState, useEffect, useCallback } from "react";
import RoadmapLayout from "@/components/layout/RoadmapLayout";
import { Sparkles, ArrowRight, Target, Clock, CheckCircle2, Circle, BookOpen, Briefcase, GraduationCap, Download, Link2, Users } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

interface Resource {
  name: string;
  type: 'Course' | 'Certification' | 'Book';
}

interface RichMilestone {
  id: string;
  title: string;
  duration: string;
  description: string;
  skills: string[];
  resources: Resource[];
  projects: string[];
  tasks: string[];
  completed?: boolean;
}

interface MentorSuggestion {
  name: string;
  role: string;
  expertise: string;
}

interface RichRoadmap {
  id: number;
  goal: string;
  education: string;
  timeline: string;
  skills: string;
  createdAt: string;
  milestones: string; // JSON string of RichMilestone[]
  mentors: string;    // JSON string of MentorSuggestion[]
}

export default function RoadmapPage() {
  const { token, user } = useAuth();
  
  // Form State
  const [goal, setGoal] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [timeline, setTimeline] = useState("6 Months");
  
  const [loading, setLoading] = useState(false);
  const [roadmaps, setRoadmaps] = useState<RichRoadmap[]>([]);
  const [activeRoadmap, setActiveRoadmap] = useState<RichRoadmap | null>(null);

  // Load from LocalStorage
  const fetchRoadmaps = useCallback(() => {
    if (!token) return;
    try {
      const saved = localStorage.getItem(`be_you_rich_roadmaps_${user?.id || 'default'}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        setRoadmaps(parsed);
        if (parsed.length > 0) {
          setActiveRoadmap(parsed[0]);
        }
      }
    } catch (err) {
      console.error("Failed to load roadmaps from local storage", err);
    }
  }, [token, user]);

  useEffect(() => {
    fetchRoadmaps();
  }, [fetchRoadmaps]);

  const saveRoadmaps = (newRoadmaps: RichRoadmap[]) => {
    setRoadmaps(newRoadmaps);
    try {
      localStorage.setItem(`be_you_rich_roadmaps_${user?.id || 'default'}`, JSON.stringify(newRoadmaps));
    } catch (err) {
      console.error("Failed to save roadmaps to local storage", err);
    }
  };

  // Dynamic Rich Mock Generator
  const generateMockData = (goalText: string, timelineText: string) => {
    const keyword = goalText.toLowerCase();
    let milestones: RichMilestone[] = [];
    let mentors: MentorSuggestion[] = [];

    if (keyword.includes("data") || keyword.includes("analysis") || keyword.includes("ml")) {
      milestones = [
        {
          id: "m1", title: "Foundations of Data & Python", duration: "Weeks 1-4",
          description: "Master the basics of programming and data manipulation. This is the bedrock of your career.",
          skills: ["Python", "Pandas", "NumPy", "Statistics"],
          resources: [
            { name: "Google Data Analytics Certificate (Coursera)", type: "Certification" },
            { name: "Python for Data Analysis by Wes McKinney", type: "Book" }
          ],
          projects: ["Analyze a public CSV dataset (e.g., Titanic or Housing prices) and clean missing values."],
          tasks: ["Install Python & Jupyter", "Learn basic Git commands", "Write 5 data cleaning scripts"]
        },
        {
          id: "m2", title: "Databases & SQL Mastery", duration: "Weeks 5-8",
          description: "Data lives in databases. You must become fluent in extracting and transforming it using SQL.",
          skills: ["SQL", "PostgreSQL", "Database Design", "Joins"],
          resources: [
            { name: "Complete SQL Bootcamp (Udemy)", type: "Course" }
          ],
          projects: ["Design a relational database schema for an e-commerce store and write complex reporting queries."],
          tasks: ["Practice LeetCode SQL problems", "Connect Python to a local SQL database"]
        },
        {
          id: "m3", title: "Data Visualization & Storytelling", duration: "Weeks 9-12",
          description: "Learn to communicate your findings visually. A data analyst must be a good storyteller.",
          skills: ["Tableau", "PowerBI", "Matplotlib", "Seaborn"],
          resources: [
            { name: "Storytelling with Data (Book)", type: "Book" }
          ],
          projects: ["Build an interactive dashboard tracking global COVID-19 data or climate change trends."],
          tasks: ["Create 3 different chart types for the same dataset", "Present your dashboard to a peer"]
        }
      ];
      mentors = [
        { name: "Ananya Sharma", role: "Senior Data Scientist at Google", expertise: "Machine Learning, Python" },
        { name: "Rahul Verma", role: "Lead Data Analyst at Flipkart", expertise: "SQL, Tableau, Business Intelligence" }
      ];
    } else if (keyword.includes("design") || keyword.includes("ux") || keyword.includes("ui")) {
      milestones = [
        {
          id: "m1", title: "UX Fundamentals & Research", duration: "Weeks 1-4",
          description: "Understand the psychology of users. Design isn't just how it looks, it's how it works.",
          skills: ["User Research", "Wireframing", "Empathy Mapping", "Figma Basics"],
          resources: [
            { name: "Google UX Design Certificate", type: "Certification" },
            { name: "The Design of Everyday Things", type: "Book" }
          ],
          projects: ["Conduct 3 user interviews for a hypothetical local bakery app and create user personas."],
          tasks: ["Read 5 UX case studies", "Redesign a bad UI you found online in low-fidelity"]
        },
        {
          id: "m2", title: "UI Design & Prototyping", duration: "Weeks 5-8",
          description: "Bring your wireframes to life with high-fidelity designs and interactive prototypes.",
          skills: ["Figma Mastery", "Color Theory", "Typography", "Prototyping"],
          resources: [
            { name: "Figma UI UX Design Essentials (Udemy)", type: "Course" }
          ],
          projects: ["Design a complete 5-screen flow for a mobile banking app with interactive animations."],
          tasks: ["Create a mini design system (buttons, inputs, colors)", "Replicate the UI of Spotify"]
        }
      ];
      mentors = [
        { name: "Priya Patel", role: "Product Designer at CRED", expertise: "UI/UX, Prototyping, Design Systems" }
      ];
    } else {
      // Generic
      milestones = [
        {
          id: "m1", title: "Phase 1: Skill Acquisition", duration: "First 25%",
          description: "Focus purely on learning the fundamental skills required for this career path.",
          skills: ["Core Competency 1", "Core Competency 2", "Industry Tools"],
          resources: [{ name: `Introduction to ${goalText}`, type: "Course" }],
          projects: ["Build a basic foundational project applying core concepts."],
          tasks: ["Research industry standards", "Set up your learning environment"]
        },
        {
          id: "m2", title: "Phase 2: Advanced Application", duration: "Middle 50%",
          description: "Move beyond tutorials. Build complex things and solve hard problems.",
          skills: ["Advanced Technique 1", "Problem Solving", "Collaboration"],
          resources: [{ name: `Advanced ${goalText} Masterclass`, type: "Certification" }],
          projects: ["Develop a capstone project that solves a real-world problem in this domain."],
          tasks: ["Find an open-source project to contribute to", "Share your work online"]
        },
        {
          id: "m3", title: "Phase 3: Career Readiness", duration: "Final 25%",
          description: "Prepare for the job market. Polish your portfolio and start interviewing.",
          skills: ["Interview Prep", "Communication", "Resume Writing"],
          resources: [{ name: "Tech Interview Pro", type: "Course" }],
          projects: ["Deploy your portfolio website showcasing your best 3 projects."],
          tasks: ["Conduct 2 mock interviews", "Optimize LinkedIn profile"]
        }
      ];
      mentors = [
        { name: "Vikram Singh", role: `Senior Professional`, expertise: "Industry Insights, Career Growth" }
      ];
    }

    return { milestones, mentors };
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal) return;

    setLoading(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const { milestones, mentors } = generateMockData(goal, timeline);
      
      const newRoadmap: RichRoadmap = {
        id: Date.now(),
        goal,
        education: education || "Not specified",
        skills: skills || "Beginner",
        timeline,
        createdAt: new Date().toLocaleDateString(),
        milestones: JSON.stringify(milestones),
        mentors: JSON.stringify(mentors)
      };

      const updatedRoadmaps = [newRoadmap, ...roadmaps];
      saveRoadmaps(updatedRoadmaps);
      setActiveRoadmap(newRoadmap);
      
      // Reset form briefly
      setGoal("");
      setEducation("");
      setSkills("");
      setLoading(false);
      
      // Scroll to top to see roadmap
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const toggleMilestone = (roadmapId: number, milestoneId: string) => {
    const updatedRoadmaps = roadmaps.map(rm => {
      if (rm.id === roadmapId) {
        const ms: RichMilestone[] = JSON.parse(rm.milestones);
        const updatedMs = ms.map(m => m.id === milestoneId ? { ...m, completed: !m.completed } : m);
        return { ...rm, milestones: JSON.stringify(updatedMs) };
      }
      return rm;
    });
    
    saveRoadmaps(updatedRoadmaps);
    if (activeRoadmap?.id === roadmapId) {
      setActiveRoadmap(updatedRoadmaps.find(r => r.id === roadmapId) || null);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <RoadmapLayout>
      <div className="max-w-5xl mx-auto">
        
        {/* Form Section (Hidden when printing) */}
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white mb-8 shadow-2xl relative overflow-hidden print:hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-md border border-white/10">
                <Sparkles className="w-4 h-4 text-yellow-300" /> AI Career Strategist
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">Design Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Future Path</span></h1>
              <p className="text-indigo-100 mb-8 text-lg max-w-lg leading-relaxed">
                Enter your background and ambitions. Our AI will craft a hyper-personalized roadmap with milestones, courses, projects, and expert mentor recommendations.
              </p>
            </div>

            <div className="bg-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-inner">
              <form onSubmit={handleGenerate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-indigo-100 mb-1">Career Goal</label>
                  <div className="relative">
                    <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-300" />
                    <input
                      type="text"
                      required
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      placeholder="e.g. Data Scientist, UI/UX Designer"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:bg-white/20 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                      disabled={loading}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-indigo-100 mb-1">Current Ed.</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-300" />
                      <input
                        type="text"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        placeholder="e.g. B.Tech CS"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:bg-white/20 focus:ring-2 focus:ring-purple-400 outline-none text-sm transition-all"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-indigo-100 mb-1">Timeline</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-300" />
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-indigo-900 focus:ring-2 focus:ring-purple-400 outline-none text-sm transition-all appearance-none"
                        disabled={loading}
                      >
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="1 Year">1 Year</option>
                        <option value="2 Years">2 Years</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-indigo-100 mb-1">Current Skills</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-300" />
                    <input
                      type="text"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      placeholder="e.g. HTML, Basic Python"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:bg-white/20 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                      disabled={loading}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !goal}
                  className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3.5 rounded-xl font-bold hover:from-pink-400 hover:to-purple-400 transition-all shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> Crafting Roadmap...</>
                  ) : (
                    <>Generate Roadmap <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {!activeRoadmap && !loading && (
          <div className="bg-white border border-gray-100 rounded-3xl p-16 text-center text-gray-400 shadow-sm print:hidden">
            <Target className="w-16 h-16 mx-auto mb-4 text-indigo-100" />
            <p className="text-lg">Your journey awaits. Fill out the form above to generate your roadmap.</p>
          </div>
        )}

        {/* Generated Roadmap Display */}
        {activeRoadmap && !loading && (() => {
          let milestones: RichMilestone[] = [];
          let mentors: MentorSuggestion[] = [];
          try {
            milestones = JSON.parse(activeRoadmap.milestones);
            mentors = JSON.parse(activeRoadmap.mentors);
          } catch (e) {
            console.error("Parse error", e);
          }

          const completedCount = milestones.filter(m => m.completed).length;
          const progress = Math.round((completedCount / milestones.length) * 100) || 0;

          return (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden print:shadow-none print:border-none print:m-0 print:p-0">
              
              {/* Roadmap Header */}
              <div className="bg-indigo-50/50 p-8 md:p-10 border-b border-gray-100 relative">
                <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 relative z-10">
                  <div>
                    <div className="text-indigo-600 font-bold tracking-wider text-sm mb-2 uppercase flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> Personalized Plan
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">{activeRoadmap.goal}</h2>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="bg-white px-3 py-1 rounded-md border border-gray-200 shadow-sm flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> {activeRoadmap.timeline}</span>
                      <span className="bg-white px-3 py-1 rounded-md border border-gray-200 shadow-sm flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5"/> {activeRoadmap.education}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 print:hidden">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-500 mb-1">Progress</div>
                      <div className="text-2xl font-bold text-indigo-700">{progress}%</div>
                    </div>
                    <button 
                      onClick={handlePrint}
                      className="bg-white border border-gray-200 text-gray-700 p-3 rounded-xl hover:bg-gray-50 hover:text-indigo-600 transition-colors shadow-sm flex items-center gap-2"
                      title="Download PDF"
                    >
                      <Download className="w-5 h-5" />
                      <span className="font-medium">Download PDF</span>
                    </button>
                  </div>
                </div>
                
                {/* Progress bar line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gray-200 w-full print:hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                </div>
              </div>

              <div className="p-8 md:p-10 grid md:grid-cols-3 gap-12">
                
                {/* Main Timeline */}
                <div className="md:col-span-2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-100 before:via-purple-100 before:to-transparent">
                  {milestones.map((m) => (
                    <div key={m.id} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                      
                      {/* Timeline Node Icon */}
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors ${m.completed ? 'bg-green-500 text-white' : 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200'}`}>
                        {m.completed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-3 h-3 fill-current" />}
                      </div>

                      {/* Milestone Card */}
                      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{m.title}</h3>
                          <button 
                            onClick={() => toggleMilestone(activeRoadmap.id, m.id)}
                            className={`p-1.5 rounded-md border print:hidden transition-colors ${m.completed ? 'bg-green-50 border-green-200 text-green-600' : 'bg-gray-50 border-gray-200 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50'}`}
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="text-xs font-semibold text-purple-600 mb-3 bg-purple-50 inline-block px-2 py-1 rounded">{m.duration}</div>
                        
                        <p className="text-gray-600 text-sm mb-5 leading-relaxed">{m.description}</p>
                        
                        {/* Skills */}
                        <div className="mb-4">
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Skills</div>
                          <div className="flex flex-wrap gap-2">
                            {m.skills.map(s => (
                              <span key={s} className="px-2 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-xs rounded-md">{s}</span>
                            ))}
                          </div>
                        </div>

                        {/* Resources */}
                        {m.resources.length > 0 && (
                          <div className="mb-4">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Recommended Courses</div>
                            <ul className="space-y-2 text-sm text-gray-700">
                              {m.resources.map((r, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <BookOpen className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                                  <span>{r.name} <span className="text-gray-400 text-xs">({r.type})</span></span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Projects/Tasks */}
                        {m.projects.length > 0 && (
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Milestone Project</div>
                            <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100/50 text-sm text-indigo-900 flex items-start gap-2">
                              <Target className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                              <p>{m.projects[0]}</p>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  ))}
                </div>

                {/* Sidebar (Mentors & Extra Info) */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-b from-purple-50 to-white border border-purple-100 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-purple-600" /> Recommended Mentors
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">Connect with these experts on Be You to accelerate your journey.</p>
                    
                    <div className="space-y-4">
                      {mentors.map((mentor, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold shrink-0">
                            {mentor.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-sm">{mentor.name}</div>
                            <div className="text-xs text-gray-500 mb-1">{mentor.role}</div>
                            <div className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded inline-block">{mentor.expertise.split(',')[0]}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link href="/mentors" className="mt-4 w-full bg-white border border-purple-200 text-purple-700 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors flex items-center justify-center gap-1 print:hidden">
                      View Mentor Hub <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl text-sm text-blue-900">
                    <h4 className="font-bold flex items-center gap-2 mb-2"><Link2 className="w-4 h-4" /> Pro Tip</h4>
                    <p>Don't just watch tutorials. The best way to learn is by building. Use the community hub to find peers to build projects with!</p>
                  </div>
                </div>
                
              </div>
            </div>
          );
        })()}

      </div>
    </RoadmapLayout>
  );
}
