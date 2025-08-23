const toggleMenu = document.getElementById('toggleMenu');
const buttonContainer = document.querySelector('.button-container');
const buttons = document.querySelectorAll('.btn');

toggleMenu.addEventListener('click', () => {
  if (buttonContainer.classList.contains('hidden')) {
    buttonContainer.classList.remove('hidden');
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.classList.add('show');
      }, index * 300); // cada botão aparece com atraso de 0.3s
    });
  } else {
    // animação para esconder
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.classList.remove('show');
      }, index * 100);
    });
    setTimeout(() => {
      buttonContainer.classList.add('hidden');
    }, buttons.length * 100 + 500);
  }
});
