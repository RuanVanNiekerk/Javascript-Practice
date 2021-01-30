// JavaScript source code
const obj = {
  title1 : "Quiet Time",
  title2 : "Study",
  title3 : "Go Jogging",
  title4 : "Eat Breakfast",
  description1 : "",
  description2 : "",
  description3 : "This is going to help to reach my goals and my life to the fullest",
  description4 : "",
  date1 : "05/02/2020",
  date2 : "01/02/2020",
  date3 : "tomorrow",
  date4 : "today",
  time1 : "08:12",
  time2 : "13:15",
  time3 : "12:36",
  time4 : "13:25",
  completed1 : false,
  completed2 : true,
  completed3 : false,
  completed4 : true,
  priority1 : "red",
  priority2 : "yellow",
  priority3 : "black",
  priority4 : "white",
  tags1 : ["Personal", "Work", "School"],
  tags2 : ["Personal", "School", "Diary Entry"],
  tags3 : ["Content Creation", "Personal"],
  tags4 : ["Personal"]
};

class newObj {
    constructor(title, description, date, time, completed, priority, tags) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.time = time;
        this.completed = completed;
        this.priority = priority;
        this.tags = tags;
    };
};

var length = Object.keys(obj).length/7;//determine amount of entries
console.log(length);

for (let i = 1; i <= length; i++) {
    const title = 'title' + i;
    const description = 'description' + i;
    const date = 'date' + i;
    const time = 'time' + i;
    const completed = 'completed' + i;
    const priority = 'priority' + i;
    const tags = 'tags' + i;

    const { [title]: titlei, [description]: descriptioni, [date]: datei, [time]: timei, [completed]: completedi, [priority]: priorityi, [tags]: tagsi } = obj;
    let obji = new newObj(titlei, descriptioni, datei, timei, completedi, priorityi, tagsi);
    console.log(obji);
}