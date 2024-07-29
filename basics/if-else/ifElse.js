var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// const age=prompt("Enter your age")

// if(age>=18){
//     alert("you are adult")
// }else if(age<18){
//     alert("you are child")
// }else{
//     alert("you are about to born")
// }

// grading system
// const marks = prompt("enter your marks");
// if (marks < 25 && marks>20) {
//   alert("your grade F");
// } else if (marks <= 44) {
//   alert("your grade E");
// } else if (marks <= 49) {
//   alert("your grade D");
// } else if (marks <= 59) {
//   alert("your grade C");
// } else if (marks <= 79) {
//   alert("your grade B");
// } else if(marks <= 100) {
//   alert("your grade A");
// } else {
//   alert("FAILed");
// }

// const age=prompt("neter age")
// if(age<18){
//     console.log("not eligible for job")
// }
// else if(age<=54){
//     console.log("eligible for job")
// }
// else if(age<=57){
//     console.log("retirement soon")
// }
// else {
//     console.log("retirement time")
// }

// const day = prompt("enter number");

// switch (parseInt(day)) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Satuday");
//     break;
//   case 6:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("invalid!");
// }
