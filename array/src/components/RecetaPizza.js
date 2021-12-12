import React from 'react';

export default class RecetaPizza extends React.Component {

    render() {
        const receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Nata'],
            calorias: 400
        };

        const recetaPizzaContenedor = {
            marginLeft: '60px'
        }

        return (
            <div>
                <h1>Receta: {receta.nombre}</h1>
                <h2>Calorías: {receta.calorias}</h2>
                <ol style={recetaPizzaContenedor}>
                    {
                        receta.ingredientes.map((ingrediente) => {
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
