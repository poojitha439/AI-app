import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  BookOpen, 
  CheckCircle, 
  MessageSquare, 
  Shield, 
  Zap, 
  Award, 
  Menu, 
  X,
  ArrowRight,
  Star,
  BrainCircuit,
  GraduationCap,
  Users,
  Mail,
  Lock,
  User,
  Github,
  Chrome,
  ArrowLeft,
  Search,
  Settings,
  LogOut,
  Send,
  Sparkles,
  ChevronRight
} from 'lucide-react';

type View = 'landing' | 'login' | 'signup' | 'dashboard';

const App = () => {
  const [view, setView] = useState<View>('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuth = (e: React.FormEvent, type: 'login' | 'signup') => {
    e.preventDefault();
    // Simulate auth
    if (type === 'signup' && !userName) setUserName('Student');
    setView('dashboard');
    window.scrollTo(0, 0);
  };

  const features = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-indigo-600" />,
      title: "Adaptive Learning",
      description: "Our AI adjusts its teaching style and pace based on your unique learning profile and performance."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
      title: "24/7 Instant Support",
      description: "Get immediate help with any subject, from complex calculus to literary analysis, whenever you need it."
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Safe Environment",
      description: "A secure, distraction-free platform designed specifically for students and educational growth."
    },
    {
      icon: <Award className="w-6 h-6 text-indigo-600" />,
      title: "Proven Results",
      description: "92% of our students report higher confidence and improved grades within the first month of use."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: "Interactive Lessons",
      description: "Boring textbooks are over. Engage with dynamic simulations, visualizations, and live coding."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Parent Dashboard",
      description: "Detailed insights and progress reports for parents to stay informed about their child's journey."
    }
  ];

  const LandingView = () => (
    <div className="animate-in fade-in duration-700">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
            <div className="bg-indigo-600 p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">Lumina<span className="text-indigo-600 italic">AI</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-semibold text-slate-500">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Success</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setView('login')} className="px-5 py-2 text-slate-600 hover:text-indigo-600 font-semibold transition-colors">Log In</button>
            <button onClick={() => setView('signup')} className="px-6 py-2.5 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200">Sign Up Free</button>
          </div>

          <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest">
              AI-Powered Personalized Learning
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900 tracking-tight">
              Master any subject <br />
              <span className="gradient-text">effortlessly.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Skip the expensive tutors. Lumina AI adapts to your learning style, providing instant feedback and personalized lessons 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => setView('signup')} className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200 flex items-center justify-center gap-2 group">
                Try for Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                How it works
              </button>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format" className="rounded-3xl shadow-2xl relative z-10" alt="Student" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                 <span className="text-xs font-bold text-slate-400">MATH TUTOR ACTIVE</span>
               </div>
               <p className="text-sm font-semibold">"Let's break down this derivative..."</p>
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Future of Tutoring</h2>
          <p className="text-slate-500 text-lg">Powerful features to help you excel in your academic journey.</p>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl hover:shadow-lg transition-all border border-slate-100">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 italic">Lumina AI</h2>
          <p className="text-slate-400 mb-8">© 2024 Lumina AI Tutoring Inc.</p>
          <div className="flex justify-center gap-6">
            <button onClick={() => setView('login')} className="hover:text-indigo-400">Login</button>
            <button onClick={() => setView('signup')} className="hover:text-indigo-400">Sign Up</button>
          </div>
        </div>
      </footer>
    </div>
  );

  const DashboardView = () => (
    <div className="min-h-screen bg-slate-50 flex animate-in fade-in duration-500">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <GraduationCap className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-lg">Lumina <span className="text-indigo-600">Pro</span></span>
        </div>
        
        <div className="p-4 flex-grow overflow-y-auto space-y-2">
          <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">My Subjects</p>
          {[
            { name: 'Advanced Calculus', icon: <Zap className="w-4 h-4" /> },
            { name: 'Modern History', icon: <BookOpen className="w-4 h-4" /> },
            { name: 'Organic Chemistry', icon: <BrainCircuit className="w-4 h-4" /> },
            { name: 'Intro to Python', icon: <Users className="w-4 h-4" /> }
          ].map((subj, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${i === 0 ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}>
              {subj.icon}
              <span className="font-semibold text-sm">{subj.name}</span>
            </button>
          ))}
          
          <div className="pt-8 px-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Resources</div>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
            <Star className="w-4 h-4" />
            <span className="font-semibold text-sm">Saved Concepts</span>
          </button>
        </div>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3 mb-4">
             <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
               {userName ? userName[0] : (userEmail ? userEmail[0].toUpperCase() : 'S')}
             </div>
             <div className="flex-grow overflow-hidden">
               <p className="text-sm font-bold truncate">{userName || 'Student'}</p>
               <p className="text-xs text-slate-500 truncate">{userEmail || 'student@lumina.ai'}</p>
             </div>
          </div>
          <button onClick={() => setView('landing')} className="w-full flex items-center justify-center gap-2 py-3 text-slate-500 hover:text-red-600 font-bold text-sm transition-colors">
            <LogOut className="w-4 h-4" /> Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-screen">
        <header className="bg-white border-b border-slate-200 py-4 px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-600"><Menu /></button>
            <h2 className="font-bold text-lg text-slate-800">Advanced Calculus</h2>
          </div>
          <div className="flex items-center gap-3">
             <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
               <Search className="w-4 h-4 text-slate-400" />
               <input type="text" placeholder="Search my notes..." className="bg-transparent border-none outline-none text-sm w-40" />
             </div>
             <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors"><Settings className="w-5 h-5" /></button>
          </div>
        </header>

        <div className="flex-grow p-8 overflow-y-auto space-y-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-600 text-white p-8 rounded-[2rem] shadow-xl shadow-indigo-100 mb-8 relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                   Good morning, {userName || 'Student'}! <Sparkles className="w-6 h-6 text-indigo-200" />
                 </h3>
                 <p className="text-indigo-100">You're on a 5-day learning streak. Ready to tackle integration by parts today?</p>
                 <button className="mt-6 bg-white text-indigo-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg transition-all">Start Daily Quiz</button>
               </div>
               <BrainCircuit className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 rotate-12" />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">L</div>
                <div className="bg-white p-5 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm max-w-[85%]">
                  <p className="text-sm leading-relaxed text-slate-800">Hello! I noticed you were reviewing <b>differentiation rules</b> last night. Would you like to practice some multi-variable problems, or should we move on to <b>Integration</b>?</p>
                </div>
              </div>

              <div className="flex flex-row-reverse items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-600 text-xs font-bold">ME</div>
                <div className="bg-indigo-50 p-5 rounded-2xl rounded-tr-none border border-indigo-100 text-indigo-900 max-w-[85%]">
                  <p className="text-sm leading-relaxed">Let's try some Integration problems, specifically the ones involving trigonometric substitution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border-t border-slate-200">
           <div className="max-w-3xl mx-auto flex gap-3">
              <div className="flex-grow bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 flex items-center focus-within:ring-2 ring-indigo-500 transition-all">
                <input type="text" placeholder="Ask me anything..." className="bg-transparent border-none outline-none w-full text-sm" />
                <button className="p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"><Send className="w-4 h-4" /></button>
              </div>
           </div>
           <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">Lumina AI can make mistakes. Verify important info.</p>
        </div>
      </main>
    </div>
  );

  // Fix: Made children optional to resolve TS error where children are not correctly detected in locally defined components
  const AuthLayout = ({ children, title, subtitle, footer }: { children?: React.ReactNode, title: string, subtitle: string, footer: React.ReactNode }) => (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6 cursor-pointer" onClick={() => setView('landing')}>
          <div className="bg-indigo-600 p-3 rounded-2xl shadow-xl shadow-indigo-100">
            <GraduationCap className="text-white w-8 h-8" />
          </div>
        </div>
        <h2 className="text-center text-3xl font-extrabold text-slate-900">{title}</h2>
        <p className="mt-2 text-center text-slate-600">{subtitle}</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-50 py-10 px-6 shadow-sm rounded-3xl border border-slate-100 relative">
          <button onClick={() => setView('landing')} className="absolute top-6 left-6 text-slate-400 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="space-y-6">
            {children}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold text-slate-400"><span className="px-2 bg-slate-50">Social Auth</span></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex justify-center items-center py-2.5 px-4 border border-slate-200 rounded-xl shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all"><Chrome className="w-4 h-4 mr-2 text-red-500" /> Google</button>
              <button className="flex justify-center items-center py-2.5 px-4 border border-slate-200 rounded-xl shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all"><Github className="w-4 h-4 mr-2" /> GitHub</button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">{footer}</div>
      </div>
    </div>
  );

  const LoginView = () => (
    <AuthLayout 
      title="Welcome back" 
      subtitle="Continue your learning journey"
      footer={<p className="text-slate-600">New to Lumina? <button onClick={() => setView('signup')} className="font-bold text-indigo-600">Sign up</button></p>}
    >
      <form className="space-y-4" onSubmit={(e) => handleAuth(e, 'login')}>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="email" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="block w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 ring-indigo-500 outline-none transition-all" placeholder="you@example.com" />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="password" required className="block w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 ring-indigo-500 outline-none transition-all" placeholder="••••••••" />
          </div>
        </div>
        <button type="submit" className="w-full py-3.5 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">Sign In</button>
      </form>
    </AuthLayout>
  );

  const SignupView = () => (
    <AuthLayout 
      title="Create account" 
      subtitle="Start your 7-day free trial"
      footer={<p className="text-slate-600">Already have an account? <button onClick={() => setView('login')} className="font-bold text-indigo-600">Log in</button></p>}
    >
      <form className="space-y-4" onSubmit={(e) => handleAuth(e, 'signup')}>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)} className="block w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 ring-indigo-500 outline-none transition-all" placeholder="John Doe" />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="email" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="block w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 ring-indigo-500 outline-none transition-all" placeholder="you@example.com" />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="password" required className="block w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 ring-indigo-500 outline-none transition-all" placeholder="••••••••" />
          </div>
        </div>
        <button type="submit" className="w-full py-3.5 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">Get Started</button>
      </form>
    </AuthLayout>
  );

  return (
    <div className="min-h-screen text-slate-900 selection:bg-indigo-100">
      {view === 'landing' && <LandingView />}
      {view === 'login' && <LoginView />}
      {view === 'signup' && <SignupView />}
      {view === 'dashboard' && <DashboardView />}
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);