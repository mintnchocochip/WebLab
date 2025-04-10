import { useState } from "react";

const jokes = [
    "Why did the F1 driver bring a ladder to the race? Because he wanted to reach new heights!",
    "Why do Rust developers never get lost? Because they always borrow a map!",
    "Why did the Linux user break up with their partner? Too many Windows in the relationship!",
    "Why do JavaScript developers hate elevators? Because they don't like dealing with callbacks!",
    "Why did the JavaScript developer go broke? Because he kept losing his 'this'!",
    "Why do web developers prefer dark mode? Because light attracts bugs!",
    "Why did the JavaScript developer quit his job? He didn't get arrays!",
    "Why do JavaScript developers make terrible detectives? They always assume everything is truthy!",
    "Why was the JavaScript developer bad at relationships? He couldn't handle promises!",
    "Why do JavaScript developers love coffee? Because they love debugging their 'grounds'!",
];

const Content = () => {
    const [joke, setJoke] = useState("");

    const getRandomJoke = () => {
        setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    };

    return (
        <div>
            <p>{joke}</p>
            <button onClick={getRandomJoke}>Click for a random joke</button>
        </div>
    );
};

export default Content;