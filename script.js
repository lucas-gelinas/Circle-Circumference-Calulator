// Connecting button and function
document.getElementById('button').addEventListener('click', multiplication)

let response = 0
let diameter = 0

function multiplication () {
  diameter = document.getElementById('diameter1').value

  diameter = parseInt(diameter)

  response = diameter * 3.14

  alert(response)
}
