import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-32 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Solusi Logistik Terintegrasi</h2>
                <p className="text-lg text-slate-600">
                    Kami menyediakan layanan ekspedisi komprehensif mulai dari pengiriman reguler, kargo alat berat, hingga distribusi ke wilayah pedalaman Kalimantan Barat.
                </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors">
                Lihat Detail <ArrowUpRight className="w-5 h-5" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-slate-100 relative overflow-hidden"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                 <div className="text-primary-600 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" })}
                 </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">
                {service.description}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 cursor-pointer">
                Konsultasi Layanan <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
             <button className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors">
                Lihat Detail <ArrowUpRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Services;