import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles, Bot, Trash2, RefreshCw } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { COMPANY_DESCRIPTION, VISION, MISSION, SERVICES, COMPANY_CONTACT, REGIONS } from '../constants';
import { ChatMessage } from '../types';

const SUGGESTIONS = [
  "Apa saja layanan Triputra?",
  "Dimana alamat kantornya?",
  "Apakah bisa kirim ke daerah pelosok?",
  "Bagaimana cara kerjasamanya?",
];

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Halo! Saya asisten virtual PT. Triputra Khatulistiwa. Ada yang bisa saya bantu terkait pengiriman logistik hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleReset = () => {
    setMessages([
      { role: 'model', text: 'Halo! Saya asisten virtual PT. Triputra Khatulistiwa. Ada yang bisa saya bantu terkait pengiriman logistik hari ini?' }
    ]);
  };

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    // Add user message immediately
    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const systemInstruction = `
        Anda adalah asisten AI profesional untuk PT. Triputra Khatulistiwa, perusahaan Jasa Ekspedisi Logistik berbasis di Kalimantan Barat.

        INFORMASI PERUSAHAAN (FACT SHEET):
        - Nama: PT. Triputra Khatulistiwa
        - Bidang Usaha: Trucking, Logistik, Forwarder.
        - Direktur Utama: ${COMPANY_CONTACT.director}
        - Direktur: Egi Zulfani, S.H., CPM.
        - Alamat: ${COMPANY_CONTACT.address}
        - Email: ${COMPANY_CONTACT.email}
        - HP/WA: ${COMPANY_CONTACT.phone}
        
        DESKRIPSI:
        ${COMPANY_DESCRIPTION}

        LAYANAN:
        ${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

        VISI: ${VISION}

        WILAYAH OPERASIONAL (14 Kab/Kota):
        ${REGIONS.join(', ')}. Kami melayani pengiriman ke daerah pedalaman/terpencil menggunakan kombinasi jalur darat dan sungai.

        KEBIJAKAN K3:
        Berkomitmen mewujudkan Zero Accident dan menjamin keselamatan karyawan/mitra.

        ATURAN MENJAWAB:
        1. Jawablah dengan singkat, padat, profesional, dan ramah.
        2. Fokus pada keunggulan perusahaan: Menjangkau daerah pelosok Kalimantan Barat (Inland & River).
        3. Jika ditanya HARGA/TARIF: Jawab diplomatis bahwa tarif tergantung berat, volume, dan jarak. Arahkan untuk menghubungi WhatsApp ${COMPANY_CONTACT.phone}.
        4. Jika ditanya LOKASI: Sebutkan alamat di ${COMPANY_CONTACT.address} dan sebutkan kami melayani seluruh Kalbar.
        5. Gunakan Bahasa Indonesia yang baik.
      `;

      // Create history from previous messages
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: { systemInstruction },
        history: history
      });

      // Prepare placeholder for model response
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      const result = await chat.sendMessageStream({ message: textToSend });
      
      let fullText = '';
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const chunkText = c.text || '';
        fullText += chunkText;
        
        // Update the last message (model's response) with the accumulated text
        setMessages(prev => {
          const newArr = [...prev];
          const lastIndex = newArr.length - 1;
          newArr[lastIndex] = { ...newArr[lastIndex], text: fullText };
          return newArr;
        });
      }

    } catch (error) {
      console.error("Gemini Error:", error);
      // Remove the empty model message if it exists and add error
      setMessages(prev => {
        const newArr = prev.filter(m => m.text !== ''); // cleanup empty if any
        return [...newArr, { 
          role: 'model', 
          text: 'Maaf, sepertinya ada gangguan koneksi. Silakan coba lagi atau hubungi WhatsApp kami.', 
          isError: true 
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div ref={chatRef} className="mb-4 w-[350px] md:w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300 ring-1 ring-black/5">
          
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2 rounded-xl shadow-inner">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Triputra Support</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <p className="text-[10px] text-slate-300 uppercase tracking-wide font-medium">Online</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={handleReset} 
                className="hover:bg-white/10 p-2 rounded-full transition-colors text-slate-300 hover:text-white"
                title="Reset Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/10 p-2 rounded-full transition-colors text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-6">
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-2 shrink-0 shadow-sm mt-1">
                    <Sparkles className="w-4 h-4 text-primary-600" />
                  </div>
                )}

                <div 
                  className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-sm shadow-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-br-sm shadow-primary-600/20' 
                      : msg.isError 
                        ? 'bg-red-50 text-red-600 border border-red-100 rounded-bl-sm'
                        : 'bg-white text-slate-700 border border-slate-200 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
               <div className="flex justify-start animate-in fade-in duration-300">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-2 shrink-0 shadow-sm">
                    <Sparkles className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    </div>
                  </div>
               </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions (Only show if few messages) */}
          {messages.length < 3 && !isLoading && (
            <div className="px-4 pb-2 bg-slate-50">
               <p className="text-xs text-slate-400 font-medium mb-2 ml-1">Pertanyaan Populer:</p>
               <div className="flex flex-wrap gap-2">
                 {SUGGESTIONS.map((s, i) => (
                   <button 
                    key={i}
                    onClick={() => handleSend(s)}
                    className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-all shadow-sm"
                   >
                     {s}
                   </button>
                 ))}
               </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100 relative z-20">
            <div className="flex gap-2 items-center bg-slate-50 p-1.5 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:border-primary-500 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Tulis pesan..."
                className="flex-1 px-3 py-2 bg-transparent text-sm focus:outline-none text-slate-700 placeholder:text-slate-400"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className={`p-2.5 rounded-lg transition-all ${
                    isLoading || !input.trim() 
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
                }`}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white p-4 pr-6 rounded-full shadow-2xl hover:shadow-slate-900/40 transition-all hover:-translate-y-1 ring-4 ring-white"
        >
          <div className="relative">
             <MessageCircle className="w-6 h-6" />
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-900 animate-pulse"></span>
          </div>
          <div className="hidden md:flex flex-col items-start">
             <span className="font-bold text-sm leading-tight">Chat CS</span>
             <span className="text-[10px] text-slate-400 leading-tight">Online 24/7</span>
          </div>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;