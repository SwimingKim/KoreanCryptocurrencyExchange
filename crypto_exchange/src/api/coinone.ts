import axios from "axios";

export const getCoinonItems = async () => {
    const response = await axios.get("https://api.coinone.co.kr/public/v2/markets/KRW")
    return response.data
}