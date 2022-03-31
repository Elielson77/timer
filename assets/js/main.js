function criaSegundos(segundos){
  const time = new Date(segundos * 1000);
  return time.toLocaleTimeString('pt-br', {
    hours12: false, 
    timeZone: 'GMT'
  });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 1; 
let temp;

function iniciaTime(){
  temp = setInterval(function(){
    relogio.innerHTML = criaSegundos(segundos)
    segundos++;
  }, 1000);
}
console.log(criaSegundos(segundos));

iniciar.addEventListener('click', function(e){
  relogio.classList.remove('pausado')
  clearInterval(temp)
  iniciaTime();
})

pausar.addEventListener('click', function(e){
  clearInterval(temp)
  relogio.classList.add('pausado');
})

zerar.addEventListener('click', function(e){
  segundos = 1; 
  relogio.innerHTML = '00:00:00';
})