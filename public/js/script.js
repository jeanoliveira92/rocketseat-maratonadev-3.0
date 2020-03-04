document
    .querySelector('header button')
    .addEventListener("click", () => {
        document
            .querySelector('.form')
            .classList.toggle('hide')
    });


// DARK MODE
document
    .querySelector('#switch-shadow')
    .addEventListener('click', () => {
        document
            .querySelector('body')
            .classList.toggle('dark');

        document
            .getElementById('main')
            .classList.toggle('dark');
        document
            .getElementById('footer')
            .classList.toggle('dark');
        document
            .getElementById('header')
            .classList.toggle('dark');
        document
            .getElementById('switch__container')
            .classList.toggle('dark');

        if (document.getElementById('header').classList.contains('dark')) {
            document.getElementById("logo").src = "./img/logo_dark.png";
        } else {
            document.getElementById("logo").src = "./img/logo.png";
        }
    });