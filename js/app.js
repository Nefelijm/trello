window.addEventListener('load', function() {

  var tittleList = document.getElementsByClassName('tittle-list')[0];
  var saveList = document.getElementsByClassName('save-list')[0];
  var form = document.getElementsByClassName('form')[0];
  var spanClose = document.getElementsByClassName('close-icon')[0];
  form.setAttribute('class', 'form-css');
  tittleList.setAttribute('class', 'hide');
  spanClose.setAttribute('class', 'hide');
  saveList.setAttribute('class', 'hide');

  //Creando funcion para que aparezca el form cuando hagan click
  var addList = document.getElementsByClassName('add-list')[0];
  addList.addEventListener('click', showForm);

  function showForm() {
    tittleList.setAttribute('class', 'show');
    tittleList.setAttribute('class', 'input-css');
    form.classList.add('grow');
    saveList.setAttribute('class', 'show');
    spanClose.setAttribute('class', 'show');
    spanClose.classList.add('grow');
    saveList.setAttribute('class', 'btn-save');
    saveList.classList.add('btn-save:hover');
    addList.setAttribute('class', 'hide');
  };

  //Agregar lista cuando presionen el boton Guardar
  saveList.addEventListener('click', createList);

  function createList() {
    var containerLists = document.getElementsByClassName('container-lists')[0];
    var lists = document.createElement('ul');
    var li = document.createElement('li');
    var textLi = document.createElement('input');
    textLi.setAttribute('value', tittleList.value);
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
    tittleList.value = '';
    tittleList.focus();
    //Crear una tarjeta a la lista cuando le de click al link Añadir tarjeta...
    addCard.addEventListener('click', showCard);
    function showCard() {
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
