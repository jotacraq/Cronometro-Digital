const relogio = document.querySelector('.relogio');
const pausar = document.querySelector('.pausar');
const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let intervalo;
let cronometroAtivo = false;

function formatarTempo(segundosTotais) {
  const h = Math.floor(segundosTotais / 3600).toString().padStart(2, '0');
  const m = Math.floor((segundosTotais % 3600) / 60).toString().padStart(2, '0');
  const s = (segundosTotais % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

iniciar.addEventListener('click', function() {
  if (!cronometroAtivo) {
    cronometroAtivo = true;
    intervalo = setInterval(() => {
      segundos++;
      relogio.innerHTML = formatarTempo(segundos);
    }, 1000);
    pausar.style.backgroundColor = ''; 
  }
});

pausar.addEventListener('click', function() {
  if (cronometroAtivo) {
    clearInterval(intervalo);
    cronometroAtivo = false;
    pausar.style.backgroundColor = 'red'; 
  }
});

zerar.addEventListener('click', function() {
  clearInterval(intervalo);
  cronometroAtivo = false;
  segundos = 0;
  relogio.innerHTML = formatarTempo(segundos);
  pausar.style.backgroundColor = '';
});

