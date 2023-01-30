import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import styled from "styled-components";
import EditForm from "../modal/EditForm";
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

  const checkDelete = () => {
    props.checkDelete(props.id);
    // console.log(props.datas, "Clicked on delete");
  };

  // console.log(props, "Edit DeleteComponent");

  const openEditModalFun = () => {
    setselectedData(props.datas.filter((val) => props.id === val.si_no));
    /* console.log(
      "Filtered Data",
      props.datas.filter((val) => props.id === val.si_no)
    ); */
    // console.log("Clicked on edit icon", props.datas);
    setopenEditModal(true);
  };
  const closeEditModal = (child) => {
    setopenEditModal(child);
  };
  return (
    <Box>
      <Button
        style={{
          width: "20px",
          marginLeft: "-8px",
          // paddingRight: "px",
        }}
      >
        <EditBtn onClick={openEditModalFun} id={props.id}>
          <EditIcon />
        </EditBtn>
        {openEditModal && (
          <EditForm
            modifyDataFromParent={props.modifyDataFromParent}
            datas={props.datas}
            setDatas={props.setDatas}
            selectedData={selectedData}
            openEditModal={openEditModal}
            openEditModalFun={openEditModalFun}
            closeEditModal={closeEditModal}
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
