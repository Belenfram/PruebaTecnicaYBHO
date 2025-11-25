//Buscador de imágenes
document.addEventListener('DOMContentLoaded', function() {

    const albumCards = document.querySelectorAll('.album-card');

    const searchInput = document.getElementById('albumSearch');
    
    if (searchInput) {
        //Filtración de carpetas
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            albumCards.forEach(card => {
                const albumNameElement = card.querySelector('.album-name');
                const albumName = albumNameElement ? albumNameElement.textContent.toLowerCase() : '';
                
                if (albumName.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = searchTerm ? 'none' : 'block';
                }
            });
        });
    }
    
});
