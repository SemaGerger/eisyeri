import belediyeLogo from "../assets/logos/bcekmecebldlogo.png";
import esitIsyeriLogo from "../assets/logos/esitisyeri-kalp-logo.png";
import esitIsyeriYazisiLogo from "../assets/logos/esitisyeri-yazisi-logo.png";
import heroVideo from "../assets/videos/esitIsyeriVideo.mp4";




const siteConfig = {

  // Menü linkleri
  navLinks: [
    { name: "AnaSayfa", to: "/" },
    { name: "Başkan Hakkında", to: "/baskan-hakkinda" },
    { name: "Eşit İşyerleri", to: "/esit-isyerleri" },
    { name: "Hakkımızda", to: "/hakkimizda" },
    { name: "Bize Ulaşın", to: "/iletisim" },
    { name: "Logomuz", to: "/logomuz" },
  ],

  // Hero
  hero: {
    title: "Esit İsyeri",
    highlight: "Projesi",
    subtitle: "Büyükçekmece Belediyesi Ruhsat ve Denetim Müdürlüğü",
    ctaText: "İşyerinizi Kaydedin",
    video: heroVideo,
  },
  // Belediye
  belediyeName: "Büyükçekmece Belediyesi",
  belediyeUrl: "https://www.bcekmece.bel.tr",

  // Logolar
  assets: {
    logos: {
      belediye: {
        src: belediyeLogo,
        alt: "Büyükçekmece Belediyesi",
      },
      esitIsyeri: {
        src: esitIsyeriLogo,
        alt: "Eşit İşyeri",
      },
      esitIsyeriYazisi: {
        src: esitIsyeriYazisiLogo,
        alt: "Eşit İşyeri Yazısı",
      },
    },
  },

  // İletişim
  contact: {
    phone: "+90 212 123 45 67",
    email: "info@bcekmece.bel.tr",
    address: "Büyükçekmece Belediyesi, İstanbul, Türkiye",
  },

  // Sosyal medya
  socialLinks: {
    facebook: "https://facebook.com/bcekmecebld",
    twitter: "https://twitter.com/bcekmecebld",
    instagram: "https://instagram.com/bcekmecebld",
    youtube: "https://youtube.com/@bcekmecebld",
  },


  // Default işlemler
  defaultTexts: {
    partnerName: "İsim yok",
    partnerContact: "Yetkili yok",
    partnerActivity: "Faaliyet türü yok",
  },



  // Tema
  theme: {
    colors: {
      primary: "#004aad",
      secondary: "#00b4d8",
      gray: "#6b7280",
    },
  },
};

export default siteConfig;
