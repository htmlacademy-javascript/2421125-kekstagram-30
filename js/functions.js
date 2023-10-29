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

const timeToString = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  return hours * 60 + Number(minutes);
};

const isWorkingTime = (startWork, endWork, startMeeting, longMeeting) => {
  startWork = timeToString(startWork);
  endWork = timeToString(endWork);
  startMeeting = timeToString(startMeeting);
  return startMeeting >= startWork && startMeeting + longMeeting <= endWork;
};

isWorkingTime('08:00', '18:00', '10:00', 120);
isWorkingTime('08:00', '17:00', '16:30', 90);
