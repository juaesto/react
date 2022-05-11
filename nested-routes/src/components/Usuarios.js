import { Link } from "react-router-dom";

function Usuarios() {
    return (
        <div>
            <h2>Usuarios</h2>
            <div>
                <h3>Lista de usuarios:</h3>
                <ul>
                    <li><Link to='/usuarios/Juan'>Ir al detalle de Juan</Link></li>
                    <li><Link to='/usuarios/Pedro'>Ir al detalle de Pedro</Link></li>
                    <li><Link to='/usuarios/Luis'>Ir al detalle de Luis</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Usuarios;