function createHeader() {
  const headerHTML = `
    <header>
      <div class="header">
        <div class="header-links">
          <a href="../index.html" class="header-logo">
            <img src="../assets/icon/python-icon.png" alt="Python Icon">
            <span class="header-title">Python<span class="header-title-word">Land</span></span>
          </a>
          <ul class="links">
            <li><a href="../html/learn.html">Учеба</a></li>
            <li><a href="../html/games.html">Игры</a></li>
            <li><a href="../html/test.html">Тест</a></li>
          </ul>
        </div>
        <div class="header-login">
          ${getUser()}
        </div>
      </div>
    </header>
  `;

  const body = document.querySelector('body');
  const headerContainer = document.createElement('div');
  headerContainer.innerHTML = headerHTML;
  body.insertBefore(headerContainer, body.firstChild);

  applyHeaderStyles(); // Применяем стили к заголовку
}

function getUser() {
  const user = JSON.parse(localStorage.getItem('user')) || null;
  if (user) {
    return `
      <a href="#" style="padding-right: 10px;">${user.username}</a>
      <button class="join" onclick="logout()">Выйти</button>
    `;
  }
  return `
    <a href="../html/login.html"><button class="login">Войти</button></a>
    <a href="../html/join.html"><button class="join">Регистрация</button></a>
  `;
}

function logout() {
  localStorage.removeItem('user');
  window.location.reload();
}

function applyHeaderStyles() {
  const header = document.querySelector('.header');
  const transparentPages = ['index.html', 'test.html', '']; // Список страниц с прозрачным фоном
  if (transparentPages.includes(window.location.pathname.split('/').pop())) { // Проверяем текущую страницу
    header.style.backgroundColor = 'transparent'; // Устанавливаем прозрачный фон
  }
  header.style.color = 'red'; // Устанавливаем красный цвет текста для всех заголовков
}

createHeader();
