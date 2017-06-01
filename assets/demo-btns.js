const settings =require('electron-settings');

const demoBtns = document.querySelectorAll('.js-container-target');

Array.prototype.forEach.call(demoBtns, function (btn) {
    btn.addEventListener('click', function (e) {
        const parent = e.target.parentElement;

        parent.classList.toggle('is-open');

        if (parent.classList.contains('is-open')) {
            settings.set('activeDemoButtonId', event.target.getAttribute('id'))
        } else {
            settings.delete('activeDemoButtonId');
        }
    })
})

const buttonId = settings.get('activeDemoButtonId');
if (buttonId) {
    document.getElementById(buttonId).click();
}