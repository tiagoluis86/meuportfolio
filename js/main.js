var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


function increment() {
	currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

}

function decrement() {
	currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


function comentario() {

    window.alert("Seu comentário foi registrado pela moderação e em breve será publicado");

}

function estilo(){

var color = currentNumber;

    if (color == 1)
    {
        document.body.style.background = "Cornsilk";
    }

    else if (color == 2)
    {
        document.body.style.background = "DarkSeaGreen";
        
    }

    else if (color == 0)
    {
        document.body.style.background = "white";
    }

}

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.background = "DarkSeaGreen";
  }); 

  function random_bg_color() {
    var x = Math. floor(Math. random() * 256);
    var y = Math. floor(Math. random() * 256);
    var z = Math. floor(Math. random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console. log(bgColor);
    document. body. style. background = bgColor;
}