// On initialise nos éléments pour raccourcir le code
// Exemple : Au lieu d'écrire document.getElementById('show')
// On va écrire simplement toggleButton
const toggleButton = document.getElementById('show');
const toolBar = document.querySelector('.tool-bar');
const nextButton = document.getElementById('avant');
const previousButton = document.getElementById('arriere');

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
const canvas = document.getElementById('canvas');
let currentImageIndex = 0;

const showImage = (index) => {
    const image = images[index];
    if (!image) return;

    if (canvas.tagName.toLowerCase() === 'img') {
        canvas.src = image.src;
        canvas.alt = image.alt;
        canvas.title = image.title;
        return;
    }

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
        const ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
        const width = img.width * ratio;
        const height = img.height * ratio;
        const x = (canvas.width - width) / 2;
        const y = (canvas.height - height) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, width, height);
    };
    img.src = image.src;
};

toggleButton.addEventListener('click', () => {
    if (toolBar.style.display === 'none') {
        toolBar.style.display = 'flex';
    } else {
        toolBar.style.display = 'none';
    }
});
<<<<<<< HEAD
=======


let randomToggle = false;
const randomButton = document.getElementById('melange');
randomButton.addEventListener('click', () => {
    if (randomToggle) {
        randomToggle = false;
        randomButton.style.backgroundColor = '#e2dfdf';
        randomButton.style.color = '#000';
        images.forEach(images, function(e, i) { e.originalIndex = i; });
    } else {
        randomToggle = true;
        randomButton.style.backgroundColor = '#0f74ff';
        randomButton.style.color = '#fff';
        images.sort(() => Math.random() - 0.5);
    }
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    console.log(currentImageIndex);
    showImage(currentImageIndex);
});
previousButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1) % images.length;
    if (currentImageIndex < 0){
        currentImageIndex = 5;
    }
    console.log(currentImageIndex);
    showImage(currentImageIndex);
});

showImage(currentImageIndex);