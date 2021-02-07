'use strict';

const clockDateScreen = document.getElementById('date');
const clockTimeScreen = document.getElementById('time');

function nowTime() {
  const now = new Date();
  const dateOptions = {month: 'numeric', day: 'numeric', weekday: 'long'};
  const date = new Intl.DateTimeFormat('ko-KR', dateOptions).format(now);
  clockDateScreen.innerText = date;
  const timeOptions = {hour: 'numeric', minute: 'numeric', hour12: false};
  const time = new Intl.DateTimeFormat('ko-KR', timeOptions).format(now);
  clockTimeScreen.innerText = time;
}
function init() {
  nowTime();
  setInterval(nowTime, 1000);
}

init();