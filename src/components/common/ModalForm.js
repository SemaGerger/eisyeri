const ModalForm = ({ show, onClose }) => {
  if (!show) return null; // kapalıysa hiçbir şey render etmez

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-96 relative">
        {/* Kapatma butonu */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">İşyeri Kayıt Formu</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="İşyeri Adı"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="E-posta"
            className="w-full border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Telefon"
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
