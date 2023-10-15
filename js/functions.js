// Функция для проверки длины строки


function strLength(str, characters) {
  return str.length <= characters;
}
strLength();

// Функция для проверки длины строки

function isPalindrome(str) {
  str = str.toString();

  str = str.toLowerCase().replace(/\s|[,.!?"'/-]/g, '');
  return str === str.split('').reverse().join('');
}
isPalindrome();
