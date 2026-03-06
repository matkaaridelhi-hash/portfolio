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

            // Direct specific questions
            if (query.match(/last company|current company|latest company|recent company|where did.*work last|last.*worked/)) {
                response = "Ankit's most recent company is **PBC Communications Inc.**, where he worked as a Senior Telecom Expense Analyst from August 2014 to March 2025.";
            } else if (query.match(/how many years|how long|years of experience/)) {
                response = "He has over 10+ years of professional experience in Telecom Expense Management and Data Automation.";
            } else if (query.match(/what does.*do|who is ankit|current role|profession/)) {
                response = "Ankit is a Senior Telecom Expense Analyst and Data Automation Specialist. He specializes in cost optimization, process automation, and building customized data solutions.";
            }
            // Explicit Companies
            else if (query.includes("pbc") || query.includes("communications")) {
                response = "At PBC Communications Inc. (Aug 2014 - Mar 2025), Ankit was a Senior Telecom Expense Analyst. His vast responsibilities included:\n\n" +
                    "• Managing the end-to-end lifecycle of telecom invoices and reconciling discrepancies.\n" +
                    "• Automating DSO (Day Sales Outstanding) reporting and vendor negotiations.\n" +
                    "• Inventory control and auditing to eliminate redundant charges.\n" +
                    "• Building a custom Contract Management Tool with 90/30-day automated triggers, which completely eliminated renewal risks.";
            }
            else if (query.includes("virtual employee")) {
                response = "At Virtual Employee Pvt. Ltd. (Dec 2013 - Jul 2014), Ankit worked as an MIS Specialist. He managed MIS activities, trained new hires as a Subject Matter Expert, and generated high-priority business reports with 100% accuracy.";
            }
            else if (query.includes("champ info") || query.includes("champ")) {
                response = "At Champ Info Software (Jun 2012 - Dec 2013), Ankit started as an MIS Executive. He prepared daily, weekly, and monthly management reports and evaluated recurring reporting errors to improve process efficiency.";
            }
            // Specific Projects
            else if (query.includes("flasho") || query.includes("hrms")) {
                response = "Flasho HRMS is an Employee Management System where Ankit acted as a Full-Stack Developer. He used Google Apps Script and Adobe Suite (for UI/UX) to create a system that streamlined facility management operations and staff tracking.";
            }
            else if (query.includes("kotoba") || query.includes("journal")) {
                response = "Kotoba Journal is an AI-language tool project. It focuses on Japanese vocabulary tracking and demonstrates his capability to integrate AI APIs into daily productivity workflows.";
            }
            else if (query.includes("epcos") || query.includes("dso")) {
                response = "At EPCOS India, Ankit spearheaded an automation project using Excel VBA to streamline Day Sales Outstanding (DSO) reporting. It provided critical regional insights for executive management.";
            }
            else if (query.match(/project|portfolio|build|made|create/)) {
                response = "Ankit's key projects include:\n\n" +
                    "1. PBC Contract Management Tool: Centralized repo with automated email triggers.\n" +
                    "2. EPCOS India DSO Automation: Complex VBA statistical reporting.\n" +
                    "3. Flasho HRMS: Full-stack Employee Management System.\n" +
                    "4. Kotoba Journal: AI-integrated vocabulary tracking application.";
            }
            // Skills
            else if (query.match(/automation|script|vba|excel|macro/)) {
                response = "Ankit heavily specializes in Data & Process Automation. He is highly proficient in advanced Excel (Power Pivot, VLOOKUP), VBA Macros, Python (Pandas/NumPy basics), and Google Apps Script, using these to build complex financial dashboards and cut down manual reporting time.";
            }
            else if (query.match(/ai|artificial intelligence|llm/)) {
                response = "Ankit actively leverages AI for automation. He integrates AI APIs into practical tools—like his Kotoba Journal project—adding context-aware functionality to daily workflows.";
            }
            else if (query.match(/telecom|tem|invoice/)) {
                response = "Ankit is a Senior Telecom Expense Analyst. His skills include Invoice Reconciliation, Vendor Negotiations, Contract Compliance, Inventory Management, and identifying major cost-saving opportunities.";
            }
            else if (query.match(/skill|tech|know|stack|language/)) {
                response = "Ankit's core competencies:\n\n" +
                    "• Telecom: TEM, Invoice Recon, Vendor Negotiation, Compliance\n" +
                    "• Financial Analysis: Cost Optimization, Budgeting, ROI Analysis\n" +
                    "• Technical: Excel VBA, Google Apps Script, Python, Next.js/React\n" +
                    "• Creative: UI/UX (Adobe Suite), Data Visualization, Dashboards";
            }
            // Education
            else if (query.match(/education|degree|study|college|university/)) {
                response = "Ankit holds a PGDM (Post Graduate Diploma in Management) in Data Analysis from IMT CDL, Ghaziabad, and a Bachelor of Commerce (B.Com) from CCS University, Meerut.";
            }
            // Contact
            else if (query.match(/contact|email|phone|reach|hire/)) {
                response = "Ankit is open to opportunities. You can easily reach him at:\n\n" +
                    "📧 Email: ankitsaxena.as@gmail.com\n" +
                    "📞 Phone: +91 8860501243\n" +
                    "📍 Location: Noida, Uttar Pradesh - 201307";
            }
            // Broad Greetings
            else if (query.match(/\bhi\b|\bhello\b|\bhey\b/)) {
                response = "Hello! I can answer questions about Ankit's resume, including his 10+ years of telecom experience, his automation skills, or his technical projects. What would you like to know?";
            }
            // Broad Experience Backup
            else if (query.match(/experience|work|background|summary|job|role/)) {
                response = "Ankit has an impressive 10+ years of experience primarily in Telecom Expense Management (TEM) and Data Automation. He spent over a decade at PBC Communications optimizing costs and automating financial workflows. He additionally developed a number of full-stack SaaS and AI tools.";
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
