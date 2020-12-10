let bgHitam = document.querySelector('.bg-modal');
let kotakPutih = document.querySelector('.kotak-putih');
let buttonLogin = document.querySelector('input[type="button"]');
let buttonClose = document.querySelector('.close');
let modalHeading = document.querySelector('.kotak-putih h2');
let inputUsername = document.querySelector('#username');
let inputPassword = document.querySelector('#password');


function bukaModal() {
    bgHitam.style.display = "flex";
    kotakPutih.style.display = "flex";
};

function tutupModal() {
    bgHitam.style.display = "none";
    kotakPutih.style.display = "none";
    if (inputUsername.value == 'pweb_C' && inputPassword.value == '123123'){
        window.location.href = "indexx.html"
    }
};

function login() {
    let inputUsername = document.querySelector('#username');
    let inputPassword = document.querySelector('#password');
    if (inputUsername.value == 'pweb_C' && inputPassword.value == '123123') {
        bukaModal();
    } else {
        modalHeading.innerText = `Maaf username ${inputUsername.value} tidak terdaftar.`;
        modalHeading.style.color="red";
        bukaModal();
    }
};


buttonLogin.addEventListener("click", login);
buttonClose.addEventListener("click", tutupModal);
kotakPutih.addEventListener("click", function(event) {
    event.stopPropagation();
})