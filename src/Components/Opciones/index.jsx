import styled from "styled-components"

const Select=styled.select`
width: 100%;
height: 40px;
border-radius: 10px;

&:focus{
    border-color: blue;
    outline: none;
}

`

const Option=styled.option`
color: black;
`

const Opciones =({opciones, ...props})=>{

    const manejoCambio=(e)=>{
        props.setValor(e.target.value)
        console.log(e.target.value);
    }

    return(
        <Select {...props} required={props.required} value={props.valor} onChange={manejoCambio}>
            <option value="" disabled defaultValue="" >Seleccione</option>
           {
            opciones.map((option, index)=>(
                <Option key={index} value={option.value}>{option.label}</Option>
            ))
           }
        </Select>
    )
}

export default Opciones