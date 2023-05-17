const audio = document.querySelector('audio');
const compositionList = document.querySelector('.composition-list');
const compositionButtons = compositionList.querySelectorAll('button');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentIndex = 0;

// функция для вызова при выборе другой композиции
function selectComposition(index) {
  // запоминаем текущий индекс
  currentIndex = index;
  // получаем путь к файлу композиции и вставляем его в аудио-элемент
  const source = compositionButtons[index].getAttribute('data-src');
  audio.src = source;
  compositionButtons.forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector('#audio-player').play();
  compositionButtons[index].classList.add('active');
  // обновляем заголовок в плеере
  const header = document.querySelector('.player .header h2');
  header.innerHTML = compositionButtons[index].textContent;
}

// назначаем обработчики событий на кнопки выбора композиций
compositionButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    selectComposition(index);
  });
});

// назначаем обработчики событий на кнопки «назад» и «вперед»
prevButton.addEventListener('click', () => {
  let index = currentIndex - 1;
  if (index < 0) {
    index = compositionButtons.length - 1;
  }
  selectComposition(index);
});

nextButton.addEventListener('click', () => {
  let index = currentIndex + 1;
  if (index >= compositionButtons.length) {
    index = 0;
  }
  selectComposition(index);
});

// выбираем первую композицию по умолчанию
selectComposition(currentIndex);