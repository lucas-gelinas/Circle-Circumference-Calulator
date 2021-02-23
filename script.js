// Connecting button and function
document.getElementById('button').addEventListener('click', multiplication)

response = 0
diameter = 0

function multiplication () {
  diameter = document.getElementById('diameter1').value

  diameter = parseInt(diameter)

  response = diameter * 3.14

  alert(response)
}
