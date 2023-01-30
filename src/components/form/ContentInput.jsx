import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ContentInputField from "./ContentInputField";

export default function ContentInput(props) {
  const [dataRecieved, setdataRecieved] = useState(props.dataToEdit);
  // console.log(props, "PArent of input field");
  return (
    <FormControl variant="standard">
      <InputLabel
        sx={{
          width: 500,
          maxWidth: "100%",
          left: "3px",
          marginTop: "15px",
        }}
        shrink
        htmlFor="bootstrap-input"
      >
        Content
      </InputLabel>
      <ContentInputField
        contentError={props.contentError}
        content={props.content}
        addDatas={props.addDatas}
        setdataToEdit={props.setdataToEdit}
        dataRecieved={dataRecieved}
        buttonID={props.buttonID}
      />
    </FormControl>
  );
}
