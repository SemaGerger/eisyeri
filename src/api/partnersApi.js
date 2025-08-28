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
