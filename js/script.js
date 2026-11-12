// On initialise nos éléments pour raccourcir le code
// Exemple : Au lieu d'écrire document.getElementById('show')
// On va écrire simplement toggleButton
const toggleButton = document.getElementById('show');
const toolBar = document.querySelector('.tool-bar');

toggleButton.addEventListener('click', () => {
    if (toolBar.style.display === 'none') {
        toolBar.style.display = 'flex';
    } else {
        toolBar.style.display = 'none';
    }
});
