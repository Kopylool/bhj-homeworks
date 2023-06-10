function updateBlocks() {
    const signinBlock = document.getElementById('signin');
    const welcomeBlock = document.getElementById('welcome');
    const userSpan = document.getElementById('user_id');

    const userId = localStorage.getItem('user_id');
    if(userId) {
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
        userSpan.textContent = userId;
    } else {
        signinBlock.classList.add('signin_active');
        welcomeBlock.classList.remove('welcome_active');
    }    
}

function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('signin__form');
    const loginInput = form.querySelector('input[name="login"]');
    const passwordInput = form.querySelector('input[name="password"]');

    const login = loginInput.value;
    const password = passwordInput.value;

    fetch(form.action, {
        method: 'POST',
        body: JSON.stringify({ login, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
          const userId = data.user_id;
          localStorage.setItem('user_id', userId);

          updateBlocks();
        } else {
            alert('Неверный логин/пароль');
        }
    })
    .catch(error => {
        console.error('Ошибка при авторизации:', error);
        alert('Произошла ошибка при авторизации');
    });

    form.reset();
}

const signinForm = document.getElementById('signin__form');
signinForm.addEventListener('submit', submitForm);

window.addEventListener('load', updateBlocks);