const panels = document.querySelectorAll('.panel');
const active = document.querySelector('.active');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}