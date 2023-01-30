import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Tabs.css";
import { useLocation, Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function tabs(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsPanel({ children }) {
  const [value, setValue] = React.useState(0);
  const { pathname } = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ border: 1, borderColor: "divider" }}>
        <Tabs
          style={{ backgroundColor: "none" }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Link underline="none" className="text-decoration-none" to="/blog">
            <Tab
              className={`${
                pathname === "/blog" ? "active-tab" : "nonactive-tab"
              }`}
              pathname="/blog"
              key="blog"
              label="Blog"
              sx={{ textTransform: "capitalize" }}
              {...tabs(0)}
            />
          </Link>
          <Link underline="none" className="text-decoration-none" to="/seminar">
            <Tab
              className={`${
                pathname === "/seminar" ? "active-tab" : "nonactive-tab"
              }`}
              pathname="/seminar"
              key="seminar"
              label="Seminar"
              sx={{ textTransform: "capitalize" }}
              {...tabs(1)}
            />
          </Link>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {children}
      </TabPanel>
    </Box>
  );
}
