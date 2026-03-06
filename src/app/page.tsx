"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Calculator, Database, Briefcase, FileText, Code2, Paintbrush, Cpu, Zap, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import ResumeChat from "@/components/ResumeChat";

export default function Portfolio() {
  const skills = [
    { name: "Telecom Analysis", category: "Domain", icon: <Calculator className="w-6 h-6" />, color: "bg-[--color-accent-pink]" },
    { name: "VBA & Macros", category: "Automation", icon: <Cpu className="w-6 h-6" />, color: "bg-[--color-accent-yellow]" },
    { name: "Google Apps Script", category: "Automation", icon: <Zap className="w-6 h-6" />, color: "bg-[--color-accent-cyan]" },
    { name: "SaaS Development", category: "Engineering", icon: <Database className="w-6 h-6" />, color: "bg-[--color-accent-purple]" },
    { name: "AI Integration", category: "Intelligence", icon: <BotIcon />, color: "bg-white" },
    { name: "UI/UX Dashboards", category: "Creative", icon: <Paintbrush className="w-6 h-6" />, color: "bg-[--color-accent-pink]" },
  ];

  return (
    <div className="min-h-screen bg-[--color-bg-base] text-[--color-fg-base] selection:bg-[--color-accent-yellow] selection:text-black pt-20 pb-0 overflow-hidden">

      {/* Navbar Pattern */}
      <nav className="fixed top-0 w-full z-50 bg-[--color-bg-base] border-b-4 border-[--color-border-brutal] p-4 font-mono font-bold flex justify-between items-center px-8 md:px-16">
        <span className="text-xl brutal-hover p-2 cursor-pointer bg-[--color-card-bg] brutal-border brutal-shadow-pink">AS.PORTFOLIO</span>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-[--color-accent-yellow] transition-colors">ABOUT</a>
          <a href="#specialization" className="hover:text-[--color-accent-cyan] transition-colors">EXPERTISE</a>
          <a href="#telecom" className="hover:text-[--color-accent-cyan] transition-colors">TELECOM</a>
          <a href="#saas" className="hover:text-[--color-accent-pink] transition-colors">SAAS</a>
          <a href="#creative" className="hover:text-[--color-accent-purple] transition-colors">CREATIVE</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-20 flex flex-col gap-32">
        {/* HERO SECTION */}
        <section id="about" className="flex flex-col md:flex-row gap-12 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-8"
          >
            <div className="inline-block self-start p-2 bg-[--color-accent-cyan] text-black font-bold font-mono brutal-border brutal-shadow-white rotate-[-2deg]">
              Senior Telecom Expense Analyst
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase break-words">
              Ankit <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-accent-yellow] to-[--color-accent-pink]">Saxena</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-mono relative z-10 pb-4">
              Over a decade of experience optimizing costs, engineering AI-driven automations, and building high-impact data solutions.
            </p>

            <div className="flex gap-4">
              <a href="#specialization" className="brutal-border brutal-shadow-yellow brutal-hover bg-black px-8 py-4 font-bold text-lg inline-flex items-center gap-2 w-max text-white uppercase transition-transform h-min">
                View Expertise <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/Assets/RESUME - Ankit Saxena.pdf" download="ANKIT_SAXENA_RESUME.pdf" className="brutal-border brutal-shadow-pink brutal-hover bg-[--color-card-bg] px-8 py-4 font-bold text-lg inline-flex items-center gap-2 w-max text-white uppercase transition-transform h-min">
                Resume <FileText className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="aspect-square bg-[--color-card-bg] brutal-border brutal-shadow-cyan relative group rotate-[2deg]">
              <div className="absolute inset-0 bg-[--color-accent-yellow] opacity-20 group-hover:opacity-0 transition-opacity z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full h-full text-black font-black text-center uppercase">
                  <div className="bg-[--color-accent-pink] brutal-border flex items-center justify-center p-2 rotate-2 hover:rotate-0 transition-transform">Cost<br />Optimization</div>
                  <div className="bg-[--color-accent-cyan] brutal-border flex items-center justify-center p-2 -rotate-3 hover:rotate-0 transition-transform">AI<br />Integration</div>
                  <div className="bg-[--color-accent-yellow] brutal-border flex items-center justify-center p-2 rotate-1 hover:rotate-0 transition-transform">Process<br />Automation</div>
                  <div className="bg-white brutal-border flex items-center justify-center p-2 -rotate-2 hover:rotate-0 transition-transform">Data<br />Analytics</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* IMPACT METRICS SECTION */}
        <section className="scroll-m-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[--color-card-bg] brutal-border brutal-shadow-yellow p-8 flex flex-col gap-2">
              <span className="text-6xl font-black text-[--color-accent-yellow]">10+</span>
              <span className="font-mono font-bold uppercase text-lg">Years of Experience</span>
              <p className="opacity-70 text-sm">Proven track record in telecom expense lifecycle management.</p>
            </div>
            <div className="bg-[--color-accent-pink] text-black brutal-border brutal-shadow-white p-8 flex flex-col gap-2">
              <span className="text-6xl font-black">100%</span>
              <span className="font-mono font-bold uppercase text-lg">Renewal Accuracy</span>
              <p className="font-bold text-sm">Eliminated renewal risks via automated trigger-based systems.</p>
            </div>
            <div className="bg-[--color-accent-cyan] text-black brutal-border brutal-shadow-white p-8 flex flex-col gap-2">
              <span className="text-6xl font-black">85%</span>
              <span className="font-mono font-bold uppercase text-lg">Time Saved</span>
              <p className="font-bold text-sm">Achieved through custom VBA and GScript automation workflows.</p>
            </div>
          </div>
        </section>

        {/* SPECIALIZATION & SKILLS GRID */}
        <section id="specialization" className="scroll-m-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col md:flex-row gap-4 justify-between items-end">
              <div className="flex items-center gap-4">
                <Target className="w-12 h-12 text-[--color-accent-purple] shrink-0" />
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight break-words">Core Expertise</h2>
              </div>
              <p className="font-mono opacity-60 text-right max-w-sm">A synthesis of telecom management, software engineering, and AI integration.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, i) => (
                <div key={i} className={`group ${skill.color} p-8 brutal-border brutal-shadow-white brutal-hover text-black transition-all cursor-default`}>
                  <div className="bg-black text-white p-3 inline-block brutal-border mb-6">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2">{skill.name}</h3>
                  <p className="font-mono font-bold opacity-60 text-xs mb-4 uppercase tracking-widest">{skill.category}</p>
                  <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-black/40"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* AI & AUTOMATION WORKFLOW */}
        <section className="scroll-m-32 bg-[--color-card-bg] brutal-border brutal-shadow-purple p-6 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Cpu className="w-64 h-64" />
          </div>
          <div className="flex flex-col gap-12 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic break-words">The AI Integration Edge</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <p className="text-xl font-mono leading-relaxed">
                  I specialize in closing the gap between raw data and actionable intelligence by integrating LLMs and automation scripts into legacy workflows.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Integration of OpenAI/Gemini APIs for context-aware data processing.",
                    "Automated email triggers and document classification systems.",
                    "Building custom AI-assisted language and productivity tools."
                  ].map((point, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="bg-[--color-accent-yellow] text-black font-bold px-2 py-0.5 brutal-border">{idx + 1}</div>
                      <p className="font-bold opacity-90">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full max-w-[85vw] md:max-w-none bg-black p-4 sm:p-8 brutal-border brutal-shadow-cyan font-mono text-xs sm:text-sm space-y-4 overflow-x-auto">
                <div className="text-[--color-accent-cyan] whitespace-nowrap">{"// AI Workflow Simulation"}</div>
                <div className="flex gap-2 whitespace-nowrap"><span className="text-[--color-accent-pink]">INPUT:</span> Raw_Telecom_Invoice.pdf</div>
                <div className="flex gap-2 whitespace-nowrap"><span className="text-[--color-accent-purple]">PROCESS:</span> OCR {'->'} Data_Extract {'->'} AI_Audit</div>
                <div className="flex gap-2 whitespace-nowrap"><span className="text-[--color-accent-yellow]">OUTPUT:</span> Dispute_Report_v1.xls</div>
                <div className="mt-4 pt-4 border-t border-white/20 whitespace-nowrap">
                  <span className="animate-pulse">_</span> AI Audit Complete. 4 discrepancies found.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TELECOM EXPENSE ANALYSIS SECTION */}
        <section id="telecom" className="scroll-m-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <Calculator className="w-12 h-12 text-[--color-accent-yellow] shrink-0" />
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight break-words">Telecom Expense</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
              <div className="bg-[--color-card-bg] p-6 sm:p-8 brutal-border brutal-shadow-white relative overflow-hidden group">
                <div className="absolute w-64 h-64 bg-[--color-accent-pink] rounded-full blur-[100px] -bottom-20 -right-20 opacity-20"></div>
                <h3 className="text-3xl font-bold mb-4 font-mono">Operations & Auditing</h3>
                <p className="text-lg opacity-80 mb-6">
                  End-to-end lifecycle management of telecom invoices, reconciling discrepancies against service contracts with 100% submission accuracy.
                </p>
                <div className="grid grid-cols-2 gap-4 font-mono font-bold text-sm">
                  <div className="bg-white text-black p-2 brutal-border text-center">Invoice Recon</div>
                  <div className="bg-white text-black p-2 brutal-border text-center">Vendor Liaison</div>
                  <div className="bg-white text-black p-2 brutal-border text-center">TEM Expert</div>
                  <div className="bg-white text-black p-2 brutal-border text-center">Compliance</div>
                </div>
              </div>

              {/* Data Viz Example Card */}
              <div className="bg-[#111] p-8 brutal-border brutal-shadow-yellow relative flex flex-col justify-end min-h-[400px]">
                <div className="absolute top-6 left-6 font-mono font-bold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> DSO TREND ANALYSIS (LIVE MOCK)
                </div>
                <div className="w-full flex items-end gap-2 h-48 mt-12 bg-[--color-card-bg] brutal-border p-4">
                  {[40, 70, 45, 90, 65, 100, 30].map((h, i) => (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      key={i}
                      className="flex-1 bg-[--color-accent-cyan] border-2 border-white brutal-hover"
                    ></motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SAAS PRODUCTS SECTION */}
        <section id="saas" className="scroll-m-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-12"
          >
            <div className="flex items-center gap-4">
              <Code2 className="w-12 h-12 text-[--color-accent-pink] shrink-0" />
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight break-words">SaaS Engineering</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* EMS Project */}
              <div className="group bg-[--color-card-bg] brutal-border brutal-shadow-pink p-6 sm:p-8 brutal-hover duration-300">
                <div className="bg-black text-[--color-accent-yellow] p-3 inline-block font-mono font-bold brutal-border mb-6 rotate-2">
                  FULL-STACK DEV
                </div>
                <h3 className="text-4xl font-black mb-4 uppercase">Flasho HRMS</h3>
                <p className="text-lg mb-6 opacity-90">
                  Employee Management System designed to streamline facility operations. Engineered with Google Apps Script and styled with Adobe Creative Suite.
                </p>
                <div className="flex gap-2 font-mono flex-wrap text-sm">
                  <span className="bg-white text-black px-3 py-1 brutal-border">GScript</span>
                  <span className="bg-white text-black px-3 py-1 brutal-border">UI/UX</span>
                  <span className="bg-white text-black px-3 py-1 brutal-border">Automation</span>
                </div>
              </div>

              {/* Trading Journal Project */}
              <div className="group bg-[--color-card-bg] brutal-border brutal-shadow-cyan p-6 sm:p-8 brutal-hover duration-300">
                <div className="bg-white text-black p-3 inline-block font-mono font-bold brutal-border mb-6 -rotate-2">
                  AI INTEGRATION
                </div>
                <h3 className="text-4xl font-black mb-4 uppercase">Kotoba Journal</h3>
                <p className="text-lg mb-6 opacity-90">
                  A Japanese vocabulary tracking tool utilizing AI integration for context-aware definitions and personal learning workflows.
                </p>
                <div className="flex gap-2 font-mono flex-wrap text-sm">
                  <span className="bg-[--color-accent-yellow] text-black px-3 py-1 brutal-border">AI APIs</span>
                  <span className="bg-[--color-accent-yellow] text-black px-3 py-1 brutal-border">React</span>
                  <span className="bg-[--color-accent-yellow] text-black px-3 py-1 brutal-border">Automation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CREATIVE SUITE GALLERY */}
        <section id="creative" className="scroll-m-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-12"
          >
            <div className="flex items-center gap-4">
              <Paintbrush className="w-12 h-12 text-[--color-accent-cyan] shrink-0" />
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight break-words">Creative Gallery</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-32">
              {[
                { color: 'bg-[--color-accent-pink]', rot: 'rotate-3', title: 'UX Wireframes' },
                { color: 'bg-[--color-accent-yellow]', rot: '-rotate-2', title: 'Dashboard UI' },
                { color: 'bg-[--color-accent-cyan]', rot: 'rotate-1', title: 'Data Visual' },
                { color: 'bg-white', rot: '-rotate-4', title: 'Process Flow' },
                { color: 'bg-[--color-accent-purple]', rot: 'rotate-2', title: 'Branding' },
                { color: 'bg-white', rot: '-rotate-1', title: 'Video Edit' },
              ].map((item, idx) => (
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  key={idx}
                  className={`${item.color} ${item.rot} origin-center transition-all cursor-pointer aspect-square brutal-border brutal-shadow-white flex items-center justify-center p-6 text-center text-black shadow-lg relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  <span className="text-black font-black text-2xl uppercase relative z-10">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* AI Resume Chatbot */}
      <ResumeChat />

      <footer className="border-t-4 border-[--color-border-brutal] py-12 text-center bg-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Let's Connect</h2>
          <div className="flex flex-col md:flex-row gap-8 font-mono text-lg">
            <a href="mailto:ankitsaxena.as@gmail.com" className="hover:bg-[--color-accent-pink] hover:text-black px-4 py-2 brutal-border transition-all">ankitsaxena.as@gmail.com</a>
            <span className="p-2">+91 8860501243</span>
            <span className="p-2">Noida, Uttar Pradesh</span>
          </div>
          <div className="mt-8 font-mono opacity-30 text-xs">
            © {new Date().getFullYear()} Ankit Saxena. Designed for high performance.
          </div>
        </div>
      </footer>
    </div>
  );
}

function BotIcon() {
  return <Bot className="w-6 h-6" />;
}

import { Bot } from "lucide-react";
