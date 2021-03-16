/* 
JavaScript / jQuery
web o pagina: Proyecto Integrador
autor: Guzman Fakhouri Martin
fecha: Marzo 2021
resumen: Código JQuery para el contador de clicks en al página
*/

$('#nVeces').text(
    'Has hecho click ' + sessionStorage.contador + ' veces en esta sesión.'
  );
  
  function contador() {
    if (sessionStorage.contador) {
      sessionStorage.contador = Number(sessionStorage.contador) + 1;
    } else {
      sessionStorage.setItem('contador', 1);
    }
  
    $('#nVeces').text(
      'Has hecho click ' + sessionStorage.contador + ' veces en esta sesión.'
    );
  }
  
  $('.migas b').text(document.location.href.match(/[^\/]+$/)[0].split('.')[0]);