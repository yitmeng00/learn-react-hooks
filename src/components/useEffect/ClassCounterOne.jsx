// useEffect Hook with running effect conditionally in class component
import React, { Component } from "react";

class ClassCounterOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "",
        };
    }

    componentDidMount() {
        document.title = `${this.state.name} clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("Updating Document Title...");
            document.title = `${this.state.name} clicked ${this.state.count} times`;
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({ name: e.target.value });
                    }}
                />
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    Click {this.state.count} times
                </button>
            </div>
        );
    }
}

export default ClassCounterOne;
