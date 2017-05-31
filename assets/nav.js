const settings = require('electron-settings');

document.body.addEventListener('click', function (e) {
    if (e.target.dataset.section) {
        handleSectionTrigger(e)
    }
})

function handleSectionTrigger (e) {
    const sections = document.querySelectorAll('.js-section.is-shown');
    Array.prototype.forEach.call(sections, function (section) {
        section.classList.remove('is-shown');
    });

    const buttons = document.querySelectorAll('.nav-button.is-selected');
    Array.prototype.forEach.call(buttons, function (button) {
        button.classList.remove('is-shown');
    });

    event.target.classList.add('is-selected')

    const sectionId = e.target.dataset.section + '-section';
    document.getElementById(sectionId).classList.add('is-shown');

    const buttonId = e.target.getAttribute('id');
    settings.set('activeSectionButtonId', buttonId);
}