// src/config/siteConfig.js

import belediyeLogo from "../assets/logos/bcekmecebldlogo.png";

const siteConfig = {
    
  // Genel Site Bilgileri
  siteName: "Büyükçekmece Belediyesi",
  slogan: "Halkımız için daha iyi bir gelecek",
  baseUrl: "https://www.bcekmece.bel.tr",

  // Logolar
  assets: {
    belediyeLogo: belediyeLogo,
  },

  // Menü Linkleri
  navLinks: [
    { name: "AnaSayfa", to: "/" },
    { name: "Başkan Hakkında", to: "/baskan-hakkinda" },
    { name: "Eşit İşyerleri", to: "/esit-isyerleri" },
    { name: "Hakkımızda", to: "/hakkimizda" },
    { name: "Bize Ulaşın", to: "/iletisim" },
    { name: "Logomuz", to: "/logomuz" },
  ],

  // İletişim Bilgileri
  contact: {
    phone: "+90 212 123 45 67",
    email: "info@bcekmece.bel.tr",
    address: "Büyükçekmece Belediyesi, İstanbul, Türkiye",
  },

  // Sosyal Medya
  socialLinks: {
    facebook: "https://facebook.com/bcekmecebld",
    twitter: "https://twitter.com/bcekmecebld",
    instagram: "https://instagram.com/bcekmecebld",
    youtube: "https://youtube.com/@bcekmecebld",
  },

  // Tema Ayarları
  theme: {
    colors: {
      primary: "#004aad",
      secondary: "#00b4d8",
      gray: "#6b7280",
    },
  },
};

export default siteConfig;
