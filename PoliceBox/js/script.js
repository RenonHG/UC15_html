//var renon = "variavel para usar na pagina completa"
//let erick = "variavel para usar no contexto aplicado"
//const gui = "variavel para usar fixamente (sem alteração)"

let indexSlide = 0

function showSlide(index){
    const carrossel = document.querySelector(".carrossel");

    const totalSlide = 4
    
    if(index >= totalSlide){
        indexSlide = 0
    } else if(index < 0){
        indexSlide = totalSlide - 1
    } else{
        indexSlide = index;
    }


    const offset = -indexSlide * 100
    console.log(offset)
    carrossel.style.transform = `translateX(${offset}%)`;
}

function anteriorSlide(){
    indexSlide = indexSlide - 1
    showSlide(indexSlide)
}

function proximoSlide(){
    indexSlide = indexSlide + 1
    showSlide(indexSlide)
}

setInterval(() => {
    proximoSlide()
}, 5000);