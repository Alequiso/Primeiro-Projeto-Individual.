const contador = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    proximaimagem();
},10000);

function proximaimagem() {
    contador++;
    if(contador >6) {
        contador = 1;
    }
    document.getElementById("radio"+contador).checked = true;

}