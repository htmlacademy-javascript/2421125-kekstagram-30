// Функция для проверки длины строки

// eslint-disable-next-line no-unused-vars
function strLength(str, characters) {
  return str.length <= characters;
}

// // Cтрока короче 20 символов
// имяФункции('проверяемая строка', 20); // true
// // Длина строки ровно 18 символов
// имяФункции('проверяемая строка', 18); // true
// // Строка длиннее 10 символов
// имяФункции('проверяемая строка', 10); // false

// Функция для проверки длины строки

// eslint-disable-next-line no-unused-vars
function isPalindrome(str) {
  str = str.toString();

  str = str.toLowerCase().replace(/\s|[,.!?"'/-]/g, '');
  return str === str.split('').reverse().join('');
}
