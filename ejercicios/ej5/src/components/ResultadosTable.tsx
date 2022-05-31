import * as React from 'react';

export function ResultadosTable(props: any) {
    const listItems = props.data.map((item: any, index: number) => {
        return <li key={index} style={{ marginBottom: '10px' }}><div>Nombre: {item.name}</div><div>Web: {item.domains && item.domains[0]}</div></li>
    });

    return (
        <ul>{listItems}</ul>
    );
}
