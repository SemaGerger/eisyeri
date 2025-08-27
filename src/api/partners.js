import axios from "axios";

// Sayfalamalı v eri
export const getPartners = async (page = 1, limit = 5) => {
  try {
    const res = await axios.get(`/api/partners?page=${page}&limit=${limit}`);
    return res.data.rows || [];
  } catch (err) {
    console.error("Partner verisi çekilemedi:", err);
    throw err;
  }
};
