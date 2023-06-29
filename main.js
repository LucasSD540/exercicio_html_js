const form = document.getElementById('form-ab');
let A = document.getElementById(`campo-a`);
let B = document.getElementById(`campo-b`);
let formEvalido = false;

function validaNumero(A, B) {
    return !isNaN(A.value) && !isNaN(B.value);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    formEvalido = validaNumero(A, B)
    if (parseInt(A.value) < parseInt(B.value)) {
        document.querySelector(`.success-message`).style.display = 'block';
    } else {
        document.querySelector(`.error-message`).style.display = `block`;
    }
})

A.addEventListener('input', function() {
    if (formEvalido) {
        document.querySelector('.error-message').style.display = 'none';
        formEvalido = false;
    }
});

B.addEventListener('input', function() {
    if (formEvalido) {
        document.querySelector('.error-message').style.display = 'none';
        formEvalido = false;
    }
});

A.addEventListener('input', function() {
    document.querySelector('.success-message').style.display = 'none';
});

B.addEventListener('input', function() {
    document.querySelector('.success-message').style.display = 'none';
});
