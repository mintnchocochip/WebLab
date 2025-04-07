let bmi;
let sex;
function getBMI() {
    const wt = document.getElementById("weight");
    const ht = document.getElementById("height-feet");
    const ht2 = document.getElementById("height-inches");
    sex = document.getElementById("sex");
    
    let ht_final = 0;
    ht_final += parseInt(ht.value) * 30.48; 
    ht_final += parseInt(ht2.value) * 2.54; 

    const wt_value = parseFloat(wt.value); 

    bmi = (wt_value / (ht_final * ht_final)) * 10000;  
    putBMI(sex.value);  
}

function putBMI() {
    const out = document.getElementById("out");
    let message = `Your BMI is ${bmi.toFixed(2)}\n`;

    if (bmi < 17.50) {
        alert("Anorexia");
    } else {
        if(sex.value == "Male"){
            if(bmi > 17.501 && bmi < 20.70){
                alert("Underweight");
            }
            else if(20.71 < bmi && bmi < 26.40){
                alert("Ideal Range");
            }
            else if(26.41 > bmi && 26.40 < bmi){
                alert("Marginally Overweight");
            }
            else if(bmi > 27.81 && bmi < 31.10){
                alert("Overweight");
            }
            else{
                alert("Very Overweight or Obese range");
            }
        }
        else if(sex.value == "Female"){
            if(bmi > 17.501 && bmi < 19.10){
                alert("Underweight");
            }
            else if(19.11 < bmi && bmi < 25.80){
                alert("Ideal Range");
            }
            else if(25.81 > bmi && 27.30 < bmi){
                alert("Marginally Overweight");
            }
            else if(bmi > 27.31 && bmi < 32.30){
                alert("Overweight");
            }
            else{
                alert("Very Overweight or Obese range");
            }
        }
    }
    out.value = message; 
}
