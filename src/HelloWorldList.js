import React, {Component} from "react";
import "./HelloWorldList.css";
import AddGreeter from "./AddGreeter";
import HelloWorld from "./HelloWorld";


class HelloWorldList extends Component {
    render() {

        return (
            <div className="HelloWorldList">
                <AddGreeter addGreeting={this.addGreeting}/>
                {this.renderGreetings()}
            </div>
        );
    }
    constructor(props) {
        super(props);
        this.state = {greetings: ["Bob", "Twat Badger", "Bender"]};
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }
    renderGreetings() {
        return this.state.greetings.map(name => (
            <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting}/>
        ));
    }
    addGreeting(newName) {
        this.setState({greetings: [...this.state.greetings, newName]});
    }
    removeGreeting(removeName) {
        const filteredGreetings = this.state.greetings.filter(function(elem) {
                return elem !== removeName;
            });
        this.setState({greetings: filteredGreetings})
    }
}

export default HelloWorldList;