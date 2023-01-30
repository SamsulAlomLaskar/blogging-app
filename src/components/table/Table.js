import React, { useEffect, useReducer, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import ButtonComponent from "../button/CreateButton";
import SwitchButton from "./SwitchButton";
import EditDeleteComponent from "./EditDeleteComponent";
import PaginationPage from "./Pagination";
import FromDateSelector from "./FromDateSelector";
import ToDateSelector from "./ToDateSelector";
import NorthSharpIcon from "@mui/icons-material/NorthSharp";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";
import "./table.css";

const rows = [
  {
    si_no: 1,
    blogName: "Java Technologies",
    createdDate: "23 Sep 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 2,
    blogName: "MERN",
    createdDate: "17 Aug 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 3,
    blogName: "MEAN",
    createdDate: "16 Oct 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 4,
    blogName: "Java Selenium",
    createdDate: "18 Oct 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 5,
    blogName: "Oracle SQL",
    createdDate: "16 Nov 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 6,
    blogName: "AWS",
    createdDate: "13 Nov 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 7,
    blogName: "Azure",
    createdDate: "27 Jun 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 8,
    blogName: "DevOps",
    createdDate: "26 Jun 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 9,
    blogName: "MEVN",
    createdDate: "19 Aug 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 10,
    blogName: "Python",
    createdDate: "14 Sep 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 11,
    blogName: "AI / ML",
    createdDate: "30 Aug 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 12,
    blogName: "React.Js",
    createdDate: "13 Sep 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 13,
    blogName: "Node.Js",
    createdDate: "17 Jun 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 14,
    blogName: "Angular.Js",
    createdDate: "20 Jul 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 15,
    blogName: "Vue.Js",
    createdDate: "19 Sep 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 16,
    blogName: "C++",
    createdDate: "14 Jul 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 17,
    blogName: "C#",
    createdDate: "30 May 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 18,
    blogName: "Data Science",
    createdDate: "30 Jun 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 19,
    blogName: "Hadoop",
    createdDate: "10 Aug 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 20,
    blogName: "Scala",
    createdDate: "12 Aug 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 21,
    blogName: "UI / UX",
    createdDate: "11 Aug 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 22,
    blogName: "Php",
    createdDate: "10 Jul 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
];

export default function BlogTable() {
  const [datas, setDatas] = useState(rows);
  const [initialPage, setInitialPage] = useState(1);
  const [displayItems, setDisplayItems] = useState(1);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [newState, setnewState] = useState([]);
  const [upDown, setUpDown] = useState("");
  const [checkFromError, setCheckFromError] = useState("");
  const [checkToError, setCheckToError] = useState("");

  const DATA_PER_PAGE = 5;

  //* Deleting elements & updating the state after deleting

  const checkDelete = (child) => {
    setDatas(datas.filter((ele, id) => ele.si_no !== child));
  };

  //* Pagination (Data perpage)
  const countNumberOfPages =
    filteredData.length > 0
      ? Math.ceil(filteredData.length / DATA_PER_PAGE)
      : Math.ceil(datas.length / DATA_PER_PAGE);

  //! To check the selected page of pagination
  // console.log(initialPage, "PAGE NO");
  const setSelectedPage = (event, page) => {
    setInitialPage(page);
    setDisplayItems(page);
  };

  useEffect(() => {
    if (upDown !== "") {
      if (upDown === "up") {
        const sortByDate = (arr) => {
          const sorter = (a, b) => {
            return (
              new Date(a.createdDate).getTime() -
              new Date(b.createdDate).getTime()
            );
          };
          arr.sort(sorter);
        };
        filteredData.length > 0 ? sortByDate(filteredData) : sortByDate(datas);
        filteredData.length > 0
          ? setFilteredData(filteredData)
          : setDatas(datas);
      } else {
        const sortByDate = (arr) => {
          const sorter = (a, b) => {
            return (
              new Date(b.createdDate).getTime() -
              new Date(a.createdDate).getTime()
            );
          };
          arr.sort(sorter);
        };
        filteredData.length > 0 ? sortByDate(filteredData) : sortByDate(datas);
        filteredData.length > 0
          ? setFilteredData(filteredData)
          : setDatas(datas);
      }
    }
  }, [upDown]);

  //! To update & modify the state & display using the pagination

  useEffect(() => {
    const displayDataPerPage = () => {
      const start = (displayItems - 1) * DATA_PER_PAGE;
      const end = start + DATA_PER_PAGE;
      const response =
        filteredData.length > 0
          ? filteredData.slice(start, end)
          : datas.slice(start, end);

      setnewState(response);
    };
    displayDataPerPage();
  }, [displayItems, datas, filteredData, upDown]);

  const checkDateErrorFun = () => {
    if (fromDate && toDate) {
      if (new Date(fromDate).getTime() > new Date(toDate).getTime()) {
        const tempData = [
          {
            si_no: null,
            blogName: "No record found",
            createdDate: `Cannot filter data due to invalid date range`,
            content: "",
          },
        ];
        setFilteredData([...tempData]);
        setCheckFromError("From date cannot be greater than to date");
      } else {
        setCheckFromError("");
        return true;
      }
    }
  };

  useEffect(() => {
    if (checkDateErrorFun()) {
      if (fromDate && toDate) {
        let filData = datas.filter((item) => {
          return (
            new Date(item.createdDate).getTime() >=
              new Date(fromDate).getTime() &&
            new Date(item.createdDate).getTime() <= new Date(toDate).getTime()
          );
        });

        if (filData.length <= 0) {
          filData.push({
            si_no: null,
            blogName: "No record found",
            createdDate: `No records found from ${new Date(
              fromDate
            ).toLocaleDateString()} to ${new Date(
              toDate
            ).toLocaleDateString()}`,
            content: "",
          });
        }
        setFilteredData(filData);
      } else if (!(fromDate && toDate)) {
        setFilteredData(datas);
      }
    }
    // else {
    //   setFilteredData(datas);
    // }
  }, [fromDate, toDate]);

  const saveFromDate = (e) => {
    setFromDate(JSON.parse(JSON.stringify(e)));
  };

  const saveToDate = (e) => {
    setToDate(JSON.parse(JSON.stringify(e)));
  };

  const ascending = () => {
    setUpDown("up");
  };
  const descending = () => {
    setUpDown("down");
  };

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "grey.500",
        borderRadius: "10px",
        marginTop: "-22px",
      }}
    >
      <Box className="filter-section m-1 py-2 row justify-content-start">
        <Box className="col-6 d-flex">
          <Box>
            <Box className="me-1">
              <Typography className="color-text fs-14 ff-PP fw-400">
                From
              </Typography>
              <FromDateSelector
                fromDate={fromDate}
                saveFromDate={saveFromDate}
                setFromDate={setFromDate}
              />
              {checkFromError && (
                <div className="dateError">{checkFromError}</div>
              )}
            </Box>
          </Box>
          <Box className="ms-1">
            <Typography className="color-text fs-14 ff-PP fw-400">
              To
            </Typography>
            <ToDateSelector
              saveToDate={saveToDate}
              toDate={toDate}
              setToDate={setToDate}
            />
            {checkToError && <div className="dateError">{checkToError}</div>}
          </Box>
        </Box>

        <Box className="d-flex col-6 justify-content-end">
          <ButtonComponent
            setDatas={setDatas}
            datas={datas}
            size="medium"
            muiProps="fs-14 ff-PP"
          />
        </Box>
      </Box>
      {/* <DataProvide value={context}> */}
      <TableContainer
        component={Paper}
        style={{ overflowY: "hidden" }}
        className="requires-no-scroll"
      >
        <Table
          sx={{ minWidth: 650, minHeight: 10 }}
          aria-label="simple table"
          // className="requires-no-scroll"
        >
          <TableHead>
            <TableRow style={{ overflowY: "hidden" }}>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                SI. No.
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                Blog Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                Created Date
                <Button
                  id={upDown}
                  onClick={() => ascending()}
                  style={{
                    width: "20px",
                    marginRight: "-8px",
                    paddingRight: "31px",
                  }}
                >
                  <NorthSharpIcon
                    fontSize="small"
                    size="small"
                    fullWidth={false}
                  />
                </Button>
                <Button
                  id={upDown}
                  onClick={descending}
                  style={{
                    width: "10px",
                    marginLeft: "-32px",
                    paddingLeft: "2px",
                  }}
                >
                  <SouthSharpIcon
                    fontSize="small"
                    size="small"
                    fullWidth={false}
                  />
                </Button>
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                Publish / Unpublish
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          {newState.length > 0 ? (
            <TableBody>
              {/* {context.map((row) => ( */}
              {newState.map((row, index) => (
                <TableRow
                  style={{ padding: "12px" }}
                  key={row.si_no}
                  // key={row.si_no}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    style={{ padding: "12px" }}
                    // component="th"
                    scope="row"
                    sx={{ textAlign: "center" }}
                  >
                    {row.si_no}
                    {/* {index + 1} */}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.blogName}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.createdDate}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.blogName === "No record found" ? "" : <SwitchButton />}
                  </TableCell>
                  <TableCell key={row.si_no} sx={{ textAlign: "center" }}>
                    {row.blogName === "No record found" ? (
                      ""
                    ) : (
                      <EditDeleteComponent
                        datas={datas}
                        setDatas={setDatas}
                        checkDelete={checkDelete}
                        id={row.si_no}
                        // modifyDataFromParent={modifyDataFromParent}
                      />
                    )}
                    {/* <EditDeleteComponent
                      datas={datas}
                      setDatas={setDatas}
                      checkDelete={checkDelete}
                      id={row.si_no}
                      // modifyDataFromParent={modifyDataFromParent}
                    /> */}
                  </TableCell>
                </TableRow>
              ))}

              {/*  
             <div>
             <TableRow>
              </TableRow>
              </div> */}
            </TableBody>
          ) : (
            <TableBody
              style={{ minWidth: 650, minHeight: "200px" }}
            ></TableBody>
          )}
        </Table>
      </TableContainer>
      <Box
        style={{
          width: "290px",
          margin: "auto",
          padding: "7px",
        }}
      >
        {newState.length > 0 && (
          <PaginationPage
            countNumberOfPages={countNumberOfPages}
            datas={datas}
            initialPage={initialPage}
            setSelectedPage={setSelectedPage}
            displayItems={displayItems}
          />
        )}
      </Box>
      {/* </DataProvide> */}
    </Box>
  );
}
