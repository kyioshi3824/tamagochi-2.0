const pet = document.querySelector('#pet')
const pontosDisplay = document.querySelector('#pontos')

const alimentarBtn = document.querySelector('#alimentarBtn')
const brincarBtn = document.querySelector('#brincarBtn')
const dormirBtn = document.querySelector('#dormirBtn')

const historicoLista = document.querySelector('#historico')

function addHistorico(texto, tipo, pontos){
    const li = document.createElement('li')
    const horario = new Date().toLocaleTimeString();
    li.textContent = `${horario} - ${texto}`;
    historicoLista.appendChild(li)

    if (historicoLista.children.length > 10) {
        historicoLista.removeChild(historicoLista.firstChild);
    }

    if(tipo == 'triste'){
        li.classList.add = ('triste');
    }

    
    
}

let pontos = 0

//Alimentar
alimentarBtn.addEventListener('click', function(){
    pet.innerText = '🫃'
    pontos += 1
    pontosDisplay.textContent = pontos
    addHistorico('Comeu!')
})

//Brincar
brincarBtn.addEventListener('click', function(){
    pet.innerText = '🤸‍♂️'
    pontos += 2
    pontosDisplay.textContent = pontos
    addHistorico('Brincou!')

    if (pontos >= 10) {
        addHistorico('parabéns! Você cuidou muito bem do seu Tamagochi!'); 
        pontos = 0;
    }
})

//Dormir
dormirBtn.addEventListener('click', function(){
    pet.innerText = '👯'
    pontos += 3
    pontosDisplay.textContent = pontos
    addHistorico('Dormiu!')
})

let tempoinativo = 0;

setInterval(function name(params) {
    pontos += 1;

    if(tempoinativo >= 10) {
        pontosDisplay.textContent = pontos;
        pet.textContent = '';
        addHistorico('esta triste ');
    }
    
})