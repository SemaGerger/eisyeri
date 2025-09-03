import { useState, useEffect } from "react";
import { getPartners } from "../api/partnersApi";

export const usePartners = (page = 1, limit = 5) => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const partnersDataApi = await getPartners(page, limit);

        // sadece API’den gelen veriyi kullan, yoksa boş dizi
        if (partnersDataApi && partnersDataApi.length > 0) {
          setPartners(partnersDataApi);
        } else {
          setPartners([]); // veri yoksa boş dizi
        }
      } catch (err) {
        console.error("Partner verisi çekilemedi:", err);
        setPartners([]); // hata olursa da boş dizi
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);

  return { partners, loading };
};
