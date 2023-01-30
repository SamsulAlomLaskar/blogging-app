import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputField(props) {
  const [editBlogName, setEditBlogName] = useState(props.dataRecieved);
  let blogName = props.blogName;

  const setBlogName = (e) => {
    let tempBlogName = [...editBlogName];
    tempBlogName[0].blogName = e.target.value;
    setEditBlogName(tempBlogName);
  };

  return (
    <Box
      sx={{
        width: 545,
        maxWidth: "100%",
        marginTop: "40px",
      }}
    >
      {props.buttonID === "create" ? (
        <TextField
          sx={{ left: "3px" }}
          fullWidth
          placeholder="Enter Blog Name"
          name="blogName"
          onChange={(e) => props.addDatas(e)}
          value={blogName}
          id="fullWidth"
        />
      ) : (
        <TextField
          sx={{ left: "3px" }}
          onChange={setBlogName}
          fullWidth
          value={editBlogName[0].blogName}
          id="fullWidth"
        />
      )}
      {props.blogNameError && (
        <div style={{ fontSize: "12px", color: "red" }}>
          {props.blogNameError}
        </div>
      )}
    </Box>
  );
}
