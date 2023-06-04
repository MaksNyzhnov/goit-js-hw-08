import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form')
const inputEmailEl = document.querySelector('input')
const inputMassageEl = document.querySelector('textarea')
const submitBtnEl = document.querySelector('button')
const formData = {}



formEl.addEventListener('input', throttle(onFormInput, 500))
formEl.addEventListener('submit', onFormSubmit)

function onFormInput(event) {
    if (event.target.nodeName !== "INPUT" && event.target.nodeName !== "TEXTAREA") {
    return
    }
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))

    
}

function onFormSubmit(event) {
    event.preventDefault()
    
    const email = inputEmailEl.value;
    const message = inputMassageEl.value;
    console.log(formData)
    localStorage.removeItem("feedback-form-state")
    event.target.reset()

}

try {
    const savedMail = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    const savedMessage = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    
    inputEmailEl.value = savedMail;
inputMassageEl.value = savedMessage;
} catch (error) {

}


