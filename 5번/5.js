const numbers = document.querySelectorAll(".number");
for (let i = 0; i < numbers.length; i++) {
  const 현재숫자 = parseInt(numbers[i].innerHTML, 10) + 10;
  numbers[i].innerHTML = 현재숫자;
}
