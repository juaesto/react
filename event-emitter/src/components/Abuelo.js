import React, { Component } from 'react';
import { EventEmitter } from './EventEmitter';
import Padre from './Padre';

class Abuelo extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        EventEmitter.subscribe('updateCount', (event) => this.updateCount(event));
    }

    updateCount = (event) => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <p>Contador: {this.state.count}</p>
                <Padre />
            </div>
        )
    }
}

export default Abuelo;