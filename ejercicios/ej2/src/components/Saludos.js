import React from "react";

class Saludos extends React.Component {
    render() {
        return (
            <h1>Saludos {this.props.nombre}</h1>
        )
    }
}

export default Saludos;