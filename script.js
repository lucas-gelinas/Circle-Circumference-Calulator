// Connecting button and function
document.getElementById('button').addEventListener('click', multiplication)

diameter = 0

function multiplication () {
  diameter = document.getElementById('diameter').value

  diameter = parseInt(diameter)

  response = diameter * 3.14

  alert(response)
}
