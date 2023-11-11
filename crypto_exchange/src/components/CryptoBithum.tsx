import React, { useEffect, useState } from "react";
import { getBithumbItems } from "../api/bithumb";
import { Chip, Stack } from "@mui/material";

function CryptoBithum() {
  const [data, setData] = useState({} as any);

  useEffect(() => {
    if (Object.keys(data).length > 0) return;

    getBithumbItems().then((res) => {
      setData(res.data);
    });
  }, [data]);

  return (
    <>
      <div>CryptoBithum....</div>

      <Stack>
        {Object.keys(data).map((item: any) => {
          return (
            !!data[item].deposit_status &&
            !!data[item].withdrawal_status && <Chip key={item} label={item} />
          );
        })}
      </Stack>
    </>
  );
}

export default CryptoBithum;
