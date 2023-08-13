const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");

let futureDate = new Date(2023,7,20,10,0,0);
const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const day = futureDate.getDay();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const secs = futureDate.getSeconds();

let format = (item) => {
  if(item < 10){
    return item = `0${item}`;
  }
  return item;
};
giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year} ${hours}:${minutes}am`;

//future time in ms
const futureTime = futureDate.getTime();
 
const getRemainingTime = () => {
  let today = new Date().getTime();
  let t = futureTime - today;
  
  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  //calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay)/oneHour);
  let mins = Math.floor((t % oneHour)/oneMin);
  let secs = Math.floor((t % oneMin)/1000);

  let values = [days,hours,mins,secs];

  items.forEach((item,index) => {
    item.innerHTML = format(values[index]);
  });
};
let countDown = setInterval(getRemainingTime,1000);