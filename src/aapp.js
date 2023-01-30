let arr1 = [1, 2, 3, 4];
let arr2 = [1, 3, 3, 4];
let matchingIndex = [];

let checkMatch = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && i === j) {
        matchingIndex.push(i);
      }
    }
  }

  /* arr1.filter((val, index) => {
    arr2.map((num, numIndex) => {
      if (val === num) {
        if (index === numIndex) matchingIndex.push(index);
      } else {
        console.log("No match");
      }
    });
  }); */
};

checkMatch(arr1, arr2);
if (matchingIndex.length === arr1.length) {
  console.log("SAME");
} else {
  console.log(matchingIndex);
}
// same ?023

let data = [
  {
    si_no: 1,
    blogName: "Java Technologies",
    createdDate: "23 Aug 2022",
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
    createdDate: "16 Aug 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 4,
    blogName: "Java Selenium",
    createdDate: "18 Aug 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 5,
    blogName: "Oracle SQL",
    createdDate: "16 Aug 2022",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eveniet amet! Doloribus suscipit quaerat, dignissimos itaque voluptates, expedita porro minima nam, maxime laborum doloremque quo mollitia accusantium. Incidunt distinctio repudiandae ea laudantium facilis molestias, laboriosam adipisci id ipsum voluptates!",
  },
  {
    si_no: 6,
    blogName: "AWS",
    createdDate: "13 Aug 2022",
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
    createdDate: "14 Aug 2022",
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

//! Sort data based on date
const sortByDate = (arr) => {
  const sorter = (a, b) => {
    return (
      new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
    );
  };
  arr.sort(sorter);
};
sortByDate(data);
console.log(data, "Sorted data");

//! Filter data based on date range

// data.forEach((dat) => {
const fromDate = "02 Jun 2022";
const toDate = "01 Aug 2022";
let dte = new Date();
data = data.filter((item) => {
  // console.log(item.createdDate);
  /*   
let datee = new Date(item.createdDate).getTime();
  return datee >= fromDate && datee <= toDate;
 */
  return (
    /*  dte(item.createdDate).getTime() >= dte(fromDate).getTime() &&
    dte(item.createdDate).getTime() <= dte(toDate).getTime() */
    new Date(item.createdDate).getTime() >= new Date(fromDate).getTime() &&
    new Date(item.createdDate).getTime() <= new Date(toDate).getTime()
  );
});

// });

// sortByDate(data);
console.log(data, data.length, "Filtered data");

//! generate short name of month
const d = new Date();
const day = d.getDay();
const year = d.getFullYear();
const month = d.toLocaleString("en-us", {
  month: "short",
});
const createdDate = `${day} ${month} ${year}`;
console.log(createdDate);
