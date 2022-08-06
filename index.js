const clockContainer = document.querySelector(".clock-container");

function clockSetter() {
  const date = new Date();
  function addZeros(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  const hours = addZeros(date.getHours());
  const minutes = addZeros(date.getMinutes());
  const seconds = addZeros(date.getSeconds());
  clockContainer.textContent = `${hours}:${minutes}:${seconds}`;

  setTimeout(clockSetter, 1000);
}

clockSetter();
