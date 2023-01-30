import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ModalComponent from "../modal/ModalComponent";

export default function ButtonComponent(props) {
  const [displayModal, setdisplayModal] = React.useState(false);
  const [buttonID, setButtonID] = useState();
  const modalFunction = () => {
    setButtonID("create");
    setdisplayModal(true);
  };
  const modalFunction2 = (childData) => {
    // console.log("YYYYYYYYYYYYYY");
    setdisplayModal(childData);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => modalFunction()}
        sx={{ textTransform: "none", marginTop: "28px" }}
        // size="medium"
        className="h-50 p-3"
        variant="contained"
      >
        Create Blog
      </Button>
      {displayModal && (
        <ModalComponent
          setDatas={props.setDatas}
          datas={props.datas}
          modalFunction2={modalFunction2}
          buttonID={buttonID}
          modalFunction={modalFunction}
          displayModal={displayModal}
        />
      )}
    </Stack>
  );
}
