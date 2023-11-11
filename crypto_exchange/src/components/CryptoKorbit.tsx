import React, { useEffect, useState } from "react";
import { getKorbitItems } from "../api/korbit";

function CryptoKorbit() {
  const [data, setData] = useState({} as any);

  useEffect(() => {
    // if (Object.keys(data).length > 0) return;

    getKorbitItems().then((res) => {
      // setData(res.data);
      console.log(res.data);
    });
  }, []);

  return <div>CryptoKorbit</div>;
}

export default CryptoKorbit;
