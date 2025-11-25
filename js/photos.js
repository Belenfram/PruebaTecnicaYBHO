//Buscador de fotos
document.addEventListener('DOMContentLoaded', function() {

    const photoItems = document.querySelectorAll('.photo-item');

    const searchInput = document.getElementById('photoSearch');
    
    if (searchInput) {
        //Filtración de fotos
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            photoItems.forEach(item => {
                const photoTitleElement = item.querySelector('.photo-title');
                const photoTitle = photoTitleElement ? photoTitleElement.textContent.toLowerCase() : '';
                
                if (photoTitle.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = searchTerm ? 'none' : 'flex';
                }
            });
            
            //Ocultar secciones vacías
            updateSectionVisibility();
        });
    }
    
    //Si una sección no tiene fotos visibles se oculta
    function updateSectionVisibility() {
        const sections = document.querySelectorAll('main > section');
        
        sections.forEach(section => {
            const visibleItems = section.querySelectorAll('.photo-item[style="display: flex;"], .photo-item:not([style*="display"])');
            
            if (visibleItems.length === 0) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        });
    }
    
});