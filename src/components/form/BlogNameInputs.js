import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputField from "./BlogNameInputField";

export default function BlogName(props) {
  const [dataRecieved, setdataRecieved] = useState(props.dataToEdit);
  return (
    <FormControl variant="standard">
      <InputLabel
        sx={{
          width: 500,
          maxWidth: "100%",
          left: "3px",
          marginTop: "20px",
        }}
        shrink
        htmlFor="bootstrap-input"
      >
        Blog Name
      </InputLabel>
      <InputField
        blogNameError={props.blogNameError}
        blogName={props.blogName}
        addDatas={props.addDatas}
        dataRecieved={dataRecieved}
        buttonID={props.buttonID}
      />
    </FormControl>
  );
}
