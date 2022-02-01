import React from 'react';

export default class RecetaPizza extends React.Component {
    public receta = {
        nombre: 'Pizza',
        ingredientes: ['Tomate', 'Queso', 'Nata'],
        calorias: 400
    };

    public recetaPizzaContenedor = {
        marginLeft: '60px'
    }

    render() {
        return (
            <div>
                <h1>Receta: {this.receta.nombre}</h1>
                <h2>Calorías: {this.receta.calorias}</h2>
                <ol style={this.recetaPizzaContenedor}>
                    {
                        this.receta.ingredientes.map((ingrediente: any) => {
                            return (
                                <li key={ingrediente} style={{ width: '110px', textAlign: 'start' }} >
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}
