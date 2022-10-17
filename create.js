const clockElement = document.querySelector('#clock');
const timezoneElement = document.querySelector('#timezone');

const currentTime = (clockElement, timezoneElement, timezone) => {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timezone: timezone,
    };
    const time = new Intl.DateTimeFormat('en-US', options).format(new Date());
    clockElement.textContent = time;
    timezoneElement.textContent = options.timezone;
};

const container = document.querySelector('.container')

for(var i = 0; i < timezones.length - 585; i += 1) {
    var timezone = document.createElement("h2");
    var clock = document.createElement("h2");
    timezone.className = "timezone";
    clock.className = "clock";
    // timezone.innerHTML = timezones[i];
    // clock.innerHTML = timezones[i];
    container.appendChild(timezone);
    container.appendChild(clock)
}
