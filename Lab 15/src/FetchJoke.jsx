import React, { useEffect, useState } from "react";

const FetchJoke = () => {
  const [currentJoke, setCurrentJoke] = useState(""); 

  const fetchNewJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jokeData = await response.json();
    setCurrentJoke(`${jokeData.setup} - ${jokeData.punchline}`); 
  };

  useEffect(() => {
    fetchNewJoke(); 
  }, []);

  return (
    <div>
      <p>{currentJoke}</p> {}
      <button onClick={fetchNewJoke}>Get Another Joke</button> {}
    </div>
  );
};

export default FetchJoke;