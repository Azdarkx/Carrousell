// On initialise nos éléments pour raccourcir le code
// Exemple : Au lieu d'écrire document.getElementById('show')
// On va écrire simplement toggleButton
const toggleButton = document.getElementById('show');
const toolBar = document.querySelector('.tool-bar');
let images = [
    {
        src:"../img/akira-tQNEVEpOkU8-unsplash.jpg",
        title:"Licoris radiata sur fond sombre.",
        alt:"Licoris radiata"
    },
    {
        src:"../img/johannes-andersson-UCd78vfC8vU-unsplash.jpg",
        title:"Deux cerfs broutant paisiblement au pied de la montagne",
        alt:"Cerfs"
    },
    {
        src:"../img/ken-cheung-KonWFWUaAuk-unsplash.jpg",
        title:"Un arbre se noyant dans un lac",
        alt:"Lac"
    },
    {
        src:"../img/robert-lukeman-_RBcxo9AU-U-unsplash.jpg",
        title:"Une arène Hunger Games",
        alt:"Joyeux Hunger Games"
    },
    {
        src:"../img/ryunosuke-kikuno-cFxUZ7UAf-c-unsplash.jpg",
        title:"Des fleurs bleues sur fond blanc",
        alt:"Fleurs bleues"
    },
    {
        src:"../img/v2osk-1Z2niiBPg5A-unsplash.jpg",
        title:"Des montagnes",
        alt:"Montagnes"
    }
];

toggleButton.addEventListener('click', () => {
    if (toolBar.style.display === 'none') {
        toolBar.style.display = 'flex';
    } else {
        toolBar.style.display = 'none';
    }
});


let randomToggle = false;
const randomButton = document.getElementById('melange');
randomButton.addEventListener('click', () => {
    if (randomToggle) {
        randomToggle = false;
        randomButton.style.backgroundColor = '#e2dfdf';
        randomButton.style.color = '#000';
    } else {
        randomToggle = true;
        randomButton.style.backgroundColor = '#0f74ff';
        randomButton.style.color = '#fff';
    }
});

