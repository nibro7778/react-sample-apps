import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KupdFolSOj7zGznzfrRy92monEB3ygkncct_A-OSvC4",
  },
});
