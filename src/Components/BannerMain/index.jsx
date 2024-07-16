import styled from "styled-components"
import ImagenEtiqueta from "./BannerMain.png"

const EtiquetaPrincipal=styled.img`
width: 100%;
height: 832px;
`

const BannerMain =()=>{
    return (
        <EtiquetaPrincipal src={ImagenEtiqueta} />
    )
}

export default BannerMain