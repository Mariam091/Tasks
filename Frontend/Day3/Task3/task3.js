document.addEventListener('DOMContentLoaded', function () {
    const check = document.getElementById('check');
    const ul = document.querySelector('nav ul');

    check.addEventListener('change', function () {
        if (this.checked) {
            ul.classList.add('active');
        } else {
            ul.classList.remove('active');
        }
    });
});


