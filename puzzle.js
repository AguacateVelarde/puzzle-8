/*
    Leonardo Velarde
    @aguacatevelarde

    MIT, todos los derechos

*/
var Container = document.getElementById('container')
var header = document.createElement('div')
  header.className = 'container'
var detalle = document.createElement('h4');
var title = document.createElement('h1')
title.textContent= "Puzzle 8 por @aguacatevelarde"
header.appendChild( title )
header.appendChild( detalle )

header.id = 'info'
var values = [] //Valores del arreglo aleatorio
var cuadros = [] //contiene los divs que contienen a los valores aleatorios
var cont = 0;

function cargar(){
  Container.innerHTML = '';
  Container.appendChild( header )

  title.style.color = 'white'

  for (var i = 0; i < 8; i++) {
    values[i] = Math.floor((Math.random() * 8) + 1);
    for (var j = 0; j < i; j++) {
      if( values[i] == values[j] ){
        values[i] = Math.floor((Math.random() * 8) + 1);
        j=0;
        i--;
      }
    }
  }
  values.push('');

  var table = document.createElement("table");
  var i = 0;
  for (var r = 0; r < 3; r++) {
    var row = table.insertRow(-1);
    for (var c = 0; c < 3; c++) {
      var cell = row.insertCell(-1);
      cell.appendChild(document.createTextNode(values[i++]));
      cell.id = cell.textContent
    }
  }
  Container.appendChild( table )
  var btn = document.createElement('button')
  btn.appendChild( document.createTextNode('Carga de nuevo'));
  btn.addEventListener("click", function(){
    cargar()
  });
  Container.appendChild( btn )
  Array.prototype.slice.call( document.getElementsByTagName('td') )
  .forEach( function( data ){
    data.addEventListener('click', function( event ){
      eval( event.target.id )
    })
  });
}

function eval ( data ){
  detalle.textContent = ( data != '' ) ? ` Se evaluó el número ${ data }` : ` Seleccionó vacio`
  detalle.style.color = 'white'
}
