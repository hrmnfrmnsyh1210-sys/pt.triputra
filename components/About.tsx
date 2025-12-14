import React from 'react';
import { Target, ShieldCheck, Map, Users, FileText, UserCheck } from 'lucide-react';
import { COMPANY_DESCRIPTION, VISION, MISSION, COMPANY_CONTACT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="relative">
                 <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Truck on road" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100 max-w-xs">
                    <p className="text-sm text-slate-500 font-medium mb-1">Direktur Utama</p>
                    <p className="text-xl font-bold text-slate-900">{COMPANY_CONTACT.director}</p>
                </div>
            </div>

            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 font-semibold text-xs uppercase tracking-wider mb-4">
                    <Target className="w-4 h-4" /> Tentang Kami
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                    Ekspedisi <span className="text-primary-600">Kalimantan Barat</span> Terpercaya
                </h2>
                <div className="prose prose-lg prose-slate text-slate-600 mb-8 whitespace-pre-line">
                    {COMPANY_DESCRIPTION}
                </div>
                
                {/* Legal Data Mini Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <FileText className="w-5 h-5 text-secondary-500" />
                            <span className="font-bold text-slate-900 text-sm">NPWP Perusahaan</span>
                        </div>
                        <p className="text-slate-600 text-sm font-mono">{COMPANY_CONTACT.npwp}</p>
                    </div>
                     <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <FileText className="w-5 h-5 text-secondary-500" />
                            <span className="font-bold text-slate-900 text-sm">Akta Pendirian</span>
                        </div>
                        <p className="text-slate-600 text-sm">{COMPANY_CONTACT.akta}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Vision & Mission Section */}
        <div id="vision" className="grid lg:grid-cols-12 gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

             <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-primary-600 text-white flex items-center justify-center">
                        <Target className="w-6 h-6" />
                    </span>
                    Visi Kami
                </h3>
                <p className="text-slate-600 leading-relaxed italic">
                    "{VISION}"
                </p>
             </div>

             <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-secondary-500 text-white flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6" />
                    </span>
                    Misi Kami
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    {MISSION.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 shrink-0"></div>
                            <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default About;