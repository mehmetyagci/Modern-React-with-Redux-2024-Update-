import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization:
        "Client-ID dba28937347d88249d994981b554ecc4d4b2b770ade79a0419adcb2823f744e4",
    },
    params: {
      query: term,
    },
  });

  return response.data.results; 
};

export default searchImages;