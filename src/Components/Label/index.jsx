import styled from "styled-components"

const Etiqueta = styled.label`

`

const Label =({children})=>{
    return(
        <Etiqueta>
            {children}
        </Etiqueta>
    )

}

export default Label