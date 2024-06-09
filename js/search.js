function buscarHeroe() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const heroesList = document.querySelectorAll('.heroes');
  
    // Itera per heroesList y encuentra el héroe que se busca
    heroesList.forEach((heroes) => {
      const heroeTitle = heroes.querySelector('h3').textContent.toLowerCase();
      if (heroeTitle.includes(input)) {
        // Navega a la sección correspondiente en heroes.html
        window.location.href = `heroes.html?search=${heroeTitle}#${heroeTitle}`;
      }
    });
  }
  
  document.getElementById('searchButton').addEventListener('click', buscarHeroe);