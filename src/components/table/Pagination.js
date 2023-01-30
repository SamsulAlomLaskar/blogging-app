import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { DataConsumer, GlobalContext } from "../context/GlobalContext";

export default function PaginationPage({
  countNumberOfPages,
  initialPage,
  setSelectedPage,
}) {
  // console.log(countNumberOfPages, "TOTal Page");
  return (
    <Stack spacing={1}>
      {/* <h1>{context[0].blogName}</h1> */}
      <Pagination
        // style={{ position: "fixed" }}
        page={initialPage}
        onChange={setSelectedPage}
        count={countNumberOfPages}
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
}
