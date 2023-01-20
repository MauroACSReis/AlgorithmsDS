// Build a BMI Calculator with Javascript challenge
// My solution :

function bmiCalculator(weight, height){
    var height = (height * height);
    var bmi = weight / height;
    return Math.round(bmi);
}

/* If i want to insert my body stats, i would use
bmiCalculator(75, 1.8); */
