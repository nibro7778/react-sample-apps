import axios from "axios";

const KEY = "AIzaSyBiMQ5JxAlsU96zmRosQJsJudDegR9CahM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
