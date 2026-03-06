"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Calculator, Database, Briefcase, FileText, Code2, Paintbrush } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[--color-bg-base] text-[--color-fg-base] selection:bg-[--color-accent-yellow] selection:text-black pt-20 pb-32 overflow-hidden">
      
      {/* Navbar Pattern */}
      <nav className="fixed top-0 w-full z-50 bg-[--color-bg-base] border-b-4 border-[--color-border-brutal] p-4 font-mono font-bold flex justify-between items-center px-8 md:px-16">
        <span className="text-xl brutal-hover p-2 cursor-pointer bg-[--color-card-bg] brutal-border brutal-shadow-pink">AS.PORTFOLIO</span>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-[--color-accent-yellow] transition-colors">ABOUT</a>
          <a href="#telecom" className="hover:text-[--color-accent-cyan] transition-colors">TELECOM EXPENSE</a>
          <a href="#saas" className="hover:text-[--color-accent-pink] transition-colors">SAAS PRODUCTS</a>
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
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase">
              Ankit <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-accent-yellow] to-[--color-accent-pink]">Saxena</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-mono relative z-10 pb-4">
              Over a decade of experience in optimizing costs, automating complex workflows, and engineering robust data-driven solutions.
            </p>
            
            <div className="flex gap-4">
              <a href="#telecom" className="brutal-border brutal-shadow-yellow brutal-hover bg-black px-8 py-4 font-bold text-lg inline-flex items-center gap-2 w-max text-white uppercase transition-transform h-min">
                View Work <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/Assets/RESUME - Ankit Saxena.pdf" target="_blank" className="brutal-border brutal-shadow-pink brutal-hover bg-[--color-card-bg] px-8 py-4 font-bold text-lg inline-flex items-center gap-2 w-max text-white uppercase transition-transform h-min">
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
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                     <div className="bg-[--color-accent-pink] brutal-border hover:rotate-6 transition-transform"></div>
                     <div className="bg-[--color-accent-cyan] brutal-border hover:-rotate-3 transition-transform"></div>
                     <div className="bg-[--color-accent-yellow] brutal-border hover:rotate-2 transition-transform"></div>
                     <div className="bg-white brutal-border hover:-rotate-6 transition-transform"></div>
                  </div>
               </div>
            </div>
          </motion.div>
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
               <Calculator className="w-12 h-12 text-[--color-accent-yellow]" />
               <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">Telecom Expense Analysis</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
              <div className="bg-[--color-card-bg] p-8 brutal-border brutal-shadow-white relative overflow-hidden group">
                <div className="absolute w-64 h-64 bg-[--color-accent-pink] rounded-full blur-[100px] -bottom-20 -right-20 opacity-20"></div>
                <h3 className="text-3xl font-bold mb-4 font-mono">Cost Optimization & Automations</h3>
                <p className="text-lg opacity-80 mb-6">
                  Spearheaded Day Sales Outstanding (DSO) reporting automation and developed centralized repositories with 90/30-day automated triggers, dropping renewal risks to zero.
                </p>
                <ul className="space-y-4 font-mono font-bold">
                  <li className="flex gap-3 items-center"><code className="bg-white text-black px-2 py-1">VBA</code> <code className="bg-white text-black px-2 py-1">Google App Script</code></li>
                  <li className="flex gap-3 items-center"><code className="bg-white text-black px-2 py-1">Financial Audits</code> <code className="bg-white text-black px-2 py-1">Python</code></li>
                </ul>
              </div>

              {/* Data Viz Example Card */}
              <div className="bg-[#111] p-8 brutal-border brutal-shadow-yellow relative flex flex-col justify-end min-h-[400px]">
                 <div className="absolute top-6 left-6 font-mono font-bold">DSO TREND ANALYSIS (DEMO)</div>
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
               <Code2 className="w-12 h-12 text-[--color-accent-pink]" />
               <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">SaaS Products</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* EMS Project */}
               <div className="group bg-[--color-card-bg] brutal-border brutal-shadow-pink p-8 brutal-hover duration-300">
                  <div className="bg-black text-[--color-accent-yellow] p-3 inline-block font-mono font-bold brutal-border mb-6 rotate-2">
                    FULL-STACK DEV
                  </div>
                  <h3 className="text-4xl font-black mb-4 uppercase">Flasho HRMS</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Employee Management System designed to streamline facility management operations, featuring staff tracking, advanced reporting, and sleek UI/UX design.
                  </p>
                  <div className="flex gap-2 font-mono flex-wrap text-sm">
                     <span className="bg-white text-black px-3 py-1 brutal-border">GScript</span>
                     <span className="bg-white text-black px-3 py-1 brutal-border">Adobe Suite</span>
                     <span className="bg-white text-black px-3 py-1 brutal-border">UI/UX</span>
                  </div>
               </div>

               {/* Trading Journal Project */}
               <div className="group bg-[--color-card-bg] brutal-border brutal-shadow-cyan p-8 brutal-hover duration-300">
                  <div className="bg-white text-black p-3 inline-block font-mono font-bold brutal-border mb-6 -rotate-2">
                    AI INTEGRATION
                  </div>
                  <h3 className="text-4xl font-black mb-4 uppercase">Kotoba Journal</h3>
                  <p className="text-lg mb-6 opacity-90">
                    An AI-language tool and personal learning journal demonstrating practical AI integration into daily productivity, specifically for Japanese vocabulary tracking.
                  </p>
                  <div className="flex gap-2 font-mono flex-wrap text-sm">
                     <span className="bg-[--color-accent-yellow] text-black px-3 py-1 brutal-border">AI APIs</span>
                     <span className="bg-[--color-accent-yellow] text-black px-3 py-1 brutal-border">Automation</span>
                     <span className="bg-[--color-accent-yellow] text-black px-3 py-1 brutal-border">React</span>
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
               <Paintbrush className="w-12 h-12 text-[--color-accent-cyan]" />
               <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">Creative Suite</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
               {[
                 { color: 'bg-[--color-accent-pink]', rot: 'rotate-3', title: 'UX Wireframes' },
                 { color: 'bg-[--color-accent-yellow]', rot: '-rotate-2', title: 'Dashboard UI' },
                 { color: 'bg-[--color-accent-cyan]', rot: 'rotate-1', title: 'Data Visual' },
                 { color: 'bg-white', rot: '-rotate-4', title: 'Process Flow' },
                 { color: 'bg-[--color-card-bg]', rot: 'rotate-2', title: 'Iconography' },
                 { color: 'bg-[--color-accent-purple]', rot: '-rotate-1', title: 'Branding' },
               ].map((item, idx) => (
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    key={idx} 
                    className={`${item.color} ${item.rot} origin-center transition-all cursor-pointer aspect-square brutal-border brutal-shadow-white flex items-center justify-center p-6 text-center text-black shadow-lg relative overflow-hidden group`}
                  >
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                     <span className={item.color === 'bg-[--color-card-bg]' ? 'text-white' : 'text-black font-black text-2xl uppercase relative z-10'}>
                        {item.title}
                     </span>
                  </motion.div>
               ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="mt-32 border-t-4 border-[--color-border-brutal] pt-12 text-center flex flex-col items-center gap-6">
         <h2 className="text-4xl font-black uppercase">Let's Connect</h2>
         <p className="font-mono text-xl"><a href="mailto:ankitsaxena.as@gmail.com" className="hover:bg-[--color-accent-pink] px-2 transition-colors">ankitsaxena.as@gmail.com</a></p>
         <p className="font-mono">+91 8860501243 | Noida, UP</p>
         <div className="mt-8 font-mono opacity-50 text-sm">
            © {new Date().getFullYear()} Ankit Saxena. All rights reserved.
         </div>
      </footer>
    </div>
  );
}
