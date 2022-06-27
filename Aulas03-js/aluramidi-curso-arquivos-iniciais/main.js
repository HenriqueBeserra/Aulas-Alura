const listaDeTeclas = document.querySelectorAll('.tecla');

function playAudio (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}       

for(let i =0; i < listaDeTeclas.length; i++) {
   
    const tecla = listaDeTeclas[i]
    const classeName = tecla.classList[1]; 
    const idAudio = (`#som_${classeName}`);

    tecla.onclick = function () {
        playAudio(idAudio);
    }

    tecla.onkeydown = function () {
        tecla.classList.add("ativa")
    }
    tecla.onkeyup = function() {
        tecla.classList.remove("ativa")
    }

}

const teclasAudio = {
    "w": id = ["#som_tecla_pom"],
    "e": id = ["#som_tecla_clap"],
    "r": id = ["#som_tecla_tim"],
    "s": id = ["#som_tecla_puff"],
    "d": id = ["#som_tecla_splash"],
    "f": id = ["#som_tecla_toim"],
    "x": id = ["#som_tecla_psh"],
    "c": id = ["#som_tecla_tic"],
    "v": id = ["#som_tecla_tom"]
}

const playComTeclado = (evento) => {
    const tecla = evento.key;
    
    
    if(tecla in teclasAudio){
        console.log(tecla)
        const idAudio = teclasAudio[tecla][0]
        playAudio(idAudio);
    }
    
  
} 
    
document.addEventListener("keypress", playComTeclado)
        