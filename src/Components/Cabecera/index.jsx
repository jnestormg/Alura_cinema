import styled from "styled-components"
import logo from "./Logo.png"
import Boton from "../Boton"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Header = styled.header`
    background: #262626;
    width: 100%;
    height: 125px;
    border: 0px 0px 4px 0px;
    box-shadow: 2px 3px 10px blue;
    display: flex;
    justify-content: space-between;
    gap: 20px;

`

const Logotipo = styled.img`
    width: 168px;
    height: 40px;
    margin: 10px;

`

const ContenedorBotones = styled.div`
display: flex;
gap: 20px;
`

const Cabecera = () => {

    const Home = () => {
        window.location.href = "/"
        cambiarColor()
    }

    const [estado, setEstado] = useState(false)

    const cambiarColor = () => {
        setEstado(!estado);
    }

    return (
        <Header>
            <Logotipo src={logo} />
            <ContenedorBotones>
                <Link onClick={Home} ><Boton activo={true}>Home</Boton></Link>
                <Link to="/formulario" > <Boton>Nuevo Video</Boton></Link>
            </ContenedorBotones>
        </Header>

    )

}

export default Cabecera