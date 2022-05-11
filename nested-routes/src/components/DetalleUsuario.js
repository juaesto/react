import { useParams } from "react-router-dom";

function DetalleUsuario() {
    const { nombre } = useParams();

    return (
        <div>
            <h2>Usuario: {nombre}</h2>
        </div>
    );
}

export default DetalleUsuario;