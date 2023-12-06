function calc() {
  let n1 = parseFloat(document.getElementById('n1').value.replace(',', '.'));
  let n2 = parseFloat(document.getElementById('n2').value.replace(',', '.'));
  let n3 = parseFloat(document.getElementById('n3').value.replace(',', '.'));
  let n4 = parseFloat(document.getElementById('n4').value.replace(',', '.'));
  var aprov = document.getElementById('aprov');
  var reprov = document.getElementById('reprv');
  var container_1 = document.getElementById('container');
  var container_3 = document.getElementById('container_3');

  // Confere se não há números maiores que 10
  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10) {
    alert('Por favor, insira valores válidos (menores ou iguais a 10).');
    return;
  }

  // Operações
  operacao = n1 + n2 + n3 + n4;
  media = (operacao / 4).toFixed(2);
  soma_sub = (operacao - 24).toFixed(2);

  // Lógica
  if (operacao < 24) {
    // Reprovado
    container_1.innerHTML = soma_sub;
    container_3.innerHTML = media;
    reprov.style.display = 'block';
    aprov.style.display = 'none';
    container_1.style.display = 'block';
  } else {
    // Aprovado
    container_3.innerHTML = media;
    aprov.style.display = 'block';
    reprov.style.display = 'none';
    container_1.style.display = 'none';
  }
}

function removerSinalMenos(id) {
  var inputNumero = document.getElementById(id);
  inputNumero.value = inputNumero.value.replace(/[-,]/g, '');
}
