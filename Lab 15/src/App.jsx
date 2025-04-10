import React, { useState } from "react";
import Header from "./Header.jsx";
import Contents from "./Contents.jsx";
import Footer from "./Footer.jsx";
import LifecycleDemo from "./LifeCycleDemo.jsx";
import Counter from "./Counter.jsx";
import CounterReducer from "./CounterReducer.jsx";
import FetchJoke from "./FetchJoke.jsx";
import InputFocus from "./InputFocus.jsx";
import { ThemeProvider, ThemedComponent } from "./ThemedComponent.jsx";
import ParentChild from "./ParentChild.jsx";
import ChildValidation from "./ChildValidation.jsx";
import FormWithState from "./FormWithState.jsx";
import FormWithRef from "./FormWithRef.jsx";
import StyledButtonExternal from "./StyledButtonExt.jsx";
import StyledButtonInternal from "./StyledButtonInt.jsx";
import "./styles.css";

function App() {
  const [showLifecycleDemo, setShowLifecycleDemo] = useState(true);

  const toggleLifecycleDemo = () => {
    setShowLifecycleDemo((prev) => !prev);
  };

  return (
    <ThemeProvider>
      <Header title="React Exercise 15" />

      <main>
        <section>
          <h2>Question 1</h2>
          <Contents />
        </section>

        <section>
          <h2>Question 2, 3, 4 - Styled Buttons</h2>
          <button style={{ backgroundColor: "blue", padding: "10px", fontSize: "16px" }}>
            Inline CSS Button
          </button>
          <br />
          <br />
          <StyledButtonInternal />
          <br />
          <br />
          <StyledButtonExternal />
        </section>

        <section>
          <h2>Question 5 - Lifecycle Methods</h2>
          <button onClick={toggleLifecycleDemo}>
            {showLifecycleDemo ? "Unmount LifecycleDemo" : "Mount LifecycleDemo"}
          </button>
          {showLifecycleDemo && <LifecycleDemo />}
        </section>

        <section>
          <h2>Question 6 - Counter (useState Hook)</h2>
          <Counter />
        </section>

        <section>
          <h2>Question 6 - Counter (useReducer Hook)</h2>
          <CounterReducer />
        </section>

        <section>
          <h2>Question 7 - Fetch API (Joke)</h2>
          <FetchJoke />
        </section>

        <section>
          <h2>Question 8 - Input Focus (useRef)</h2>
          <InputFocus />
        </section>

        <section>
          <h2>Question 9 - Themed Component (useContext)</h2>
          <ThemedComponent />
        </section>

        <section>
          <h2>Question 10 - Props Passing</h2>
          <ParentChild />
        </section>

        <section>
          <h2>Question 11 - Props Validation</h2>
          <ChildValidation message="Hello from Parent" />
        </section>

        <section>
          <h2>Question 12 (i) - Form with useState</h2>
          <FormWithState />
        </section>

        <section>
          <h2>Question 12 (ii) - Form with useRef</h2>
          <FormWithRef />
        </section>
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;