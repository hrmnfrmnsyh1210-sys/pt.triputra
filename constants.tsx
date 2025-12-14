import React from "react";
import {
  Truck,
  MapPin,
  Package,
  Users,
  Building2,
  Anchor,
  Briefcase,
  Shield,
} from "lucide-react";
import { NavItem, ServiceItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Visi Misi", href: "#vision" },
  { label: "Layanan", href: "#services" },
  { label: "Kontak", href: "#contact" },
];

export const COMPANY_CONTACT = {
  address: "Jl. Purnajaya 1 No. 28, Kalimantan Barat",
  phone: "+62 897-1766-743",
  email: "triputrakhatulistiwa@gmail.com",
  npwp: "931014905707000",
  akta: "14/04 Maret 2023",
  director: "Syahrul Raniandi",
};

export const WHATSAPP_URL =
  "https://wa.me/628971766743?text=Halo%20Admin%20Triputra%20Khatulistiwa,%20saya%20ingin%20bertanya%20tentang%20layanan%20pengiriman.";

export const SERVICES: ServiceItem[] = [
  {
    title: "Trucking & Transportasi Darat",
    description:
      "Layanan pengangkutan barang menggunakan armada truk yang handal untuk menjangkau seluruh wilayah Kalimantan Barat, termasuk daerah pedalaman.",
    icon: <Truck className="w-8 h-8 text-primary-600" />,
    image: "/images/services/trucking.jpg",
  },
  {
    title: "Jasa Logistik & Distribusi",
    description:
      "Manajemen distribusi barang dari gudang hingga ke tangan konsumen (Last Mile Delivery) dengan sistem pelacakan real-time.",
    icon: <Package className="w-8 h-8 text-primary-600" />,
    image: "/images/services/distribution.jpg",
  },
  {
    title: "Freight Forwarding",
    description:
      "Pengurusan pengiriman kargo skala besar, baik antar kota maupun lintas pulau, dengan penanganan dokumen yang lengkap.",
    icon: <Anchor className="w-8 h-8 text-primary-600" />,
    image: "/images/services/freight.jpg",
  },
  {
    title: "Logistik Proyek & Alat Berat",
    description:
      "Spesialisasi pengiriman material konstruksi dan alat berat untuk proyek pembangunan, pertanian, dan pertambangan.",
    icon: <Building2 className="w-8 h-8 text-primary-600" />,
    image: "/images/services/project.jpg",
  },
  {
    title: "Pengiriman Pelosok (Inland & River)",
    description:
      "Mengoptimalkan rute kombinasi darat dan sungai (Sungai Kapuas & Melawi) untuk menjangkau wilayah terisolir.",
    icon: <MapPin className="w-8 h-8 text-primary-600" />,
    image: "/images/services/remote.jpg",
  },
  {
    title: "Kemitraan B2B & Pemerintah",
    description:
      "Kerja sama strategis dengan instansi pemerintah dan perusahaan swasta untuk kebutuhan distribusi rutin.",
    icon: <Briefcase className="w-8 h-8 text-primary-600" />,
    image: "/images/services/partnership.jpg",
  },
];

export const COMPANY_DESCRIPTION = `PT. Triputra Khatulistiwa merupakan perusahaan jasa ekspedisi yang berbasis di Kalimantan Barat dan fokus pada layanan pengiriman barang di seluruh wilayah provinsi tersebut. Perusahaan kami hadir untuk menjawab kebutuhan logistik yang cepat, aman, dan terjangkau—terutama di daerah-daerah terpencil dan pedalaman yang seringkali sulit dijangkau oleh penyedia jasa logistik konvensional.

Kami menawarkan kerja sama dengan berbagai pihak, termasuk UMKM, pelaku e-commerce, instansi pemerintah, perusahaan swasta, hingga komunitas lokal, berdasarkan kompetensi dan jaringan distribusi yang telah kami bangun selama bertahun-tahun.`;

export const VISION =
  "Menjadi perusahaan jasa ekspedisi dan logistik terdepan di Kalimantan Barat yang andal, inovatif, dan berkelanjutan, serta menjadi mitra strategis dalam memperkuat rantai distribusi barang untuk mendukung pertumbuhan ekonomi lokal, nasional, dan konektivitas wilayah terpencil.";

export const MISSION = [
  "Memberikan layanan ekspedisi yang cepat, aman, transparan, dan terjangkau untuk seluruh lapisan masyarakat dan pelaku usaha di Kalimantan Barat.",
  "Memperluas jaringan distribusi secara merata ke seluruh kabupaten dan kecamatan di Kalimantan Barat, termasuk wilayah terisolir.",
  "Mengintegrasikan teknologi digital dalam sistem operasional demi meningkatkan efisiensi dan akurasi.",
  "Membangun SDM profesional yang berkomitmen tinggi terhadap keselamatan (K3) dan pelayanan.",
  "Mendukung pemberdayaan ekonomi lokal, khususnya UMKM, petani, dan nelayan.",
  "Menerapkan standar manajemen mutu dan keselamatan kerja terbaik (Zero Accident).",
  "Menjalin kemitraan strategis dengan pemerintah daerah dan sektor swasta.",
];

export const REGIONS = [
  "Pontianak",
  "Singkawang",
  "Kubu Raya",
  "Mempawah",
  "Sambas",
  "Bengkayang",
  "Landak",
  "Sanggau",
  "Sekadau",
  "Sintang",
  "Melawi",
  "Kapuas Hulu",
  "Ketapang",
  "Kayong Utara",
];
