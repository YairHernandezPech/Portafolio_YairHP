function modoclaro() {
    document.querySelector(".body").style='background: white;';
    document.querySelector(".holasoy").style='color: black;';
    document.querySelector(".info1").style='color: black;';
    document.querySelector(".info2").style='color: black;';
    document.querySelector(".info3").style='color: black;';
}
function modooscuro() {
    document.querySelector(".body").style='background: #0F2027;background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);background: linear-gradient(to right, #2C5364, #203A43, #0F2027);';
    document.querySelector(".holasoy").style='color: white;';
    document.querySelector(".info1").style='color: white;';
    document.querySelector(".info2").style='color: white;';
    document.querySelector(".info3").style='color: white;';
}

//Consumir api
let url = "https://chatonline.fly.dev/chat/Msjenviar";
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrarmensaje(data))
  .catch((error) => console.log(error));

  const mostrarmensaje = (data) => {
    console.log(data);
    let body = "";
    for (var i = 0; i < data.length; i++) {
      body += `<div class="comentarios"><div class="comentarioburbuja">${data[i].Msjenviar}</div></div>`;
    }
    document.getElementById("valores").innerHTML = body;
    //console.log(body)
  };