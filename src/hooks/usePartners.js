import { useState, useEffect } from "react";
import { getPartners } from "../api/partnersApi";

export const usePartners = (page = 1, limit = 5) => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const partnersData = await getPartners(page, limit); // veri çektim
      setPartners(partnersData); // partners state güncelleniyor
      setLoading(false);      
    };
    fetchData();
  }, [page, limit]);

  return { partners, loading };
};
