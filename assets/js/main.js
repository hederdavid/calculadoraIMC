function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const altura = parseFloat(form.querySelector(".input-altura").value.replace(',', '.'));
    const peso = parseFloat(form.querySelector(".input-peso").value.replace(',', '.'));
    const imc = peso / (altura * altura);
    resultado.innerHTML = `<p>Seu IMC é de: <strong>${imc.toFixed(2)}</strong></p> <br> Vale ressaltar que não confio em IMC e essa calculadora foi criada apenas para fins de aprendizado, obrigado por testar :D`;
  }

  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();

