import { useState, useEffect } from "react";
import { getPartners } from "../api/partnersApi";
import { partnersData } from "../data/DefaultData";

export const usePartners = (page = 1, limit = 5) => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const partnersDataApi = await getPartners(page, limit);

        if (partnersDataApi && partnersDataApi.length > 0) {
          setPartners(partnersDataApi);
        } else {
          // fallback data
          setPartners(partnersData.slice(0, limit));
        }
      } catch (err) {
        console.error("Partner verisi çekilemedi, fallback data kullanılıyor:", err);
        setPartners(partnersData.slice(0, limit)); // hata olursa da fallback data
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, limit]);

  return { partners, loading };
};
