import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', submitedForm);

let promise;

function submitedForm(e) {
    e.preventDefault();

    const delay = form.elements.delay.value;
    const state = form.elements.state.value;

    promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state === 'fulfilled') {
            resolve(delay);
          } else {
            reject(delay);
          }
        }, delay);
    });

    promise.then(onResolve, onReject);
    form.reset();
}

function onResolve(delay) {
    iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: 'green',
        messageColor: 'white',
    });
}

function onReject(delay) {
    iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#b45c5c',
        messageColor: 'white',
    });
}
