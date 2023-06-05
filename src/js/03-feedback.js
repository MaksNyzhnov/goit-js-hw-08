import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form')
const inputEmailEl = document.querySelector('input')
const inputMassageEl = document.querySelector('textarea')
const submitBtnEl = document.querySelector('button')
const formData = {}

const STORAGE_KEY = "feedback-form-state";


formEl.addEventListener('input', throttle(onFormInput, 500))
formEl.addEventListener('submit', onFormSubmit)




function onFormInput(event) {
    if (event.target.nodeName !== "INPUT" && event.target.nodeName !== "TEXTAREA") {
    return
    }
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

    
}

function onFormSubmit(event) {
    event.preventDefault()
    
    const email = inputEmailEl.value;
    const message = inputMassageEl.value;
    console.log(formData)
    localStorage.removeItem(STORAGE_KEY)
    event.target.reset()

}



try {
    const savedMail = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
    
    inputEmailEl.value = savedMail;
inputMassageEl.value = savedMessage;
} catch (error) {

}

if (!JSON.parse(localStorage.getItem(STORAGE_KEY)).hasOwnProperty("email")) {
    inputEmailEl.value = "";
}

if (!JSON.parse(localStorage.getItem(STORAGE_KEY)).hasOwnProperty("message")) {
    inputMassageEl.value = "";
}

