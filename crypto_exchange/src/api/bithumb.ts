import axios from "axios";

export const getBithumbItems = async () => {
  const response = await axios.get(
    "https://api.bithumb.com/public/assetsstatus/ALL"
  );
  return response.data;
};
