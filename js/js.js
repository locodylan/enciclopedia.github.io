document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('searchInput');
  var searchButton = document.getElementById('searchButton');
  var mensajeErrorDiv = document.getElementById('mensajeError');

  // Función que maneja la búsqueda
  function handleSearch() {
    var searchQuery = searchInput.value.trim().toLowerCase().replace(/\s+/g, '').replace(/[-.]/g, '');
    if (searchQuery === '') {
      // Si la consulta de búsqueda está vacía, no hacer nada
      return;
    }
    var destinationUrl = searchQuery + '.html';

    fetch(destinationUrl, { method: 'HEAD' })
      .then(function(response) {
        if (response.ok) {
          window.location.href = destinationUrl;
        } else {
          mensajeErrorDiv.textContent = 'Lo siento... No pudimos encontrar tu personaje. Vuelve a intentar';
          mensajeErrorDiv.style.display = 'block';
        }
      }).catch(function(error) {
        mensajeErrorDiv.textContent = 'Lo siento... No pudimos encontrar tu personaje. Vuelve a intentar';
        mensajeErrorDiv.style.display = 'block';
      });
  }

  // Evento click para el botón de búsqueda
  searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // Previene la acción por defecto del formulario
    handleSearch();
  });

  // Evento keypress para detectar la tecla "Enter"
  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Previene la acción por defecto del formulario
      handleSearch();
    }
  });

  // Evento click para el botón de borrar
  document.getElementById('btnBorrar').addEventListener('click', function() {
    searchInput.value = '';
    mensajeErrorDiv.style.display = 'none';
  });
});