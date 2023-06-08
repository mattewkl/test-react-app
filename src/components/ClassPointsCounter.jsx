import React, {Component} from 'react';

class ClassPointsCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({count: this.state.count++})
    }

    decrement() {
        this.setState({count: this.state.count--})
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default ClassPointsCounter;