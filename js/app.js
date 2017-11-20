window.addEventListener('load', function() {

  //creamos variables para almacenar nuetsros elementos
  var titulo = document.getElementsByClassName('list')[0];
  var guardar = document.getElementsByClassName('save')[0];
  var form = document.getElementsByClassName('form')[0];
  var cerrar = document.getElementsByClassName('close-icon')[0];
  var one = document.getElementById('one');
  // Agregamos clases atravez de la propiedad classList a nuestro css
  // one.style.display = 'none'; 
  form.classList.add('form-estilo');
  titulo.classList.add('hide');
  cerrar.classList.add('hide');
  guardar.classList.add('hide');
  // Al realizar el evento click se cargara el evento formulario
  var agregar = document.getElementsByClassName('clic')[0];
  agregar.addEventListener('click', formulario);
 // agregamos clases a nuetsro css
  function formulario() {
    titulo.classList.add('show');
    titulo.classList.add('input-estilo');
    form.classList.add('grow');
    guardar.classList.add('show');
    cerrar.classList.add('show');
    cerrar.classList.add('grow');
    guardar.classList.add('boton');
    guardar.classList.add('boton:hover');
    agregar.classList.add('hide');
  };
  //Agregar una lista al presionen el boton Guardar
  guardar.addEventListener('click', crearlista);
  //Creamos la funcion crearlista
  function crearlista() {
    var containerLists = document.getElementsByClassName('container-lists')[0];
    var lists = document.createElement('ul');
    var li = document.createElement('li');
    var textLi = document.createElement('input');

   //le agregamos los respectos atributos
    textLi.setAttribute('value', titulo.value);
    textLi.setAttribute('class', 'class-textLi');
    textLi.setAttribute('type', 'text');
    textLi.classList.add('input-tittle-list');
    lists.classList.add('container-list');

    var liAnchor = document.createElement('li');
    var addCard = document.createElement('a');
    addCard.setAttribute('href', '#');
    addCard.textContent = 'Añadir una tarjeta...';
    containerLists.appendChild(lists);
    lists.appendChild(li);
    li.appendChild(textLi);
    lists.appendChild(liAnchor);
    liAnchor.appendChild(addCard);
    addCard.classList.add('link');
    addCard.classList.add('link:hover');
    titulo.value = '';
    titulo.focus();

    //Crear una tarjeta a la lista cuando le de click al link Añadir tarjeta   
    addCard.addEventListener('click', mostrar);
    //creando la funcion mostrar
    function mostrar() {
      //Ocultar Añadir una tarjeta...
      liAnchor.setAttribute('class', 'hide');
      //Crear formulario dentro de li
      var liCard = document.createElement('li');
      var card = document.createElement('textarea');
      var btnAddCard = document.createElement('button');
      btnAddCard.textContent = 'Añadir';
      var close = document.createElement('span');
      var options = document.createElement('span');
      lists.appendChild(liCard);
      liCard.appendChild(card);
      card.classList.add('textarea');
      liCard.appendChild(btnAddCard);
      btnAddCard.classList.add('btn-save');
      btnAddCard.classList.add('btn-save:hover');
      liCard.appendChild(close);
      liCard.appendChild(options);
      //Dar focus al textarea
      card.focus();

      //Añadir texto a la lista
      btnAddCard.addEventListener('click', addTextLi);
      function addTextLi() {
        var itemCard = document.createElement('li');
        itemCard.textContent = card.value;
        lists.appendChild(itemCard);
        lists.insertBefore(itemCard, liCard);
        itemCard.classList.add('li-item');
        card.value = '';        
        //Dar focus al textarea
        card.focus();        
      };
    };
  };
});
