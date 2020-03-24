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
        console.log(response)
      })
  }
}