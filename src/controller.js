import DisplayController from './displayController';

export default function Controller() {
  const displayController = DisplayController();

  const search = document.querySelector('.input');
  const closeDetails = document.getElementById('close-details');
  const body = document.querySelector('body');

  displayController.displayMainPage().then((response) => {
    displayController.initForecast();
  });

  search.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      displayController.displayMainPage(search.value).then((response) => {
        search.value = '';
        displayController.initForecast();
      });
    }
  });

  search.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    search.closest('.search-city').classList.add('active');
  });

  closeDetails.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeDetails.closest('.active').classList.remove('active');
  });

  body.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const activeStuff = document.getElementsByClassName('active');
    for (const active of activeStuff) {
      active.classList.remove('active');
    }
  });
}
