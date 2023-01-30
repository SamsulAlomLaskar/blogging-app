import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function ToDateSelector(props) {
  // const [value, setValue] = React.useState(null);
  const value = props.toDate;
  // console.log(value, "Date");
  /*  const saveToDate = (val) => {
    setValue(val);
    props.setToDate(val);
  }; */

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="mm/dd/yyyy"
        value={value}
        className="w-5"
        onChange={(val) => props.saveToDate(val)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
