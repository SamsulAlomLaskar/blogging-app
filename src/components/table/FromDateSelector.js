import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function FromDateSelector(props) {
  // const [value, setValue] = React.useState(null);
  const value = props.fromDate;
  // console.log(props.fromDate, "From Date Props");
  /*   const saveFromDate = (val) => {
    setValue(val);
    props.setFromDate(val);
  }; */
  // console.log(value, "From Date Value");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="mm/dd/yyyy"
        value={value}
        className="w-5"
        // onChange={(newValue) => {
        //   props.setFromDate(newValue);
        // }}
        onChange={(val) => props.saveFromDate(val)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
