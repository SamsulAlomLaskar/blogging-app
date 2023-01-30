import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BlogName from "../form/BlogNameInputs";
import NavbarModal from "../navbar/NavbarModal";
import ContentInput from "../form/ContentInput";
import CancelSaveButton from "../button/CancelSaveButton";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  //   border: "1px solid #000",
  //   boxShadow: 24,
  p: 3,
  borderRadius: "9px",
  height: 520,
};

export default function ModalComponent(props) {
  const [open, setOpen] = React.useState(props.displayModal);
  const [blogNameError, setBlogNameError] = useState("");
  const [contentError, setContentError] = useState("");

  const si_no = props.datas.length + 1;
  const d = new Date();
  const day = d.getDate();
  const year = d.getFullYear();
  const month = d.toLocaleString("en-us", {
    month: "short",
  });
  const createdDate = `${day} ${month} ${year}`;
  const [addItemToArray, setaddItemToArray] = useState({
    blogName: "",
    content: "",
    createdDate,
    si_no,
  });

  const handleClose = () => {
    setOpen(false);
    props.modalFunction2(false);
  };

  const addDatas = (e) => {
    setaddItemToArray({ ...addItemToArray, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setOpen(false);
    props.modalFunction2(false);
  };

  const addDataOnSave = () => {
    if (addItemToArray.blogName === "" && addItemToArray.content === "") {
      setBlogNameError("Blog Name Cannot be empty");
      setContentError("Content Cannot be empty");
    } else if (addItemToArray.content === "") {
      setContentError("Content Cannot be empty");
      setBlogNameError("");
      console.log("Content Cannot be empty");
    } else if (addItemToArray.blogName === "") {
      setContentError("");
      setBlogNameError("Blog Name Cannot be empty");
    } else {
      setBlogNameError("");
      setContentError("");
      const tempData = props.datas;
      tempData.push(addItemToArray);
      const finalTempData = [...tempData];
      props.setDatas(finalTempData);
      setaddItemToArray({ blogName: "", content: "", createdDate, si_no });
      closeModal();
    }
  };

  return (
    <Box>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <NavbarModal closeModal={closeModal} />
          </Box>
          <Box>
            <BlogName
              blogNameError={blogNameError}
              blogName={addItemToArray.blogName}
              buttonID={props.buttonID}
              addDatas={addDatas}
            />
          </Box>
          <Box>
            <ContentInput
              contentError={contentError}
              content={addItemToArray.content}
              addDatas={addDatas}
              buttonID={props.buttonID}
            />
          </Box>
          <Box style={{ marginTop: "60px", marginRight: "29px" }}>
            <CancelSaveButton
              buttonID={props.buttonID}
              closeModal={closeModal}
              addDataOnSave={addDataOnSave}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
