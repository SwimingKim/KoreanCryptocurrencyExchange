import axios from "axios";

export const getKorbitItems = async () => {
  const response = await axios.get(
    "https://api.korbit.co.kr/v1/ticker/detailed/all"
  );
  return response.data;
};
