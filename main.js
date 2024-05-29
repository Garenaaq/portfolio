const burgerMenu = document.querySelector('.nav-row__burger');
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('nav-row__burger_active');
    if (document.querySelector('.nav-row__list').style.display === 'flex') document.querySelector('.nav-row__list').style.display = 'none';
    else 
    {
        document.querySelector('.nav-row__list').style.display = 'flex';
    }
});