  import { useState, useEffect } from "react";
  import { getPartner } from "../../../api/partnersApi";

  export const usePartner = (id) => {
    const [partner, setPartner] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchPartner = async () => {
        setLoading(true);
        const data = await getPartner(id);
        setPartner(data || null);
        setLoading(false);
      };

      fetchPartner();
    }, [id]);

    return { partner, loading };
  };
