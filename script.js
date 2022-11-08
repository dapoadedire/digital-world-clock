import { timezones } from "./timezones.js";
const mainContainer = document.querySelector(".container");

for (var i = 0; i < timezones.length; i += 1) {
  var clockContainer = document.createElement("div");
  clockContainer.classList.add("clock-container");
  mainContainer.appendChild(clockContainer);
  var timezone = document.createElement("h2");
  var clock = document.createElement("h2");
  timezone.className = "timezone";
  clock.className = "clock";
  clockContainer.appendChild(timezone);
  clockContainer.appendChild(clock);
}

const currentTime = (clockElement, timezoneElement, timezone) => {
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: timezone,
  };
  const time = new Intl.DateTimeFormat("en-US", options).format(new Date());
  clockElement.textContent = time;
  timezoneElement.textContent = options.timeZone;
};

const allTimezones = document.querySelectorAll(".timezone");
const allClocks = document.querySelectorAll(".clock");

const allTimezonesArray = Array.from(allTimezones);
const allClocksArray = Array.from(allClocks);

const search = document.getElementById("search");
const form = document.getElementById("form");

form.addEventListener("click", (e) => {
  e.preventDefault();
  search.addEventListener("change", (e) => {
    userInput = String(e.target.value).toLowerCase().trim();
    let FilteredTimeZoneArray = allTimezonesArray.filter((eachTimeZone) => {
      let eachTimeZoneString = String(eachTimeZone.textContent).toLowerCase();
      if (eachTimeZoneString.includes(userInput)) {
        eachTimeZone.parentElement.style.display = "block";
        return eachTimeZone;
      } else {
        eachTimeZone.parentElement.style.display = "none";
      }
    });
  });
});

allTimezonesArray.forEach((timezone, index) => {
  currentTime(allClocksArray[index], timezone, timezones[index]);
});

setInterval(() => {
  allTimezonesArray.forEach((timezone, index) => {
    currentTime(allClocksArray[index], timezone, timezones[index]);
  });
}, 1000);
