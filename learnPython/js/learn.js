const data = {
	course_name: 'Основы Python для начинающих',
	description: 'Этот курс поможет вам освоить базовые концепции языка программирования Python.',
	modules: [
		{
			title: 'Введение в Python',
			topics: [
				{
					name: 'Что такое Python?',
					explanation: 'Python - это высокоуровневый язык программирования общего назначения, известный своей простотой и читаемостью.',
					code_examples: [
						{
							description: 'Пример вывода текста на экран',
							code: "print('Hello, world!')",
						},
					],
				},
				{
					name: 'Установка Python',
					explanation: 'Инструкции по установке Python на различные операционные системы.',
					code_examples: [],
				},
			],
		},
		{
			title: 'Переменные и типы данных',
			topics: [
				{
					name: 'Переменные',
					explanation: 'Переменные - это контейнеры для хранения данных.',
					code_examples: [
						{
							description: 'Создание переменных разных типов',
							code: "name = 'Alice'\nage = 30\nprice = 19.99",
						},
					],
				},
				{
					name: 'Типы данных',
					explanation: 'Основные типы данных в Python: числа, строки, булевы значения, списки, словари и др.',
					code_examples: [
						{
							description: 'Проверка типа данных',
							code: "print(type(name))  # Выведет <class 'str'>\nprint(type(age))  # Выведет <class 'int'>\nprint(type(price)) # Выведет <class 'float'>",
						},
					],
				},
			],
		},
		{
			title: 'Операторы',
			topics: [
				{
					name: 'Арифметические операторы',
					explanation: 'Операторы для выполнения математических операций.',
					code_examples: [
						{
							description: 'Примеры арифметических операций',
							code: 'x = 5\ny = 3\nprint(x + y)  # Сложение\nprint(x - y)  # Вычитание\nprint(x * y)  # Умножение\nprint(x / y)  # Деление\nprint(x // y) # Целочисленное деление\nprint(x % y)  # Остаток от деления',
						},
					],
				},
				{
					name: 'Операторы сравнения',
					explanation: 'Операторы для сравнения значений.',
					code_examples: [
						{
							description: 'Примеры операторов сравнения',
							code: 'x = 5\ny = 3\nprint(x == y)  # Равно\nprint(x != y)  # Не равно\nprint(x > y)   # Больше\nprint(x < y)   # Меньше\nprint(x >= y)  # Больше или равно\nprint(x <= y)  # Меньше или равно',
						},
					],
				},
				{
					name: 'Логические операторы',
					explanation: 'Операторы для комбинирования логических выражений.',
					code_examples: [
						{
							description: 'Примеры логических операторов',
							code: 'x = True\ny = False\nprint(x and y)  # И\nprint(x or y)   # ИЛИ\nprint(not x)    # НЕ',
						},
					],
				},
				{
					name: 'Операторы присваивания',
					explanation: 'Операторы для присваивания значений переменным.',
					code_examples: [
						{
							description: 'Примеры операторов присваивания',
							code: 'x = 5\nx += 3  # Эквивалентно x = x + 3\nx -= 2  # Эквивалентно x = x - 2\nx *= 4  # Эквивалентно x = x * 4',
						},
					],
				},
				{
					name: 'Битовые операторы',
					explanation: 'Операторы для работы с числами на уровне битов.',
					code_examples: [
						{
							description: 'Примеры битовых операторов',
							code: 'x = 5  # 0101 в двоичном представлении\ny = 3  # 0011 в двоичном представлении\nprint(x & y)  # Побитовое И\nprint(x | y)  # Побитовое ИЛИ\nprint(x ^ y)  # Побитовое исключающее ИЛИ\nprint(~x)     # Побитовое НЕ',
						},
					],
				},
				{
					name: 'Операторы принадлежности',
					explanation: 'Операторы для проверки принадлежности элемента к последовательности.',
					code_examples: [
						{
							description: 'Примеры операторов принадлежности',
							code: "fruits = ['apple', 'banana', 'orange']\nprint('apple' in fruits)  # True\nprint('grape' in fruits)  # False",
						},
					],
				},
			],
		},
		{
			title: 'Строки',
			topics: [
				{
					name: 'Создание строк',
					explanation: 'Строки в Python могут быть созданы с помощью одинарных или двойных кавычек.',
					code_examples: [
						{
							description: 'Примеры создания строк',
							code: "s1 = 'Hello'\ns2 = \"World\"",
						},
					],
				},
				{
					name: 'Конкатенация строк',
					explanation: 'Конкатенация строк осуществляется с помощью оператора +.',
					code_examples: [
						{
							description: 'Пример конкатенации строк',
							code: "greeting = 'Hello, ' + 'world!'",
						},
					],
				},
				{
					name: 'Многострочные строки',
					explanation: 'Многострочные строки можно создавать с помощью тройных кавычек.',
					code_examples: [
						{
							description: 'Пример многострочной строки',
							code: `text = """\nЭто многострочная строка\nв Python.\n"""`,
						},
					],
				},
				{
					name: 'Экранированные символы',
					explanation: 'Экранированные символы используются для включения специальных символов в строку.',
					code_examples: [
						{
							description: 'Пример экранированных символов',
							code: "newline = 'Первая строка\\nВторая строка'\ntab = 'Первая колонка\\tВторая колонка'",
						},
					],
				},
			],
		},
		{
			title: 'Функции',
			topics: [
				{
					name: 'Определение функций',
					explanation: 'Функции определяются с помощью ключевого слова def, за которым следует имя функции и параметры в круглых скобках.',
					code_examples: [
						{
							description: 'Пример определения функции',
							code: "def greet(name):\n    return f'Hello, {name}!'",
						},
					],
				},
				{
					name: 'Вызов функций',
					explanation: 'Функции вызываются с указанием их имени и передаваемыми аргументами в круглых скобках.',
					code_examples: [
						{
							description: 'Пример вызова функции',
							code: "message = greet('Alice')\nprint(message)  # Выведет 'Hello, Alice!'",
						},
					],
				},
				{
					name: 'Аргументы по умолчанию',
					explanation: 'Функции могут иметь аргументы по умолчанию, которые используются, если аргумент не передан.',
					code_examples: [
						{
							description: 'Пример аргументов по умолчанию',
							code: "def greet(name='гость'):\n    return f'Hello, {name}!'\n\nprint(greet())      # Выведет 'Hello, гость!'\nprint(greet('Alice'))  # Выведет 'Hello, Alice!'",
						},
					],
				},
			],
		},
		{
			title: 'Циклы',
			topics: [
				{
					name: 'Цикл for',
					explanation: 'Цикл for используется для итерации по последовательностям (например, спискам или строкам).',
					code_examples: [
						{
							description: 'Пример цикла for',
							code: "for i in range(5):\n    print(i)  # Выведет числа от 0 до 4",
						},
					],
				},
				{
					name: 'Цикл while',
					explanation: 'Цикл while выполняется до тех пор, пока условие истинно.',
					code_examples: [
						{
							description: 'Пример цикла while',
							code: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1",
						},
					],
				},
				{
					name: 'Операторы break и continue',
					explanation: 'Операторы break и continue используются для управления потоком выполнения циклов.',
					code_examples: [
						{
							description: 'Пример использования break и continue',
							code: "for i in range(10):\n    if i == 5:\n        break\n    if i % 2 == 0:\n        continue\n    print(i)  # Выведет 1, 3",
						},
					],
				},
			],
		},
		{
			title: 'Списки',
			topics: [
				{
					name: 'Создание списков',
					explanation: 'Списки создаются с помощью квадратных скобок и могут содержать элементы различных типов.',
					code_examples: [
						{
							description: 'Пример создания списка',
							code: "fruits = ['apple', 'banana', 'orange']",
						},
					],
				},
				{
					name: 'Доступ к элементам списка',
					explanation: 'Элементы списка доступны по индексу, начиная с 0.',
					code_examples: [
						{
							description: 'Пример доступа к элементам списка',
							code: "first_fruit = fruits[0]  # 'apple'\nlast_fruit = fruits[-1]  # 'orange'",
						},
					],
				},
				{
					name: 'Методы списков',
					explanation: 'Python предоставляет множество встроенных методов для работы со списками.',
					code_examples: [
						{
							description: 'Примеры методов списков',
							code: "fruits.append('grape')   # Добавление элемента\nfruits.remove('banana')  # Удаление элемента\nfruits.sort()            # Сортировка списка",
						},
					],
				},
			],
		},
		{
			title: 'Словари',
			topics: [
				{
					name: 'Создание словарей',
					explanation: 'Словари создаются с помощью фигурных скобок и содержат пары ключ-значение.',
					code_examples: [
						{
							description: 'Пример создания словаря',
							code: "person = {'name': 'Alice', 'age': 25, 'city': 'New York'}",
						},
					],
				},
				{
					name: 'Доступ к элементам словаря',
					explanation: 'Элементы словаря доступны по ключу.',
					code_examples: [
						{
							description: 'Пример доступа к элементам словаря',
							code: "name = person['name']  # 'Alice'\nage = person['age']    # 25",
						},
					],
				},
				{
					name: 'Методы словарей',
					explanation: 'Python предоставляет множество встроенных методов для работы со словарями.',
					code_examples: [
						{
							description: 'Примеры методов словарей',
							code: "keys = person.keys()     # Получение всех ключей\nvalues = person.values()  # Получение всех значений\nitems = person.items()    # Получение всех пар ключ-значение",
						},
					],
				},
			],
		},
		{
			title: 'Файлы',
			topics: [
				{
					name: 'Открытие и закрытие файлов',
					explanation: 'Файлы открываются с помощью функции open() и должны быть закрыты после завершения работы с ними.',
					code_examples: [
						{
							description: 'Пример открытия и закрытия файла',
							code: "file = open('example.txt', 'r')\ncontent = file.read()\nfile.close()",
						},
					],
				},
				{
					name: 'Чтение и запись файлов',
					explanation: 'Python поддерживает различные методы для чтения и записи файлов.',
					code_examples: [
						{
							description: 'Примеры чтения и записи файлов',
							code: "with open('example.txt', 'r') as file:\n    content = file.read()\n\nwith open('example.txt', 'w') as file:\n    file.write('New content')",
						},
					],
				},
				{
					name: 'Работа с CSV файлами',
					explanation: 'Python предоставляет модуль csv для работы с CSV файлами.',
					code_examples: [
						{
							description: 'Пример работы с CSV файлами',
							code: "import csv\n\nwith open('example.csv', 'r') as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)",
						},
					],
				},
			],
		},
		{
			title: 'Классы и объекты',
			topics: [
				{
					name: 'Создание классов',
					explanation: 'Классы определяются с помощью ключевого слова class и содержат методы и атрибуты.',
					code_examples: [
						{
							description: 'Пример создания класса',
							code: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age",
						},
					],
				},
				{
					name: 'Создание объектов',
					explanation: 'Объекты создаются с помощью вызова класса как функции.',
					code_examples: [
						{
							description: 'Пример создания объекта',
							code: "person = Person('Alice', 25)",
						},
					],
				},
				{
					name: 'Методы классов',
					explanation: 'Методы классов определяются внутри класса и работают с объектами этого класса.',
					code_examples: [
						{
							description: 'Пример метода класса',
							code: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def greet(self):\n        return f'Hello, my name is {self.name} and I am {self.age} years old.'",
						},
					],
				},
			],
		},
		{
			title: 'Исключения',
			topics: [
				{
					name: 'Обработка исключений',
					explanation: 'Исключения обрабатываются с помощью конструкции try-except.',
					code_examples: [
						{
							description: 'Пример обработки исключений',
							code: "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Деление на ноль невозможно')",
						},
					],
				},
				{
					name: 'Создание пользовательских исключений',
					explanation: 'Пользовательские исключения создаются с помощью определения нового класса, наследующегося от Exception.',
					code_examples: [
						{
							description: 'Пример создания пользовательского исключения',
							code: "class MyCustomError(Exception):\n    pass\n\ntry:\n    raise MyCustomError('Произошла ошибка')\nexcept MyCustomError as e:\n    print(e)",
						},
					],
				},
			],
		},
	],
};


document.addEventListener('DOMContentLoaded', () => {
	const sidebarList = document.querySelector('.sidebar-list');
	const reviewTitle = document.querySelector('.review-title h1');
	const reviewContent = document.querySelector('.content');

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
			});
		});
	}

	displayModuleContent(0);
});
