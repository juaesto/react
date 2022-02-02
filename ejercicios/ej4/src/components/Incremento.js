import React, { useState } from "react";

export default function Incremento() {
    const [incremento, setIncremento] = useState(0);

    return (
        <button onClick={() => setIncremento(incremento + 1)}>{incremento}</button>
    );
}