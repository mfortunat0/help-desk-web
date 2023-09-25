const inputElement = document.querySelector('#customFile');
const inputLabel = document.querySelector('#customFileLabel');
const modalChamados = document.querySelector('#modalChamados');
const modalDescricao = document.querySelector('#modalDescricao');
const overlay = document.querySelector('.overlay');
const buttonModal = document.querySelector('#buttonModal');
const trs = document.querySelectorAll('tr');

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
  modalChamados.style.display = 'none';
  modalDescricao.style.display = 'none';
  overlay.style.display = 'none';
});

buttonModal.addEventListener('click', () => {
  modalChamados.style.display = 'block';
  overlay.style.display = 'block';
});

trs.forEach((tr) => {
  tr.addEventListener('click', () => {
    if (tr.id !== '') {
      modalDescricao.style.display = 'block';
      overlay.style.display = 'block';
    }
  });
});
