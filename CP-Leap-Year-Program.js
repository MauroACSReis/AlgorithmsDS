// My solution

function isLeap(year) { 

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){

    return "Leap year."

    } else {

        return "Not leap year."
    }
}

// OR

function isLeap(year) { 
if (year % 4 !== 0){
  alert("Not leap year.")
}
if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
  alert("Leap year.");
} 
if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
  alert("Leap year.");
}
if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
  alert("Leap year.");
}
if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
  alert("Not leap year.");
}  
}
