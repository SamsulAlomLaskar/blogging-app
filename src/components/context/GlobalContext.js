import { createContext } from "react";

let data = [
  { si_no: 1, blogName: "Sava Technologies", createdDate: "23 Aug 2022" },
  { si_no: 2, blogName: "SERN", createdDate: "17 Aug 2022" },
  { si_no: 3, blogName: "SEAN", createdDate: "16 Aug 2022" },
  { si_no: 4, blogName: "Sava Selenium", createdDate: "18 Aug 2022" },
  { si_no: 5, blogName: "Sracle SQL", createdDate: "16 Aug 2022" },
];

const GlobalContext = createContext(data);
const DataProvide = GlobalContext.Provider;
const DataConsumer = GlobalContext.Consumer;

export { GlobalContext, DataProvide, DataConsumer };
