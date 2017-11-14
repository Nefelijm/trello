
window.addEventListener("load", function() {

  var x = document.getElementsByTagName('p')[0];
      x.addEventListener('click',cerrarventana);
  var primerospan = document.getElementById('abrir')
  var div = document.getElementById('segundo')
      div.style.display = 'none';
  primerospan.addEventListener("click",abrirventana);
    function abrirventana(e){
    div.style.display = 'inline-block';
    }
  function cerrarventana(e){
    div.style.display = 'none';
  }

  



});
