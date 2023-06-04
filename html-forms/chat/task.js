const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value.trim() !== '') {
    const message = `
      <div class="message message_client">
        <div class="message__time">${getTime()}</div>
        <div class="message__text">${input.value}</div>
      </div>
    `;
    messages.innerHTML += message;
    input.value = '';
    sendRobotMessage();
  }
});

function sendRobotMessage() {
  const messagesText = [
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'К сожалению, все операторы заняты. Не пишите нам больше',
    'Вы не купили ни одного товара, чтобы так с нами разговаривать!',
    'Добрый день! До свидания!',
  ];
  const message = `
    <div class="message">
      <div class="message__time">${getTime()}</div>
      <div class="message__text">${messagesText[Math.floor(Math.random() * messagesText.length)]}</div>
    </div>
  `;
  messages.innerHTML += message;
  scrollToLastMessage();
}

function getTime() {
  const date = new Date();
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return `${hours}:${minutes}`;
}

function scrollToLastMessage() {
  messages.lastElementChild.scrollIntoView();
}

let timeoutId;
function startRobotQuestionTimer() {
  timeoutId = setTimeout(() => {
    const message = `
      <div class="message">
        <div class="message__time">${getTime()}</div>
        <div class="message__text">Вы ещё здесь?</div>
      </div>
    `;
    messages.innerHTML += message;
    scrollToLastMessage();
    startRobotQuestionTimer();
  }, 30000);
}
startRobotQuestionTimer();

chatWidget.addEventListener('click', () => {
  clearTimeout(timeoutId);
  startRobotQuestionTimer();
});