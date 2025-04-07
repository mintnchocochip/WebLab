    const tabl = document.createElement("table");
    const head = ["Column 1", "Column 2", "Column 3"];

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    for (let i = 0; i < head.length; i++) {
        const header = document.createElement("th");
        header.innerHTML = head[i];
        headerRow.appendChild(header);
    }
    thead.appendChild(headerRow);
    tabl.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const data = document.createElement("td");
            data.innerHTML = (i+1) * (j+1);
            row.appendChild(data);
        }
        tbody.appendChild(row);
    }
    tabl.appendChild(tbody);
    document.body.appendChild(tabl); 

    document.body.appendChild(document.createElement("br"));

//------------------------------------------------------
    const button = document.createElement("button");
    button.textContent = "Hover Me";
    button.style.backgroundColor = "red";
    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = 'green';
    });
    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = 'red';
    });
    document.body.appendChild(button); 

    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
//--------------------------------------------------
    const textbox = document.createElement("input");
    textbox.style.backgroundColor = "green";
    textbox.addEventListener("focusin", function() {
        textbox.style.backgroundColor = "yellow";
        textbox.value = "Greeting Message!";
    });
    textbox.addEventListener("focusout", function() {
        textbox.style.backgroundColor = "green";
    });
    document.body.appendChild(textbox); 

//-------------------------------------------------
    document.body.appendChild(document.createElement("br"));
    const text = document.createElement("textarea");
    text.id = "poda";
    const button1 = document.createElement("button");
    button1.innerHTML = "List";
    document.body.appendChild(text);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(button1);
    const ul = document.createElement("ul");
    button1.addEventListener("dblclick", function lister(){
        let dat = document.getElementById("poda");
        const li = document.createElement("li");
        li.innerHTML = dat.value;
        ul.appendChild(li);
        dat.value = "";
    })
    document.body.appendChild(ul);
    document.body.appendChild(document.createElement("br"));

//--------------------------------------------------------

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Type something...";
    document.body.appendChild(inputField); 

    const countField = document.createElement("input");
    countField.type = "text";
    countField.placeholder = "Total key presses";
    countField.readOnly = true; 
    document.body.appendChild(countField); 

    let keyPressCount = 0;

    inputField.addEventListener("input", function() {
        keyPressCount++;
        countField.value = keyPressCount;
    })