// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Encuentra todos los elementos con la clase 'discussion' y 'keypoints'
  var containers = document.querySelectorAll('.discussion, .keypoints');

  containers.forEach(function(container) {
    // Verifica si ya existe un .callout-square para evitar duplicados
    if (!container.querySelector('.callout-square')) {
      // Crea un nuevo div con la clase 'callout-square'
      var calloutSquare = document.createElement('div');
      calloutSquare.className = 'callout-square';

      // Inserta el 'callout-square' al principio del elemento contenedor
      container.insertBefore(calloutSquare, container.firstChild);
    }
  });
});