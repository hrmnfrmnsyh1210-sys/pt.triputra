import React from "react";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "../constants";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Logistics Warehouse"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            // Fallback to placeholder if local image is missing
            target.src =
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
          }}
        />
        {/* Modern multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-secondary-300 font-semibold text-xs uppercase tracking-wider mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse"></span>
              Jangkauan Seluruh Kalimantan Barat
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 tracking-tight">
              Kirim ke Pelosok <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-primary-300">
                Tanpa Batas
              </span>
            </h1>

            <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 font-light">
              Solusi logistik terpercaya untuk pengiriman cepat, aman, dan
              terjangkau hingga ke daerah terpencil yang sulit diakses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <a
                href="#services"
                className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-lg shadow-secondary-500/25"
              >
                Lihat Layanan
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold transition-all hover:-translate-y-1 shadow-lg"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
