import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function ButtonAppBar(props) {
  const closeModalFunction = () => {
    props.closeModal(false);
  };
  return (
    <Box
      style={{
        width: "108%",
        position: "relative",
        left: -22,
        boxShadow: "0 2px 2px -1px rgba(0, 0, 0, 0.1)",
      }}
      /*  style={{
        width: "100%",
        webkitBoxShadow: "0 10px 10px -10px #000000",
        mozBoxShadow: "0 10px 10px -10px #000000",
        boxShadow: "0 10px 10px -10px #000000",
      }} */
    >
      <Toolbar sx={{ marginTop: "-25px" }}>
        <Typography
          component="div"
          sx={{
            flexGrow: 1,
            color: "#29638e",
            fontFamily: "monospace",
            marginLeft: "1px",
          }}
        >
          Create Blog
        </Typography>
        <Button sx={{ color: "grey" }} onClick={closeModalFunction}>
          <CloseOutlinedIcon />
        </Button>
      </Toolbar>
    </Box>
  );
}
