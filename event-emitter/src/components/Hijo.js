import React from 'react';
import { EventEmitter } from './EventEmitter';

const Hijo = () => {
    return <button onClick={(event) => EventEmitter.dispatch('updateCount', event)}>
        Pincha para actualizar
    </button>
}

export default Hijo;


