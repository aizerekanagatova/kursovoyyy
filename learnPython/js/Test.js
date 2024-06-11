
document.addEventListener('DOMContentLoaded', () => {
	const questions = [
		{ question: "Что такое Python?", answers: { a: "Язык разметки", b: "Язык программирования", c: "Система управления базами данных" }, correctAnswer: "b" },
		{ question: "Какой оператор используется для вывода текста на экран?", answers: { a: "print", b: "echo", c: "write" }, correctAnswer: "a" },
		{ question: "Какая функция используется для определения типа данных в Python?", answers: { a: "typeof()", b: "type()", c: "gettype()" }, correctAnswer: "b" },
		{ question: "Как создать строковую переменную в Python?", answers: { a: "string name = 'Alice'", b: "name := 'Alice'", c: "name = 'Alice'" }, correctAnswer: "c" },
		{ question: "Какие основные типы данных существуют в Python?", answers: { a: "Числа, строки, булевы значения", b: "Объекты, массивы, кортежи", c: "Числа, списки, деревья" }, correctAnswer: "a" },
		{ question: "Как проверить тип переменной?", answers: { a: "typeof()", b: "isinstance()", c: "type()" }, correctAnswer: "c" },
		{ question: "Какой результат выполнения выражения 5 + 3?", answers: { a: "53", b: "8", c: "15" }, correctAnswer: "b" },
		{ question: "Какой результат выполнения выражения 5 / 2?", answers: { a: "2.5", b: "2", c: "2.0" }, correctAnswer: "a" },
		{ question: "Какой оператор используется для целочисленного деления?", answers: { a: "/", b: "//", c: "%" }, correctAnswer: "b" },
		{ question: "Какой оператор используется для получения остатка от деления?", answers: { a: "%", b: "//", c: "&" }, correctAnswer: "a" },
		{ question: "Какой результат выполнения выражения 5 == 5?", answers: { a: "True", b: "False", c: "None" }, correctAnswer: "a" },
		{ question: "Какой результат выполнения выражения 5 != 3?", answers: { a: "True", b: "False", c: "None" }, correctAnswer: "a" },
		{ question: "Какой результат выполнения выражения 5 > 3?", answers: { a: "True", b: "False", c: "None" }, correctAnswer: "a" },
		{ question: "Какой результат выполнения выражения 5 < 3?", answers: { a: "True", b: "False", c: "None" }, correctAnswer: "b" },
		{ question: "Какой результат выполнения выражения 5 >= 5?", answers: { a: "True", b: "False", c: "None" }, correctAnswer: "a" },
		{ question: "Какой результат выполнения выражения 5 <= 3?", answers: { a: "True", b: "False", c: "None" }, correctAnswer: "b" },
		{ question: "Что возвращает выражение True and False?", answers: { a: "True", b: "False", c: "None" }, correctAnswer: "b" },
		{ question: "Что возвращает выражение True or False?", answers: { a: "True", b: "False", c: "None" }, correctAnswer: "a" },
		{ question: "Что возвращает выражение not True?", answers: { a: "True", b: "False", c: "None" }, correctAnswer: "b" },
		{ question: "Какой оператор используется для присваивания значения переменной?", answers: { a: "=", b: "==", c: "===" }, correctAnswer: "a" },
		{ question: "Какой результат выполнения выражения x = 5; x += 3?", answers: { a: "8", b: "5", c: "8.0" }, correctAnswer: "a" },
		{ question: "Какой результат выполнения выражения x = 5; x -= 3?", answers: { a: "2", b: "3", c: "5" }, correctAnswer: "a" },
		{ question: "Какой результат выполнения выражения x = 5; x *= 3?", answers: { a: "15", b: "8", c: "5" }, correctAnswer: "a" },
		{ question: "Какой оператор используется для побитового И?", answers: { a: "&", b: "|", c: "^" }, correctAnswer: "a" },
		{ question: "Какой оператор используется для побитового ИЛИ?", answers: { a: "&", b: "|", c: "^" }, correctAnswer: "b" },
		{ question: "Какой оператор используется для побитового исключающего ИЛИ?", answers: { a: "&", b: "|", c: "^" }, correctAnswer: "c" },
		{ question: "Какой оператор используется для проверки принадлежности элемента к последовательности?", answers: { a: "in", b: "not in", c: "belongs" }, correctAnswer: "a" },
		{ question: "Как проверить наличие элемента в списке?", answers: { a: "'apple' in fruits", b: "'apple' belongs fruits", c: "'apple' has fruits" }, correctAnswer: "a" },
		{ question: "Какая команда используется для вывода текста на экран?", answers: { a: "print()", b: "echo()", c: "write()" }, correctAnswer: "a" }
	];



	const quizContainer = document.getElementById('quiz-form');
	const resultContainer = document.getElementById('result');
	const submitButton = document.getElementById('submit-btn');
	const prevButton = document.getElementById('prev-btn');
	const nextButton = document.getElementById('next-btn');
	const timerElement = document.getElementById('timer');
	const scoreElement = document.getElementById('score');
	const restartButton = document.createElement('button');
	restartButton.textContent = 'Начать сначала';
	restartButton.style.display = 'none';
	quizContainer.parentElement.appendChild(restartButton);

	let currentQuestionIndex = 0;
	const questionsPerPage = 5;
	let startTime;
	let timerInterval;
	let score = 0;
	let userAnswers = {};

	function startQuiz() {
		currentQuestionIndex = 0;
		score = 0;
		userAnswers = {};
		resultContainer.innerHTML = '';
		restartButton.style.display = 'none';
		submitButton.style.display = 'none';
		nextButton.style.display = 'block';
		prevButton.disabled = true;

		clearInterval(timerInterval); // Останавливаем старый таймер
		startTimer(); // Запускаем новый таймер
		showQuestions();
		updateScore(); // Обновляем счет на экране
	}

	function startTimer() {
		let timeLeft = 1800;
		clearInterval(timerInterval);
		timerInterval = setInterval(() => {
			const minutes = Math.floor(timeLeft / 60);
			const seconds = timeLeft % 60;
			timerElement.innerHTML = `Время: <span class="math-inline">${minutes}:</span>${seconds < 10 ? '0' : ''}${seconds}`;
			if (timeLeft === 0) {
				clearInterval(timerInterval);
				alert('Время вышло! Тест завершен.');
				showResults();
			}
			timeLeft--;
		}, 1000);
	}
	function showQuestions() {
		quizContainer.innerHTML = '';

		const startIndex = currentQuestionIndex;
		const endIndex = Math.min(currentQuestionIndex + questionsPerPage, questions.length);

		for (let i = startIndex; i < endIndex; i++) {
			const questionIndex = i; // Исправление: используем questionIndex вместо i
			const question = questions[questionIndex];
			const questionDiv = document.createElement('div');
			questionDiv.className = 'question';
			questionDiv.textContent = question.question;

			const answersDiv = document.createElement('div');
			answersDiv.className = 'answers';
			for (let letter in question.answers) {
				const answerLabel = document.createElement('label');
				answerLabel.innerHTML = `
                <input type="radio" name="question${questionIndex}" value="${letter}" ${userAnswers[questionIndex] === letter ? 'checked' : ''}>
                ${letter}: ${question.answers[letter]}
            `;
				answersDiv.appendChild(answerLabel);
			}

			quizContainer.appendChild(questionDiv);
			quizContainer.appendChild(answersDiv);
		}
	}


	function updatePaginationButtons() {
		prevButton.disabled = currentQuestionIndex === 0;
		nextButton.disabled = currentQuestionIndex >= questions.length - questionsPerPage;
		submitButton.style.display = currentQuestionIndex >= questions.length - questionsPerPage ? 'block' : 'none';
	}
	function checkAnswer(questionIndex) {
		return userAnswers[questionIndex] === questions[questionIndex].correctAnswer;
	}

	function showResults() {
		let numCorrect = 0;
		for (let i = 0; i < questions.length; i++) {
			if (checkAnswer(i)) {
				numCorrect++;
			}
		}
		const scorePercent = (numCorrect / questions.length) * 100;
		alert(`Вы ответили правильно на ${numCorrect} из ${questions.length} вопросов. Ваш результат: ${scorePercent.toFixed(2)}%`);
	}

	function updateScore() {
		let numCorrect = 0;
		for (let i = 0; i < questions.length; i++) {
			if (checkAnswer(i)) {
				numCorrect++;
			}
		}
		score = numCorrect;
		// scoreElement.textContent = `Текущий счет: ${score}`;
	}

	quizContainer.addEventListener('change', (event) => {
		const questionIndex = parseInt(event.target.name.replace('question', ''));
		userAnswers[questionIndex] = event.target.value;
		updateScore();
	});

	prevButton.addEventListener('click', () => {
		currentQuestionIndex -= questionsPerPage;
		showQuestions();
		updatePaginationButtons();
	});

	nextButton.addEventListener('click', () => {
		currentQuestionIndex += questionsPerPage;
		showQuestions();
		updatePaginationButtons();
	});

	submitButton.addEventListener('click', () => {
		showResults();
		clearInterval(timerInterval);

		restartButton.style.display = 'block';
	});

	restartButton.addEventListener('click', () => {
		window.location.reload();
	});

	document.addEventListener('DOMContentLoaded', () => {
		startQuiz();

	});

	startTimer();
	startQuiz();



})
