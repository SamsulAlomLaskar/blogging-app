import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BlogName from "../form/BlogNameInputs";
import ContentInput from "../form/ContentInput";
import CancelSaveButton from "../button/CancelSaveButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  p: 3,
  borderRadius: "9px",
  height: 480,
};
export default function EditForm(props) {
  const [open, setOpen] = useState(props.openEditModal);
  const [dataToEdit, setdataToEdit] = useState(props.selectedData);

  const sendDataOnSave = () => {
    console.log(dataToEdit, "Data to edit");
    let indexOfAry = null;
    const tempData = [...props.datas];
    tempData.map((item, index) => {
      if (item.si_no === dataToEdit.si_no) {
        indexOfAry = index;
      }
    });
    tempData.splice(indexOfAry, 1, dataToEdit);
    props.setDatas(tempData);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    props.closeEditModal(false);
  };

  const closeModal = () => {
    setOpen(false);
    props.closeEditModal(false);
  };

  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <BlogName setdataToEdit={setdataToEdit} dataToEdit={dataToEdit} />
          </Box>
          <Box>
            <ContentInput
              setdataToEdit={setdataToEdit}
              dataToEdit={dataToEdit}
            />
          </Box>
          <Box style={{ marginTop: "60px", marginRight: "29px" }}>
            <CancelSaveButton
              sendDataOnSave={sendDataOnSave}
              closeModal={closeModal}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
