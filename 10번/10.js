// document.querySelector(".times").addEventListener("click", function () {
//   let inputElement = document.querySelector("#userPick");
//   let result = inputElement * 2;
//   alert(result);
// });

document.querySelector(".btn").addEventListener("click", function () {
  let textContents = prompt("숫자를 입력하세요.", "");
  let result = textContents * 2;
  alert(result);
});
