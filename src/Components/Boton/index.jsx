import styled from "styled-components"

const BotonStyled = styled.button`
width: 180px;
height: 54px;
background: ${props =>props.$activo ? "#000000" : "#262626"};
color: ${props =>props.$activo ? "#2271D1" : "#fff"};
font-size: 20px;
border: ${props =>props.$activo ? "0px" : "2px solid white"};
border-radius: 10px;
box-shadow: ${props =>props.$activo ? "inset 0 4px 6px #2271D1": ""};
text-transform: uppercase;
font-family: "Source Code Pro", monospace;

&:hover{
    background: blue;
    color:white;
}
&:active{
    background: red;
}

`
const Boton = ({ children, activo }) => {

    return (
        <BotonStyled $activo={activo}>
            {children}
        </BotonStyled>

    )
}

export default Boton