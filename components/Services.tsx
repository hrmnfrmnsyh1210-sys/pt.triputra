import React from "react";
import { SERVICES } from "../constants";
import { ArrowUpRight, ImageOff } from "lucide-react";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-32 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Solusi Logistik Terintegrasi
            </h2>
            <p className="text-lg text-slate-600">
              Kami menyediakan layanan ekspedisi komprehensif mulai dari
              pengiriman reguler, kargo alat berat, hingga distribusi ke wilayah
              pedalaman Kalimantan Barat.
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
              className="group bg-white rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 relative overflow-hidden flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 z-10 transition-colors duration-300"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    // Fallback to a nice placeholder if local image is missing
                    target.src =
                      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800";
                  }}
                />

                {/* Floating Icon */}
                <div className="absolute -bottom-6 right-6 z-20 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-50">
                  <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                    {React.cloneElement(
                      service.icon as React.ReactElement<{
                        className?: string;
                      }>,
                      { className: "w-6 h-6" }
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 cursor-pointer border-t border-slate-100 pt-4 mt-auto">
                  Konsultasi Layanan <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>

              {/* Hover Line Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
