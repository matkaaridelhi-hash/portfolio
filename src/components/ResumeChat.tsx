"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RESUME_DATA = `
ANKIT SAXENA
Senior Telecom Expense Analyst | Data Automation Specialist
Noida, Uttar Pradesh - 201307
ankitsaxena.as@gmail.com | +91 8860501243

Experience:
- Sr. Telecom Expense Analyst at PBC COMMUNICATIONS INC. (Aug 2014 - Mar 2025)
- Sr. MIS Specialist at VIRTUAL EMPLOYEE PVT. LTD. (Dec 2013 – Jul 2014)
- Sr. MIS Executive at CHAMP INFO SOFTWARE (Jun 2012 – Dec 2013)

Skills:
- Telecom Management: TEM, Invoice Reconciliation, Vendor Negotiations, Contract Compliance, Inventory Management.
- Financial Analysis: Cost Analysis, Budgeting & Forecasting, Auditing, ROI Optimization.
- Technical: Advanced Excel, VBA & Macros, Google Scripting, Python (Pandas, NumPy), Data Visualization.
- Creative: UI/UX Design (Adobe Suite), Video Editing, Dashboard Design.

Projects:
- Contract Management tool (PBC): Automated email triggers (90/30 days) and centralized repository.
- DSO Automation (EPCOS India): Spearheaded automation for Day Sales Outstanding reporting using VBA.
- Flasho HRMS: Full-stack development for employee management using GScript and Adobe Suite.
- Kotoba Journal: AI-language tool for Japanese vocabulary tracking.
`;

export default function ResumeChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", content: "Hi! I'm Ankit's AI assistant. Ask me anything about his experience, skills, or projects!" },
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        // Enhanced response logic with more detail
        setTimeout(() => {
            let response = "I don't have that specific detail in my current knowledge base. However, Ankit is highly adaptable and likely has the experience you're looking for. You can reach out to him directly at ankitsaxena.as@gmail.com!";
            const query = input.toLowerCase();

            if (query.includes("pbc") || query.includes("latest") || (query.includes("experience") && (query.includes("summary") || query.includes("detail")))) {
                response = "At PBC Communications Inc. (2014-2025), Ankit served as a Senior Telecom Expense Analyst. His key contributions included:\n\n" +
                    "• Managed end-to-end telecom invoice lifecycles, ensuring payment accuracy and contract reconciliation.\n" +
                    "• Conducted rigorous cost optimization, identifying savings by eliminating redundant charges.\n" +
                    "• Served as the primary vendor liaison, negotiating contract terms and ensuring compliance.\n" +
                    "• Spearheaded process automation for expense management and inventory control of telecom assets.\n" +
                    "• Developed a custom Contract Management Tool with automated 90/30-day triggers to eliminate renewal risks.";
            } else if (query.includes("automation") || query.includes("vba") || query.includes("script") || query.includes("excel")) {
                response = "Ankit is a Data Automation specialist with a track record of high-impact tools:\n\n" +
                    "• DSO Automation (EPCOS India): Spearheaded VBA-based reporting that provided critical regional financial insights.\n" +
                    "• Contract Management (PBC): Built a centralized repository with automated triggers.\n" +
                    "• Flasho HRMS: Full-stack tool built with Google Apps Script to streamline facility management and staff tracking.\n" +
                    "• Mastery in Excel (Pivot, VLOOKUP) and creating complex dashboards.";
            } else if (query.includes("skill") || query.includes("tech") || query.includes("python")) {
                response = "Ankit's technical stack is a mix of financial analysis and modern engineering:\n\n" +
                    "• Core: Advanced Excel, VBA, Google Apps Script.\n" +
                    "• Development: Python (Pandas/NumPy), React, Next.js, AI API Integration.\n" +
                    "• Domain: Telecom Expense Management (TEM), Invoice Recon, Financial Auditing, Inventory Control.\n" +
                    "• Creative: UI/UX Design with Adobe Suite, Dashboards, and Video Editing.";
            } else if (query.includes("project") || query.includes("kotoba") || query.includes("flasho")) {
                response = "Key Projects:\n\n" +
                    "• Flasho HRMS: A comprehensive employee management system showcasing full-stack skills.\n" +
                    "• Kotoba Journal: An AI-integrated language tool for Japanese vocabulary tracking.\n" +
                    "• DSO Reporting Tool: Automated financial insights for EPCOS India using VBA.\n" +
                    "• PBC Contract Tool: Centralized renewal management system.";
            } else if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("reach")) {
                response = "You can contact Ankit Saxena here:\n\n" +
                    "• Email: ankitsaxena.as@gmail.com\n" +
                    "• Phone: +91 8860501243\n" +
                    "• Location: Noida, Uttar Pradesh";
            } else if (query.includes("education")) {
                response = "Ankit holds a PGDM in Data Analysis from IMT CDL (Ghaziabad) and a Bachelor of Commerce (B.Com) from CCS University (Meerut).";
            }

            setMessages((prev) => [...prev, { role: "bot", content: response }]);
        }, 600);
    };

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-8 right-8 z-[100]">
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[--color-accent-pink] brutal-border brutal-shadow-white p-4 text-black font-bold flex items-center gap-2 group"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 animate-float" />}
                    <span className="hidden group-hover:inline font-mono">RESUME AI</span>
                </motion.button>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-28 right-8 z-[100] w-[350px] md:w-[400px] h-[500px] bg-[--color-card-bg] brutal-border brutal-shadow-cyan flex flex-col overflow-hidden glass-card"
                    >
                        {/* Header */}
                        <div className="bg-black p-4 border-b-4 border-[--color-border-brutal] flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Bot className="w-5 h-5 text-[--color-accent-yellow]" />
                                <span className="font-mono font-bold text-sm text-white">ANKIT_AI_v1.0</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar bg-black/40"
                        >
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 brutal-border font-mono text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-[--color-accent-yellow] text-black brutal-shadow-white translate-x-[-4px]'
                                        : 'bg-white text-black brutal-shadow-pink translate-x-[4px]'
                                        }`}>
                                        <div className="flex items-center gap-2 mb-1 opacity-60 font-black text-[10px] uppercase">
                                            {msg.role === 'bot' ? <Bot className="w-3 h-3" /> : <User className="w-3 h-3" />}
                                            {msg.role}
                                        </div>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-black border-t-4 border-[--color-border-brutal] flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about Ankit..."
                                className="flex-1 bg-[--color-card-bg] border-2 border-[--color-border-brutal] p-2 font-mono text-sm text-white focus:outline-none focus:border-[--color-accent-purple] transition-colors"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-[--color-accent-cyan] brutal-border p-2 text-black hover:bg-white transition-colors"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
