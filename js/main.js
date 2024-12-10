import flags from './model/flags.js';

document.addEventListener('DOMContentLoaded', () => {
    
    const main = document.getElementById('main');

    const createTemplate = () => {
        const template = document.getElementById('template');
        const clone = template.content.cloneNode(true);
        main.appendChild(clone);
    }

    flags.forEach(flag => {
        createTemplate();
        const flagImg = main.lastElementChild.firstElementChild;
        const flagName = main.lastElementChild.lastElementChild;
        flagImg.src = flag.image;
        flagName.textContent = flag.name;
    })

})
