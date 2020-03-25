export class Question {
  static create(question) {
    return fetch("https://podcast-question-e6481.firebaseio.com/questions.json", {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-Type": "application-json"
      }
    })
      .then(response => response.json())
      .then(response => {
        question.id = response.name
        return question;
      })
      .then(addToLocalStorage(question))
      .then(Question.renderList)
  }

  static renderList() {
    const questions = getQuestionsFromLocalStorage();

    const html = questions.length
      ? questions.map(toCard).join('')
      : ` <div class="mui--text-headline">Вы ничего не спрашивали</div>`

    const list = document.getElementById('list');
    list.innerHTML = html;
  }
}

function addToLocalStorage(question) {
  console.log("==>", question)
  let all = getQuestionsFromLocalStorage();
  all.push(question)
  localStorage.setItem("questions", JSON.stringify(all));
}

function getQuestionsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('questions') || "[]");
}

function toCard(question) {
  return `
    <div class="mui--text-black-54">
      ${new Date(question.date).toLocaleDateString()}
      ${new Date(question.date).toLocaleTimeString()}
    </div>
    <div>
       ${question.text}
    </div>
    <br>
  `
}