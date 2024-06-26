const respuesta =document.getElementById("respuesta");

function transladeInstruction(letter){
  switch (letter) {
    case 'w':
      return "Adelante";
      break;
    case 'd':
      return "Derecha";
      break;
    case 'a':
      return "Izquierda";
      break;
    case 's':
      return "Atras";
      break;
    case 'e':
      return "Detenido";
      break;

    default:
      return "No valido"
      break;
  }
}

function callApiRequest() {
  axios
    .get(
      "https://3.23.112.50/iot-car-control/back-end/apis/getRegistro.php"
    )
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response.data);
      respuesta.innerText = transladeInstruction(response.data);
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
}
let timerId = setInterval(callApiRequest, 2000);
