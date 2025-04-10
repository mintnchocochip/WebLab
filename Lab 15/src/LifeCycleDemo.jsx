import React, { Component } from "react";

class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }; 
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate() {
        console.log("Component updated");
    }

    incrementCounter = () => { 
        this.setState({ counter: this.state.counter + 1 });
    };

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.incrementCounter}>Increase</button>
            </div>
        );
    }
}

export default LifeCycleDemo;