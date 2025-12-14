import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-500 rounded flex items-center justify-center text-white font-bold shadow-lg">
                TK
              </div>
              <h2 className="text-white font-bold text-lg">PT. Triputra Khatulistiwa</h2>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Mitra logistik terpercaya Anda di Kalimantan Barat. Menghubungkan daerah terpencil dengan solusi pengiriman cepat, aman, dan terjangkau.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span>{COMPANY_CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span>{COMPANY_CONTACT.email}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Tautan Cepat</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#vision" className="hover:text-primary-400 transition-colors">Visi & Misi</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Layanan</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Cek Tarif</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
             <h3 className="text-white font-bold text-lg mb-6">Jam Operasional</h3>
             <p className="text-sm text-slate-400 mb-4">
               Senin - Sabtu: 08.00 - 17.00 WIB<br/>
               Minggu/Libur: Tutup (Kecuali Janjian)
             </p>
             <button className="w-full py-3 bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-500 hover:to-secondary-400 text-white rounded-lg font-bold transition-all shadow-lg shadow-secondary-500/20">
               Hubungi WhatsApp
             </button>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} PT. Triputra Khatulistiwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;