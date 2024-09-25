const hrs = document.querySelector(".hrs");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const days = document.querySelector(".day h2");
const years = document.getElementById("year");
const months = document.getElementById("month");
const mdates = document.getElementById("mdate");
const mainCon = document.getElementById("mainContainer");

let updateData = () => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let current = new Date();
  hrs.innerText = (current.getHours() < 10 ? "0" : "") + current.getHours();
  min.innerText = (current.getMinutes() < 10 ? "0" : "") + current.getMinutes();
  sec.innerText = (current.getSeconds() < 10 ? "0" : "") + current.getSeconds();

  days.innerText = weekDays[current.getDay()];

  years.innerText = current.getUTCFullYear();
  mdates.innerText = current.getDate();
  months.innerText = monthNames[current.getMonth()];
};

setInterval(updateData, 1000);
