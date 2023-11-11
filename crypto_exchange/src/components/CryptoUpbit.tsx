import React, { useEffect, useState } from "react";
import { getUpbitItems } from "../api/upbit";
import { Chip, Stack } from "@mui/material";

function CryptoUpbit() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length > 0) return;

    console.log("get items...");
    getUpbitItems().then((res) => {
      setData(res);
    });
  }, [data]);

  return (
    <>
      <div>CryptoUpbit!</div>

      <Stack>
        {data.map((item: any) => {
          return (
            <Chip
              key={item.market}
              label={item.korean_name + "(" + item.market + ")"}
            />
          );
        })}
      </Stack>

      {/* {data} */}
    </>
  );
}

export default CryptoUpbit;
