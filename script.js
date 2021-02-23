// Connecting button and function
document.getElementById('button').addEventListener('click', multiplication)

let diameter = 0
let circumference = 0

function multiplication () {
  userInput = document.getElementById('diameter').value

  userInput = parseInt(userInput)

  response = userInput * 3.14

  alert(response)
}
