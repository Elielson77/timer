function criaSegundos(segundos){
  const time = new Date(segundos * 1000);
  return time.toLocaleTimeString('pt-br', {
    hours12: false, 
    timeZone: 'GMT'
  });
}
console.log(criaSegundos(1))
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0; 