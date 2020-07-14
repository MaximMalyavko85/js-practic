import { isValid, createModal } from './utils'
import { Question } from './question'
import { getAuthForm, authWithEmailAndPassword } from './auth'
import './style.css'

const form = document.getElementById('form') // метод самый быстрый;
const input = form.querySelector('#question-input') // ищем в форме
const submitBtn = form.querySelector('#submit') // ищем в форме
const modalBtn = document.getElementById('modal-btn') // метод самый быстрый;

window.addEventListener('load', Question.renderList)
form.addEventListener("submit", submitFormHandler)
modalBtn.addEventListener('click', openModal)
input.addEventListener("input", () => {
  submitBtn.disabled = !isValid(input.value)
});

function submitFormHandler(event) {
  event.preventDefault();
// если input валидный - создаем обьект вопроса
  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON(),
    }
    submitBtn.disabled = true;

// then выполнится после всех then
    Question.create(question).then(() => { 
      input.value = ""
      input.className = ""
      submitBtn.disabled = false
    })
  }
}

function openModal() {
  createModal("Авторизация", getAuthForm())
  document
    .getElementById("auth-form")
    .addEventListener("submit", authFormHandler, { once: true })    // событие добовляется только один раз
}

function authFormHandler(event) {
  event.preventDefault()

  const btn = event.target.querySelector('button')
  const email = event.target.querySelector('#email').value
  const password = event.target.querySelector('#password').value

  btn.disabled = true

  authWithEmailAndPassword(email, password)
    .then(Question.fetch) // token => return Qustion.fetch(token)
    .then(renderModalAfterAuth)
    .then(() => btn.disabled = false)
    // firebase не выкидывает ошибки промисовб а выдает это все в resolve()=> обрабытываем в then
}

function renderModalAfterAuth(content) {
  if (typeof content === 'string') {
    createModal('Ошибка!', content)
  } else {
    createModal("Список вопросов", Question.listToHTML(content))
  }
}