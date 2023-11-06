import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <>
        <nav className="d-flex justify-content-around p-2">
            <img src="/img/shopicon.png" alt="" style={{width: "100px"}} />
            <div className="d-flex align-items-center">
            <button className="btn btn-success mx-2">Home</button>
            <button className="btn btn-success mx-2">Productos</button>
            <button className="btn btn-success mx-2">Contacto</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <CartWidget />
            </div>
        </nav>
        </>
    )
}