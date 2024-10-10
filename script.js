const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    spaceBetween: 16,
});

var listBrands = document.querySelector('.list-brands');
var openClose = 1;
var button = document.querySelector('.button');
var buttonText = button.querySelector('.button p');
var buttonImg = button.querySelector('button img');
button.addEventListener('click', function () {
    if (openClose % 2 === 1) {
        listBrands.classList.remove('list-brands');
        listBrands.classList.add('new-list-brands');
        buttonText.textContent = 'Скрыть';
        buttonImg.classList.add('button__img');
    } else {
        listBrands.classList.remove('new-list-brands');
        listBrands.classList.add('list-brands');
        buttonText.textContent = 'Показать все';
        buttonImg.classList.remove('button__img');
    }
    openClose += 1;
});



