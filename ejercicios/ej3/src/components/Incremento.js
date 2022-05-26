import React from "react";

class Incremento extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            incremento: 0
        }
    }

    incrementa() {
        this.setState({ incremento: this.state.incremento + 1 });
    }

    render() {
        return (
            <button onClick={() => this.incrementa()}>{this.state.incremento}</button>
        )
    }
}

export default Incremento;