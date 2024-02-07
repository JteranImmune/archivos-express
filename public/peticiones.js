fetch('/imagenes').then(res => res.json()).then(data => {

    const  carouselInner = document.getElementById('carouselInner');
    
    data.results.forEach(image => {

        const carouselitem = document.createElement('div');
        carouselitem.classList.add("carousel-item");
        carouselitem.innerHTML= `
        <img src="${image.url}" alt="${image.name}" class="d-block w-100">
        <div class="carousel-caption d-none d-md-block">
            <button onclick="window.location.href='${image.url}'" download="${image.name}" class="btn btn-primary">Descargar</button>
        </div>`;

        if (document.querySelector('.carousel-item') === null) {
            carouselitem.classList.add('active');    
        }


        carouselInner.appendChild(carouselitem);
        
    });

})