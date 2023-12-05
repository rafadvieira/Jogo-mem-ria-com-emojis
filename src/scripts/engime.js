
const erro = document.querySelector(".error");
let curretError = 10;

const emojis = ["😺","😺","🐯","🐯","🐵","🐵","🐶","🐶","🐮","🐮","🐔","🐔","🐰","🐰","🐷","🐷"];

// guarda os elementos mostrados
let openCards = [];

// embaralhar os emojis
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// desenhar os elementos na tela
for( let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handClick;
    document.querySelector(".game").appendChild(box);
}

// função para guardar as cartas
function handClick() {
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length === 2) {
        setTimeout(checkMatch, 700);
    }
}

// verificar a compatibilidade das casrtas
function checkMatch (){
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!");
    }

}

