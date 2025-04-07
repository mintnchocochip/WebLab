var regNo = prompt("Enter your Registration Number:");
var name = prompt("Enter your Name:");

document.write(`<br><div style="border: 3px solid red; display: inline-block; padding: 10px; 
                font-weight: bold; font-size: 20px; text-align: center;">
                ${regNo}</div><br>`);

document.getElementById("nameDisplay").innerHTML = `<br><div style="border: 2px solid black; 
                display: inline-block; padding: 10px; font-weight: bold; font-size: 20px; 
                text-align: center; color: red;"> *${name}* </div><br>`;
