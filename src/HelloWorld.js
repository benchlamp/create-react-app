import React, {Component} from "react";
import "./HelloWorld.css";

class HelloWorld extends Component {
    render() {
                console.log(this.props)
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!
                <br />
                <button onClick={this.frenchify}>Frenchify!</button>
                <br />
                <button onClick={this.removeGreeting}>Remove</button>
            </div>
            
        );
    }
    constructor(props) {
        super(props);
        this.state = {greeting: "Hello"};
        this.frenchify = this.frenchify.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }
    frenchify() {
        this.setState({greeting: "Bonjour"});
    }
    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }
}


export default HelloWorld;