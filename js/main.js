const images = document.querySelectorAll('.imageDG');

images.forEach(image => {
  image.addEventListener('click', e => {
    const modalImage = e.target.getAttribute('src');
    document.getElementById('modal-image').src = modalImage;
    document.getElementById('modal').classList.remove('hidden');
  });
});

modal = document.getElementById('modal');

modal.addEventListener('click', e => {
  modal.classList.add('hidden');
});

document.getElementById('modal-image').addEventListener('click', e => {
  e.stopPropagation();
});
