
function calc(){
  let n1 = parseFloat(document.getElementById('n1').value)
  let n2 = parseFloat(document.getElementById('n2').value)
  let n3 = parseFloat(document.getElementById('n3').value)
  let n4 = parseFloat(document.getElementById('n4').value)
  var aprov = document.getElementById('aprov')
  var reprov = document.getElementById('reprv')
  var container_1 = document.getElementById('container')
  var container_3 = document.getElementById('container_3')

  //confere se não há números maiores que 10
  if (isNaN(n1) || isNaN(n2) ||  isNaN(n3) ||  isNaN(n4) || n1 > 10 || n2 > 10 || n3 > 10|| n4 > 10) {
      alert('Por favor, insira valores válidos (menores ou iguais a 10).');
      return;
    }
    
  //operações
  operacao = (Number(n1)) + (Number(n2)) + (Number(n3)) + (Number(n4)) 
  media = operacao / 4
  soma_sub = operacao - 24
   
  //lógica
  if(operacao < 24){//reprovado
   container_1.innerHTML = soma_sub
   container_3.innerHTML = media
   reprov.style.display = 'block'
   aprov.style.display = 'none'
   container_1.style.display = 'block'
  }else{//aprovado
   container_3.innerHTML = media
   aprov.style.display = 'block'
   reprov.style.display = 'none'
   container_1.style.display = 'none'
  }
 
}

function removerSinalMenos(id) {
  var inputNumero = document.getElementById(id);
  inputNumero.value = inputNumero.value.replace(/-/g, '');

}

