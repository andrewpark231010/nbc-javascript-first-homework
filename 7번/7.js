let i = 0;
const intervalId = setInterval(() => {
  document.querySelector("body").innerHTML = i;
  console.log(i);
  i++;
  if (i > 10) {
    clearInterval(intervalId);
  }
}, 1000);
