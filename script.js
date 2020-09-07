var respuestaCorrecta = "FREDDIE MERCURY"
var respuesta =  document.getElementById("res");
var inte = 5
var intentosUser =   document.getElementById("intentos");
var pista1 = document.getElementById("pista1")
var pista2 = document.getElementById("pista2")
var alert = document.getElementById("alert"); 
intentosUser.innerHTML = '<p id="respuesta" class="h6" >5</p>'
function typeClick(){
    event.preventDefault()
    var respuestaUser = respuesta.value.toUpperCase();
    if(respuestaCorrecta == respuestaUser){
        alert.innerHTML = '<div class="alert alert-success" id="alert" style="width:70%;margin-left:15%" role="alert">CONGRATULATIONS, YOU WIN!</div>'
        alert("CONGRATULATIONS, YOU WIN!")
    }else{
        alert.innerHTML = '<div class="alert alert-danger" id="alert"   style="width:70%;margin-left:15%" role="alert">Wrong answer</div>';
        Intentos();
    }
}
function Intentos(){
    inte --;
    
    switch(inte){
		case 4:
        intentosUser.innerHTML = '<p id="respuesta" class="h6" >4</p>'
		break;
		case 3:
        intentosUser.innerHTML = '<p id="respuesta" class="h6" >3</p>'
        pista1.innerHTML = '<div class="alert alert-warning" id="alert"  role="alert">A track! He was the most important singer in Live Aid</div>';
		break;
		case 2:
        intentosUser.innerHTML = '<p id="respuesta" class="h6" >2</p>'
        pista2.innerHTML = '<div class="alert alert-warning" id="alert"  role="alert">Last track! He died of VIH.</div>';
		break;
		case 1:
        intentosUser.innerHTML = '<p id="respuesta" class="h6" >1</p>'
		break;
		case 0:
        intentosUser.innerHTML = '<p id="respuesta" class="h6" >0</p>'
        alert.innerHTML = '<div class="alert alert-danger" id="alert"  role="alert">The answer is INCORRECT! And Im sorry to inform you that you lost! The answer was Freddie Mercury</div>';
        pista1.innerHTML = '<div></div>';
        pista2.innerHTML = '<div></div>';
        break;
		}
}