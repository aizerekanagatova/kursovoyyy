const data = {
    "course_name": "Примеры игр на Python для начинающих",
    "description": "Эти игры помогут вам ознакомиться с языка программирования Python.",
    "modules": [
        {
            "title": "Крестики-нолики",
            "topics": [
                {
                    "name": "Код игры",
                    "explanation": "Код игры 'Крестики-нолики' на Python.",
                    "code_examples": [
                        {
                            "description": "Полный код игры",
                            "code": "from browser import document, window\nfrom browser.html import BUTTON\n\nboard = [[' ' for _ in range(3)] for _ in range(3)]\ncurrent_player = 'X'\ngame_over = False\n\ndef check_win():\n    \"\"\"Проверяет, есть ли победитель или ничья.\"\"\"\n\n    # Проверка строк\n    for row in range(3):\n        if board[row][0] == board[row][1] == board[row][2] != ' ':\n            return board[row][0]\n\n    # Проверка столбцов\n    for col in range(3):\n        if board[0][col] == board[1][col] == board[2][col] != ' ':\n            return board[0][col]\n\n    # Проверка диагоналей\n    if board[0][0] == board[1][1] == board[2][2] != ' ':\n        return board[0][0]\n    if board[0][2] == board[1][1] == board[2][0] != ' ':\n        return board[0][2]\n\n    # Ничья\n    if all(cell != ' ' for row in board for cell in row):\n        return \"Ничья\"\n\n    return None  # Игра продолжается\n\ndef handle_cell_click(event):\n    \"\"\"Обрабатывает клик по ячейке.\"\"\"\n\n    global current_player, game_over\n\n    if game_over:\n        return  # Ignore clicks if game is over\n\n    cell = event.target\n    row, col = map(int, cell.id.split('-'))\n\n    if board[row][col] == ' ':\n        board[row][col] = current_player\n        cell.text = current_player\n\n        winner = check_win()\n\n        if winner:\n            document['game-board'].innerHTML = f\"Победил {winner}!\"\n            game_over = True\n            document[\"restart-button\"].style.display = \"block\"  # Показать кнопку после завершения игры\n        else:\n            current_player = 'O' if current_player == 'X' else 'X'\n\ndef create_board():\n    \"\"\"Creates the game board and the restart button.\"\"\"\n\n    for row in range(3):\n        for col in range(3):\n            cell = document.createElement('div')\n            cell.id = f\"{row}-{col}\"\n            cell.classList.add('cell')\n            cell.bind('click', handle_cell_click)\n            document.getElementById('game-board').appendChild(cell)\n\n    # Create restart button after the board is created\n    restart_button = BUTTON(\"Начать сначала\")\n    restart_button.id = \"restart-button\"\n    restart_button.style.display = \"none\"  # Initially hidden\n    restart_button.bind(\"click\", restart_game)\n    document.querySelector(\".content-game\").appendChild(restart_button)\n\n\ndef restart_game(event):\n    \"\"\"Restarts the game.\"\"\"\n    global board, current_player, game_over\n\n    board = [[' ' for _ in range(3)] for _ in range(3)]\n    current_player = 'X'\n    game_over = False\n    document['game-board'].innerHTML = ''  # Очистить игровое поле\n    create_board()\n    document[\"restart-button\"].style.display = \"none\"  # Скрыть кнопку после рестарта\n\n# Create the board and the restart button (only once)\ncreate_board()"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Игра 'Угадай цифру'",
            "topics": [
                {
                    "name": "Игра 'Угадай цифру'",
                    "explanation": "Игра, в которой нужно угадать число, загаданное компьютером, за ограниченное количество попыток.",
                    "code_examples": [
                        {
                            "description": "Код игры 'Угадай цифру' на Python (Brython)",
                            "code": "from browser import document, alert\nimport random\n\nsecret_number = random.randint(1, 100)\nattempts_left = 10\n\ndef guess_number(event):\n    global secret_number, attempts_left\n\n    try:\n        guess = int(document[\"guess_input\"].value)\n    except ValueError:\n        alert(\"Пожалуйста, введите число!\")\n        return\n\n    attempts_left -= 1\n    document[\"attempts\"].text = f\"Осталось попыток: {attempts_left}\"\n\n    if guess < secret_number:\n        alert(\"Загаданное число больше!\")\n    elif guess > secret_number:\n        alert(\"Загаданное число меньше!\")\n    else:\n        alert(f\"Поздравляю! Вы угадали число {secret_number} за {10 - attempts_left} попыток!\")\n        reset_game()\n\n    if attempts_left == 0:\n        alert(f\"Попытки закончились! Загаданное число было {secret_number}\")\n        reset_game()\n\ndef reset_game():\n    \"\"\"Сбрасывает игру.\"\"\"\n    global secret_number, attempts_left\n    secret_number = random.randint(1, 100)\n    attempts_left = 10\n    document[\"attempts\"].text = f\"Осталось попыток: {attempts_left}\"\n    document[\"guess_input\"].value = \"\"\n\ndocument[\"guess_button\"].bind(\"click\", guess_number)"
                        }
                    ]
                }
            ]
        }
        , {
            "title": "Викторина",
            "topics": [
                {
                    "name": "Викторина о Python",
                    "explanation": "Проверьте свои знания о Python с помощью этой викторины.",
                    "code_examples": [
                        {
                            "description": "Код викторины на Python (Brython)",
                            "code": `
from browser import document, alert, window

window.score = 0
window.current_question = 0

window.questions = [
    {"question": "Кто создал язык программирования Python?", "options": ["Гвидо ван Россум", "Джеймс Гослинг", "Брендан Айк", "Расмус Лердорф"], "answer": 0},
    {"question": "Какое ключевое слово используется для определения функции в Python?", "options": ["function", "def", "func", "define"], "answer": 1},
    {"question": "Какой тип данных используется для хранения последовательности символов?", "options": ["int", "float", "str", "bool"], "answer": 2},
    {"question": "Что означает аббревиатура PEP в контексте Python?", "options": ["Python Enhancement Proposal", "Python Execution Protocol", "Python Extension Package", "Python Error Prevention"], "answer": 0},
    {"question": "Какая функция используется для вывода данных в консоль?", "options": ["print()", "echo()", "output()", "display()"], "answer": 0},
    {"question": "Как называется функция, которая возвращает длину списка?", "options": ["len()", "length()", "size()", "count()"], "answer": 0},
    {"question": "Какое значение имеет выражение 'True and False'?", "options": ["True", "False", "None", "Error"], "answer": 1},
    {"question": "Что такое кортеж (tuple) в Python?", "options": ["Изменяемый упорядоченный набор элементов", "Неизменяемый упорядоченный набор элементов", "Неупорядоченный набор уникальных элементов", "Словарь с ключами и значениями"], "answer": 1},
    {"question": "Какая библиотека используется для работы с датами и временем?", "options": ["time", "datetime", "calendar", "dateutil"], "answer": 1},
    {"question": "Что делает оператор '%' в Python?", "options": ["Деление", "Умножение", "Возведение в степень", "Остаток от деления"], "answer": 3},
    {"question": "Какое ключевое слово используется для создания цикла, который перебирает элементы списка?", "options": ["for", "while", "do", "foreach"], "answer": 0},
    {"question": "Что такое виртуальное окружение в Python?", "options": ["Песочница для изоляции проектов", "Инструмент для управления версиями", "Библиотека для графического интерфейса", "Фреймворк для веб-разработки"], "answer": 0},
    {"question": "Какая функция используется для открытия файла?", "options": ["open()", "file()", "read()", "load()"], "answer": 0},
    {"question": "Что такое декоратор в Python?", "options": ["Функция, которая изменяет поведение другой функции", "Класс, который наследуется от другого класса", "Модуль, который импортируется в другой модуль", "Переменная, которая хранит ссылку на объект"], "answer": 0},
    {"question": "Какая библиотека используется для научных вычислений и работы с массивами?", "options": ["pandas", "numpy", "matplotlib", "scipy"], "answer": 1}
]

def show_question():
    q = window.questions[window.current_question]  # Используем window.current_question
    document["question"].text = q["question"]
    for i, option in enumerate(q["options"]):
        document[f"option{i}"].text = option

def check_answer(event):
    global score, current_question  # Это уже не нужно, так как переменные глобальные
    if int(event.target.id[-1]) == window.questions[window.current_question]["answer"]:
        window.score += 1
    window.current_question += 1
    if window.current_question < len(window.questions):
        show_question()
    else:
        alert(f"Викторина завершена! Ваш результат: {window.score}/{len(window.questions)}")
        restart_quiz()

def start_quiz():
    show_question()
    for i in range(4):
        document[f"option{i}"].bind("click", check_answer)

def restart_quiz():
    window.score = 0
    window.current_question = 0
    show_question()

# Начинаем викторину
start_quiz()


`
                        }
                    ]
                }
            ]
        }
    ]
}


document.addEventListener('DOMContentLoaded', () => {
    const sidebarList = document.querySelector('.sidebar-list');
    const reviewTitle = document.querySelector('.review-title h1');
    const reviewContent = document.querySelector('.content-description');
    const reviewGame = document.querySelector('.content-game');


    data.modules.forEach((module, moduleIndex) => {
        const moduleItem = document.createElement('li');
        moduleItem.textContent = module.title;
        moduleItem.addEventListener('click', () => {
            displayModuleContent(moduleIndex);
        });
        sidebarList.appendChild(moduleItem);
    });

    function displayModuleContent(moduleIndex) {
        const module = data.modules[moduleIndex];
        reviewTitle.textContent = module.title;
        reviewContent.innerHTML = '';
        reviewGame.innerHTML = ''; // Очищаем область игры перед каждым новым модулем

        module.topics.forEach((topic) => {
            const topicTitle = document.createElement('h3');
            topicTitle.textContent = topic.name;
            reviewContent.appendChild(topicTitle);

            const topicExplanation = document.createElement('p');
            topicExplanation.textContent = topic.explanation;
            reviewContent.appendChild(topicExplanation);

            topic.code_examples.forEach((example) => {
                const exampleDescription = document.createElement('p');
                exampleDescription.innerHTML = `<strong>${example.description}:</strong>`;
                reviewContent.appendChild(exampleDescription);

                const exampleCode = document.createElement('pre');
                exampleCode.textContent = example.code;
                reviewContent.appendChild(exampleCode);
                if (module.title === "Викторина") {

                    reviewGame.innerHTML = `
           <span class="victorina">
            <div id="question"></div>
            <button id="option0"></button>
            <button id="option1"></button>
            <button id="option2"></button>
            <button id="option3"></button>
            <div id="game-board"></div>
           </span>
            <script type="text/python">${example.code}</script>

        `;

                    // Передаем вопросы в Brython


                } else if (module.title.includes("Угадай цифру")) {

                    reviewGame.innerHTML = `               
<span class="random">
    <h1>Угадай число от 1 до 100</h1>
    <input type="number" id="guess_input" placeholder="Введите число">
    <button id="guess_button">Угадать</button>
    <p id="attempts"></p>
</span>
<script type="text/python">${example.code}</script>
` } else {
                    reviewGame.innerHTML = `
<div class="board" id="game-board"></div>
<script type="text/python">${example.code}</script>
`}

            });
        });
    }

    displayModuleContent(0);
});
