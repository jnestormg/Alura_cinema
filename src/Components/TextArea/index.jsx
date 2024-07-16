import styled from "styled-components"

const Area=styled.textarea`
    margin: 30px 0px;
    width: 100%;
    height: 80px;
    border-radius: 10px;
`



const TextArea =(props)=>{

    const manejarValor =(e)=>{
        console.log(e.target.value);
        props.setValor(e.target.value)
    }

    return(
        <Area placeholder={props.placeholder}
        value={props.valor}
        onChange={manejarValor}></Area>
    )
}

export default TextArea