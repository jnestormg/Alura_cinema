import { useState } from "react"
import styled from "styled-components"

const InputTex=styled.input`
    margin: 30px 0px;
    width: 100%;
    height: 40px;
    border-radius: 10px;
`

const Input =(props)=>{

    const actualizarValor=(e)=>{
        console.log("pribando"+e.target.value);
        props.setValor(e.target.value)
    }

    return(
        <InputTex 
        placeholder={props.placeholder} 
        required={props.required}
        value={props.valor}
        onChange={actualizarValor}
        />
    )
}

export default Input