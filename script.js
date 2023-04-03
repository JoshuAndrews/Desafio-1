const heartContainers = document.querySelectorAll('.heart-container');

for (let i = 0; i < heartContainers.length; i++) {
  const heartIcon = heartContainers[i].querySelector('.heart-icon');
  const heartFilledIcon = heartContainers[i].querySelector('.heart-icon-filled');

  heartContainers[i].addEventListener('click', () => {
    heartIcon.classList.toggle('filled');
    heartFilledIcon.classList.toggle('filled');
  });
}
