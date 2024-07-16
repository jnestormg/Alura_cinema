import styled from "styled-components"
import Imagen from "./Logo.png"


const Pie = styled.footer`
background:#262626 ;
width: 100%;
height: 60px;
display: flex;
justify-content: center;
padding: 15px;
margin-top: 20px;
`

const ImagenFooter = styled.img`
width: 168px;
`

const TextoFooter=styled.h4`
color: white;
`

const Footer = () => {
    return (
        <Pie>
            <ImagenFooter src={Imagen} />
            <TextoFooter>Desarrollado por: Néstor Meneses</TextoFooter>
        </Pie>
    )
}

export default Footer