import axios from "axios";

export const getUpbitItems = async () => {
    const response = await axios.get("https://api.upbit.com/v1/market/all?isDetails=false")
    return response.data
}