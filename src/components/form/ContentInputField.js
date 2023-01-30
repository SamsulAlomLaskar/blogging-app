import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ContentInputField(props) {
  const [editContentInput, setEditContentInput] = useState(props.dataRecieved);

  let content = props.content;
  const setEditedData = (e) => {
    const tempContentInput = [...editContentInput];
    tempContentInput[0].content = e.target.value;

    setEditContentInput([...tempContentInput]);
    props.setdataToEdit(...editContentInput);
  };

  return (
    <Box
      sx={{
        width: 545,
        maxWidth: "100%",
        marginTop: "35px",
        height: "200px",
      }}
    >
      {props.buttonID === "create" ? (
        <TextField
          sx={{ left: "3px", height: "55px" }}
          multiline
          rows={9}
          name="content"
          value={content}
          onChange={(e) => props.addDatas(e)}
          fullWidth
          placeholder="Type here...."
          id="fullWidth"
        />
      ) : (
        <TextField
          sx={{ left: "3px", height: "55px" }}
          onChange={setEditedData}
          // onChange={(e) => {
          //   setEditedData();
          // }}
          name="contentField"
          multiline
          rows={9}
          value={editContentInput[0].content}
          fullWidth
          id="fullWidth"
        />
      )}{" "}
      {props.contentError && (
        <div style={{ fontSize: "12px", color: "red", marginTop: "188px" }}>
          {props.contentError}
        </div>
      )}
    </Box>
  );
}
