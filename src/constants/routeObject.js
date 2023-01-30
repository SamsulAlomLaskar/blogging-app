import { Box } from "@mui/material";
import SeminarTable from "../components/table/seminar/Table";
import BlogTable from "../components/table/Table";

const routesObject = [
  {
    path: "/",
    element: <BlogTable />,
  },
  {
    path: "/blog",
    element: <BlogTable />,
  },
  {
    path: "/seminar",
    element: <SeminarTable />,
  },
  {
    path: "/*",
    element: <Box>No Page Found</Box>,
  },
];
export default routesObject;
