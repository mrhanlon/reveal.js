var TACC = (function() {

  function onWindowResize(e) {
    var zoom = document.querySelector('.reveal > .slides').style.zoom;
    document.querySelector('#tacc-footer').style.zoom = zoom;
  }
  window.addEventListener( 'resize', onWindowResize, false );
})();
