import styled from "styled-components"
import Erro404 from "./error-404.png"

const ImgNotFound=styled.img`
width: 100%;
`

const NotFound=()=>{
    return (
        <ImgNotFound src={Erro404} />
    )
}

export default NotFound