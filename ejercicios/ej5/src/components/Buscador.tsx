import * as React from 'react';
import { useState } from 'react';

export function Buscador({ onChangeCountry }: any) {
    const [country, setCountry] = useState("");

    return (
        <>
            <input placeholder='Introduce un país' type="text" onChange={e => setCountry(e.target.value)} />
            <div style={{ marginTop: '10px' }}>
                <button onClick={() => onChangeCountry(country)}>Buscar</button>
            </div>
        </>
    );
}
