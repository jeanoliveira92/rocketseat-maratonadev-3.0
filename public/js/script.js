// ABRIR O MENU PARA INSCRIÇÃO
document
    .querySelector('header button')
    .addEventListener("click", () => {
        document
            .querySelector('.form')
            .classList.toggle('hide')
    });


// DARK MODE
const thememode = () => {
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
        localStorage.setItem("theme-mode", "dark");
    } else {
        document.getElementById("logo").src = "./img/logo.png";
        localStorage.setItem("theme-mode", "light");
    }
};

document.querySelector('#switch-shadow').onclick = thememode;

// VERIFICA SE O MODO DARK FOI ATIVADO ANTERIORMENTE E O APLICA DE NOVO
if (typeof localStorage.getItem("theme-mode") != "undefined") {
    if (localStorage.getItem("theme-mode") === "dark")
        thememode();
}

// TIMER PARA FECHAR O MODAL DE INFORMAÇÃO
setTimeout(() => {
    document.getElementById("error").style.display = "none";
}, 7000);