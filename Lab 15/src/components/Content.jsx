import React from 'react';
function Content(){
    function handleClick(){
        if(document.getElementById("button").innerHTML === "Click Me!"){
            document.getElementById("joke").innerHTML = "Random Joke!";
        }
    }
    return(
        <>
            <div id="content">Click the button to see a random joke!</div>
            <button id="button" onClick={handleClick}>Click Me!</button>
            <div id="joke"></div>
        </>
    )
}
export default Content;