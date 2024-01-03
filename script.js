let currentIndex = 0;

function prevSlide() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateTransform();
}

function nextSlide() {
    const totalItems = document.querySelectorAll('.carousel > div').length;
    currentIndex = Math.min(currentIndex + 1, totalItems - 1);
    updateTransform();
}

function updateTransform() {
    const itemWidth = document.querySelector('.carousel > div').offsetWidth;
    const newPosition = -currentIndex * itemWidth;
    document.querySelector('.carousel').style.transform = `translateX(${newPosition}px)`;
}

fetch('carousel-data.json')
    .then(response => response.json())
    .then(jsonData => {
        var carouselContainer = document.querySelector('.carousel');

        var counter = 1;
        jsonData.forEach(function(item) {
            var carouselItem = document.createElement('div');
            carouselItem.classList.add('item', 'item'+counter);
            carouselItem.innerHTML = `
                <div><img src="${item.imageSrc}" alt=""></div>
                <p class="mt-4">${item.content}</p>
                <div class="d-flex mt-4">
                    <div><img src="${item.avatarSrc}" alt=""></div>
                    <div class="ms-3">
                        <h5>${item.name}</h5>
                        <p>${item.jobTitle}</p>
                    </div>
                </div>
            `;
            carouselContainer.appendChild(carouselItem);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
 