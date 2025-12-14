import React from 'react';
import { Clock, ShieldCheck, Banknote, HeartHandshake, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-primary-950 text-white relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
             <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary-800 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-secondary-800 rounded-full blur-[80px]"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
                 <div className="grid sm:grid-cols-2 gap-5">
                    {[
                        { icon: <Clock />, title: "Cepat & Tepat", desc: "Estimasi waktu akurat untuk rute sulit sekalipun." },
                        { icon: <ShieldCheck />, title: "Aman Terjamin", desc: "SOP penanganan barang standar tinggi." },
                        { icon: <Banknote />, title: "Harga Kompetitif", desc: "Solusi efisien untuk UMKM & Korporat." },
                        { icon: <HeartHandshake />, title: "Mitra Fleksibel", desc: "Kerjasama B2B & B2G yang transparan." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-secondary-400 mb-4 group-hover:scale-110 transition-transform">
                                {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                 </div>
            </div>

            <div className="order-1 lg:order-2">
                <span className="text-secondary-400 font-bold tracking-wider uppercase text-xs mb-3 block">Kenapa Memilih Kami?</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Lebih dari Sekedar <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Pengiriman Barang</span>
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
                    Kami memahami bahwa setiap paket membawa amanah. Dengan pengalaman bertahun-tahun menaklukkan medan Kalimantan, kami memastikan bisnis Anda terus berjalan tanpa hambatan logistik.
                </p>
                
                <ul className="space-y-4 mb-10">
                    {['Jaringan Luas di Pedalaman', 'Tracking Real-time', 'Asuransi Pengiriman Opsional'].map((point, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-200">
                            <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-secondary-500/20">
                    Pelajari Kemitraan
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Features;