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
  const axios = require('axios');
  axios.defaults.httpsAgent = new axios.httpsAgent({ rejectUnauthorized: false });
  // Hacer una petición para un usuario con ID especifico
  axios
    .get(
      "https://3.21.27.145/iot-car-control/back-end/apis/getRegistro.php"
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
