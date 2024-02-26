const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.content');
const line = document.querySelector('.line');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        line.style.width = e.target.offsetWidth + 'px';
        line.style.left = e.target.offsetLeft + 'px';

        all_content.forEach(content => content.classList.remove('active'));
        all_content[index].classList.add('active');
    });
});
