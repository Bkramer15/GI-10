function bmi(weight, height) {
    const bmiValue = weight / (height * height);
    if (bmiValue <= 18.5) {
        return "Underweight";
    } else if (bmiValue <= 25.0) {
        return "Normal";
    } else if (bmiValue <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Example usage:
const weight = 70; // in kilograms
const height = 1.75; // in meters
const result = bmi(weight, height);
console.log("BMI Category:", result);

// tasked with calculating BMI so creating a BMI variable to store the asnwer of the operation and then running a conditional statement to check based on the nuber .