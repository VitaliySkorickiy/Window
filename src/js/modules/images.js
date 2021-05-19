const images = () => {

  const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');

  // создаем popup
  imgPopup.classList.add('popup');
  // в popup помещаем весь блок
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  // в родительский блок помещаем картинку
  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target && e.target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = e.target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (e.target && e.target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }

  });

};

export default images;