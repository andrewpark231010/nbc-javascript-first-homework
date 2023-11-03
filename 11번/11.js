const currentTime = new Date();

const currentHour = currentTime.getHours();

if (currentHour < 10) {
  console.log("Good morning");
} else if (currentHour >= 10 && currentHour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}
