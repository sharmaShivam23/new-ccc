import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, X, Send, Bot, 
  ChevronDown, ChevronRight, BrainCircuit, Database, CheckCircle2,
  Github, Linkedin, Instagram, ExternalLink, Globe
} from 'lucide-react';

// --- CONFIGURATION ---
const API_BASE = "https://spocc-registration-form-backend.vercel.app/api/v1";

// --- LINK PARSER HELPER ---
// Converts raw URLs into beautiful chip buttons
const LinkChip = ({ url, label }) => {
  let Icon = Globe;
  let text = "Visit Link";
  let colorClass = "bg-white/10 hover:bg-white/20 text-gray-200";

  if (url.includes('github.com')) {
    Icon = Github;
    text = "GitHub";
    colorClass = "bg-[#24292e]/80 hover:bg-[#24292e] text-white";
  } else if (url.includes('linkedin.com')) {
    Icon = Linkedin;
    text = "LinkedIn";
    colorClass = "bg-[#0077b5]/80 hover:bg-[#0077b5] text-white";
  } else if (url.includes('instagram.com')) {
    Icon = Instagram;
    text = "Instagram";
    colorClass = "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
  }

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-medium transition-all ${colorClass} mb-1 mr-2 no-underline`}
    >
      <Icon size={12} />
      <span>{text}</span>
      <ExternalLink size={8} className="opacity-50" />
    </a>
  );
};

// --- RICH TEXT RENDERER ---
// Parses Markdown-like syntax (**bold**, - lists) and extracts links
const RichTextRenderer = ({ text }) => {
  if (!text) return null;

  // 1. Split text into lines to handle formatting line-by-line
  const lines = text.split('\n');
  
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        // A. Handle Lists (lines starting with - or *)
        const isList = line.trim().match(/^[-*]\s/);
        const cleanLine = line.replace(/^[-*]\s/, '');

        // B. Handle Bold Text (**text**)
        // We split by ** and map. Even indices are normal, Odd are bold.
        const parts = cleanLine.split(/\*\*(.*?)\*\*/g);
        
        // C. Check for Links in this line
        // Regex to find http/https URLs
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const hasUrl = line.match(urlRegex);

        if (hasUrl) {
          // If line is ONLY a link or "Label: URL", render the chip
          return (
            <div key={i} className="flex flex-wrap items-center mt-1">
               {hasUrl.map(url => <LinkChip key={url} url={url} />)}
            </div>
          );
        }

        return (
          <div key={i} className={`text-sm leading-relaxed ${isList ? 'pl-3 flex items-start' : ''}`}>
             {isList && <span className="mr-2 mt-1.5 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0 block" />}
             
             <p className={isList ? "flex-1" : ""}>
               {parts.map((part, index) => {
                 // Even index = normal text, Odd index = bold text
                 if (index % 2 === 1) {
                   return <strong key={index} className="font-bold text-white/90">{part}</strong>;
                 }
                 return <span key={index}>{part}</span>;
               })}
             </p>
          </div>
        );
      })}
    </div>
  );
};

// --- THOUGHT PROCESS COMPONENT ---
const ThoughtProcess = ({ toolName, toolType }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (toolName) setIsOpen(true);
  }, [toolName]);

  if (!toolName && !toolType) return null;

  return (
    <div className="mb-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[10px] text-gray-400 hover:text-white transition-colors bg-white/5 px-2 py-1.5 rounded-md border border-white/5 w-full hover:bg-white/10"
      >
        {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        <BrainCircuit size={12} className="text-purple-400" />
        <span className="uppercase tracking-wider font-semibold text-[9px]">Process Log</span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-1 ml-2 pl-2 border-l border-white/10 space-y-1.5 py-1">
              {toolType === 'rag' && (
                <div className="flex items-center gap-2 text-[10px] text-emerald-400/90">
                  <Database size={10} />
                  <span>Accessing Knowledge Base...</span>
                </div>
              )}
              {toolName && (
                <div className="flex items-center gap-2 text-[10px] text-blue-400/90">
                  <CheckCircle2 size={10} />
                  <span>Executed: <span className="font-mono text-white/70">{toolName}</span></span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN CHATBOT COMPONENT ---
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      text: "Hello! I am the CCC AI Assistant.\n\nAsk me anything about the Cloud Computing Cell or our upcoming events!",
      thoughts: null 
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [threadId, setThreadId] = useState(null);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isProcessing, isOpen]);

  const handleSendMessage = async (textOverride = null) => {
    const textToSend = textOverride || query;
    if (!textToSend.trim() || isProcessing) return;

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setQuery("");
    setIsProcessing(true);

    try {
      const res = await axios.post(`${API_BASE}/chatbot/chat`, {
        query: textToSend,
        thread_id: threadId
      });

      if (res.data.success) {
        const { answer, thread_id, tool_name, tool_type } = res.data.data;
        
        setThreadId(thread_id);

        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: answer,
          thoughts: { tool_name, tool_type } 
        }]);
      } else {
        throw new Error("API returned unsuccessful response");
      }

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "I'm having trouble connecting to the server. Please try again later.",
        thoughts: null
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans antialiased">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[320px] md:w-[380px] h-[550px] bg-[#09090b]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center select-none">
              <div className="flex items-center gap-2">
                <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="absolute top-0 w-2.5 h-2.5 rounded-full bg-emerald-500 blur-[2px] animate-pulse"></div>
                </div>
                <h3 className="font-semibold text-gray-100 flex items-center gap-2 text-sm tracking-wide">
                  <Bot size={16} className="text-blue-400" /> 
                  CCC Intelligence
                </h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full">
                <X size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar scroll-smooth">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  
                  <span className={`text-[10px] mb-1 text-gray-500 font-medium ${msg.role === 'user' ? 'mr-1' : 'ml-1'}`}>
                    {msg.role === 'user' ? 'You' : 'CCC AI'}
                  </span>

                  <div 
                    className={`max-w-[90%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-violet-600 to-blue-600 text-white rounded-tr-sm shadow-blue-900/20' 
                        : 'bg-[#18181b] text-gray-300 border border-white/10 rounded-tl-sm'
                    }`}
                  >
                    {/* Process Log */}
                    {msg.role === 'bot' && msg.thoughts?.tool_name && (
                      <ThoughtProcess 
                        toolName={msg.thoughts.tool_name} 
                        toolType={msg.thoughts.tool_type} 
                      />
                    )}

                    {/* Rich Text Renderer */}
                    <RichTextRenderer text={msg.text} />
                  </div>
                </div>
              ))}

              {/* Processing Loading Indicator */}
              {isProcessing && (
                <div className="flex flex-col items-start space-y-2 animate-pulse">
                   <div className="flex items-center gap-2 ml-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                   </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#09090b] border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className={`flex gap-3 items-center bg-[#18181b] border border-white/10 rounded-2xl px-2 py-2 transition-all duration-300 ${isProcessing ? 'opacity-50 cursor-not-allowed border-blue-500/30' : 'focus-within:border-blue-500/50'}`}
              >
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={isProcessing ? "Processing..." : "Ask a question..."}
                  disabled={isProcessing}
                  className="flex-1 bg-transparent px-3 text-xs text-white focus:outline-none placeholder:text-gray-500 h-full disabled:cursor-not-allowed"
                />
                
                <button 
                  type="submit"
                  disabled={!query.trim() || isProcessing}
                  className={`
                    p-2.5 rounded-xl text-white shadow-lg transition-all duration-300
                    flex items-center justify-center
                    ${!query.trim() || isProcessing 
                      ? 'bg-gray-700 opacity-50 cursor-not-allowed shadow-none' 
                      : 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 shadow-blue-500/20 active:scale-95'
                    }
                  `}
                >
                  {isProcessing ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <Send size={16} className={query.trim() ? "translate-x-0.5" : ""} />
                  )}
                </button>
              </form>
              
              <div className="text-[9px] text-gray-600 text-center mt-2 flex justify-center gap-1">
                <span>Powered by CCC AI</span>
                <span className="text-gray-700">•</span>
                <span>v1.0</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-br from-violet-600 to-blue-600 text-white p-3.5 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] relative group border border-white/10"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}