let requestURL = " http://localhost:3000/postos";
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//let nomeBusca = "Idalina dos Santos";

request.onload = function () {
    let pontos = request.response;
    alert(pontos[2]);
    // escritoras.map( (escritora) => {
    //     console.log(escritora.nome);
    //     if(nomeBusca === escritora.nome){
    //         alert("Escritora encontrada");
    //     }
    // })
}

var map = L.map('map').setView([51.505, -0.09], 13);
    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();