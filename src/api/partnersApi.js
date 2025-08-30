import axios from "axios";

export const getPartners = async (page = 1, limit = 5) => {
  try {
    const res = await axios.get(`/api/partners?page=${page}&limit=${limit}`, {
      timeout: 50000,
      withCredentials: true,
    });
    return res.data.rows || [];
  } catch (err) {
    console.error("Partner verisi çekilemedi:", err);
    return [];
  }
};

/*export const getPartners = async (page = 1, limit = 5) => {
  try {
    // URL oluştur
    const url = `/api/partners?page=${page}&limit=${limit}`;

    // fetch isteği at
    const controller = new AbortController(); // timeout için
    const timeout = setTimeout(() => controller.abort(), 50000); // 50 saniye

    const res = await fetch(url, {
      method: "GET",
      credentials: "include", // withCredentials: true karşılığı
      signal: controller.signal, // timeout çalışsın diye
    });

    clearTimeout(timeout); // başarılı olursa timeout'u temizle

    // response'un body kısmını JSON'a çevir
    if (!res.ok) {
      // 200 dışında bir durumsa hata fırlat
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data.rows || [];
  } catch (err) {
    console.error("Partner verisi çekilemedi:", err);
    return [];
  }
};
*/
