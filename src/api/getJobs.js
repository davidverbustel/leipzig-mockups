import axios from "axios";

const baseUrl = process.env.VUE_APP_API_URL;
const response = await axios.get(`${baseUrl}/jobs`);
