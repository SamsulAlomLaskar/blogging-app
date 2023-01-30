import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import styled from "styled-components";
import EditForm from "../modal/EditForm";
import ModalComponent from "../modal/ModalComponent";
const EditBtn = styled.div`
  color: grey;
  transition: 0.24s ease-in-out;
  &:hover {
    color: blue;
    scale: 120%;
  }
`;
const DeleteBtn = styled.div`
  color: grey;
  transition: 0.24s ease-in-out;
  &:hover {
    color: red;
    scale: 120%;
  }
`;
function EditDeleteComponent(props) {
  const [openEditModal, setopenEditModal] = useState(false);
  const [selectedData, setselectedData] = useState();
  // const [datas, setDatas] = useState(props.id);
  // console.log("selectedData", props.datas);
  const checkDelete = () => {
    props.checkDelete(props.id);
    console.log(props.datas, "Clicked on delete");
  };

  const openEditModalFun = () => {
    let filteredData = props.datas.filter((val) => props.id === val.si_no);
    setselectedData(filteredData[0]);
    console.log(
      "Filtered Data",
      props.datas.filter((val) => props.id === val.si_no)
    );
    setopenEditModal(true);
    // console.log("Clicked on edit icon", props.datas);
  };
  const closeEditModal = (child) => {
    setopenEditModal(false);
  };
  return (
    <Box>
      <Button>
        <EditBtn
          onClick={() => {
            openEditModalFun();
          }}
          id={props.id}
        >
          <EditIcon />
        </EditBtn>
        {openEditModal && (
          <EditForm
            selectedData={selectedData}
            openEditModal={openEditModal}
            openEditModalFun={openEditModalFun}
            closeEditModal={closeEditModal}
          /> 
    
          <ModalComponent
            selectedData={selectedData}
            openModal={openEditModal}
            closeModal={closeEditModal}
          />
        )}
      </Button>
      <Button onClick={checkDelete}>
        <DeleteBtn>
          <DeleteIcon />
        </DeleteBtn>
      </Button>
    </Box>
  );
}

export default EditDeleteComponent;
