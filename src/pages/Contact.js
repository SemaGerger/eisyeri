
import React, { useState } from "react";
import Layout from "../layouts/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // backend API olacak
    alert("Mesajınız gönderildi!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
    <div className="max-w-6xl mx-auto px-4 py-12 mt-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Bize Ulaşın
      </h1>

      {/* Map */}
      <div className="mb-12">
<iframe
  src="https://maps.google.com/maps?q=41.02115252472539,28.5852208036723&hl=tr&z=16&output=embed"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>


      </div>

      {/* İletişim Bilgileri */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">İletişim Bilgileri</h2>
          <p className="text-gray-700 mb-4">
            <strong>Adres:</strong> Büyükçekmece Belediyesi, İstanbul, Türkiye
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Telefon:</strong> +90 212 123 45 67
          </p>
          <p className="text-gray-700 mb-4">
            <strong>E-posta:</strong> info@buyukcekmece.bel.tr
          </p>
        </div>

        {/* Öneri Formu */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Öneri ve Mesajınız</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Adınız"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-posta"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mesajınız"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
     </Layout>
  );
};

export default Contact;
