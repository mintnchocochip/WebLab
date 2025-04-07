function DOMActions() {
    const head = document.getElementById("title");
    head.innerHTML = "Updated Title";
    const input = document.querySelector("[name='username']");
    input.value = "John Doe";

    const buttons = document.getElementsByName("gender");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked == true) {
            const p = document.createElement("p");
            p.innerHTML = buttons[i].value;
            document.body.appendChild(p);
        }
    }

    const para = document.getElementsByTagName("p");
    const pCount = document.createElement("p");
    pCount.innerHTML = `The number of para tags: ${para.length}`;
    document.body.appendChild(pCount);

    const uL = document.getElementsByTagName("ul");
    for (let i = 0; i < uL.length; i++) {
        const liElements = uL[i].getElementsByTagName("li");
        for (let j = 0; j < liElements.length; j++) {
            console.log(liElements[j].innerHTML);
        }
    }

    const inputfield = document.getElementsByClassName("input-field");
    for (let i = 0; i < inputfield.length; i++) {
        inputfield[i].style.backgroundColor = "lightblue";
    }

    const firstPara = document.querySelector("p.info");
    if (firstPara) {
        firstPara.innerHTML = "This is the first paragraph";
    }

    const gender = document.querySelector("[name='gender']:checked");
    if (gender) {
        const genderP = document.createElement("p");
        genderP.innerHTML = `Selected Gender: ${gender.value}`;
        document.body.appendChild(genderP);
    }

    const hobbies = document.querySelectorAll(".hobby");
    const hobbiesP = document.createElement("p");
    hobbiesP.innerHTML = "The Selected Person's Hobbies are: ";
    document.body.appendChild(hobbiesP);
    hobbies.forEach(hobby => {
        hobby.checked = true; 
        const hobbyP = document.createElement("p");
        hobbyP.innerHTML = hobby.value;
        document.body.appendChild(hobbyP);
    });
}