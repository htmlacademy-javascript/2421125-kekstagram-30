// Функция для проверки длины строки


// eslint-disable-next-line no-unused-vars
function strLength(str, characters) {
  return str.length <= characters;
}


// Функция для проверки длины строки

// eslint-disable-next-line no-unused-vars
function isPalindrome(str) {
  str = str.toString();

  str = str.toLowerCase().replace(/\s|[,.!?"'/-]/g, '');
  return str === str.split('').reverse().join('');
}
