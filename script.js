var ola = document.querySelector('.mundo');
var mensagem = "";
function mostrarTabuada(){
  var n = prompt('Digite um número:');
  n = parseFloat(n);
  var i = 1;
  while (i <=10){
    mensagem += n + ' x ' + i + ' = ' + (n*i) + '<br>'
    i++;
  }
  ola.innerHTML = mensagem;
}
function limparTabuada(){
 mensagem= '';
 ola.innerHTML = mensagem;
}