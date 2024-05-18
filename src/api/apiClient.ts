import axios from "axios";

export const Get_Tags = axios.create({
  baseURL: process.env.MAIN_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "X-Country-Id": "TR",
    "X-Language-Id": "TR",
  },
});

export const Get_Promotion = axios.create({
  baseURL: process.env.MAIN_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "X-Country-Id": "TR",
    "X-Language-Id": "TR",
  },
});

export const Get_PromotionDetails = axios.create({
  baseURL: process.env.MAIN_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "X-Country-Id": "TR",
    "X-Language-Id": "TR",
  },
});
