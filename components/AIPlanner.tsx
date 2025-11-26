'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Bot, User, Loader2 } from 'lucide-react'
import { ChatMessage } from '../types';
import { generateTravelResponse } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

export const AIPlanner: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: "Hello! I'm your Travukwik AI assistant. Tell me your dream destination, budget, or travel dates, and I'll help you plan the perfect trip!" 
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateTravelResponse(input);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the server. Please try again later.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-secondary mb-4">
            <Sparkles size={16} />
            <span className="text-sm font-semibold uppercase tracking-wider">Powered by Gemini AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Smart Travel Assistant</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Not sure where to go? Let our AI plan your itinerary tailored to your preferences in seconds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-slate-800' : 'bg-secondary'
                }`}>
                  {msg.role === 'user' ? <User size={20} className="text-white" /> : <Bot size={20} className="text-white" />}
                </div>
                
                <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-gray-100'
                }`}>
                  {msg.role === 'model' ? (
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  ) : (
                    <p>{msg.text}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Bot size={20} className="text-white" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 flex items-center gap-2 text-slate-500">
                  <Loader2 size={18} className="animate-spin" />
                  <span>Travukwik AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSendMessage} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Plan a 5-day honeymoon in Maldives under $3000..."
                className="w-full pl-6 pr-14 py-4 bg-slate-100 rounded-full text-slate-800 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-2 w-10 h-10 bg-secondary hover:bg-sky-600 disabled:bg-slate-300 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
