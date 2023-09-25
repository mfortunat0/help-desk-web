const inputElement = document.querySelector('#customFile');
const inputLabel = document.querySelector('#customFileLabel');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonModal = document.querySelector('#buttonModal');

inputElement.addEventListener('change', () => {
  if (inputElement.files.length > 0) {
    console.log('asdas');
    inputLabel.classList.add('custom-file-label-confirmed');
    inputLabel.innerHTML = 'Anexado';
  } else {
    inputLabel.classList.remove('custom-file-label-confirmed');
  }
});

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

buttonModal.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});
