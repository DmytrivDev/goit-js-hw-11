import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.getElementById('datetime-picker');
const btn = document.querySelector('.start-btn');
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  disableMobile: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      let currentDate = new Date();

      if(userSelectedDate.getTime() < currentDate.getTime()) {
          btn.disabled = true;

          iziToast.show({
              message: 'Please choose a date in the future',
              position: 'topRight',
              backgroundColor: 'red',
              messageColor: 'white',
              theme: 'dark',
              iconUrl: '../img/error.svg'
          });
      } else {
          btn.disabled = false;
      }
  },
};

flatpickr(input, options);


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

btn.addEventListener('click', timer);

function timer() {
  btn.disabled = true;
  input.disabled = true;

  const currentDateClick = new Date().getTime();
  let datesDifferense = userSelectedDate.getTime() - currentDateClick;

  timerChanger(convertMs(datesDifferense));
  datesDifferense -= 1000;

  const timeInterval = setInterval(() => {
    timerChanger(convertMs(datesDifferense));
      datesDifferense -= 1000;

      if(datesDifferense < 0) {
         clearInterval(timeInterval);
      }
  }, 1000);
}

function timerChanger(time) {
  Object.keys(time).forEach(function(key) {
    const lng = time[key].toString().length;
    if(lng < 2) {
       time[key] = '0'+time[key];
    }

    const field = document.querySelector('[data-'+key+']');

    field.textContent = time[key];
  });
}