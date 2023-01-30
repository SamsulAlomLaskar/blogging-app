import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CancelSaveButton(props) {
  // console.log(props, "SSSSS");
  const closeModal = () => {
    props.closeModal(false);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        justifyContent: "end",
        marginRight: "-24px",
      }}
    >
      <Button
        onClick={closeModal}
        sx={{ textTransform: "capitalize" }}
        variant="outlined"
      >
        Cancel
      </Button>
      {props.buttonID === "create" ? (
        <Button
          onClick={() => props.addDataOnSave()}
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Save
        </Button>
      ) : (
        <Button
          onClick={() => props.sendDataOnSave()}
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Save
        </Button>
      )}
    </Stack>
  );
}
