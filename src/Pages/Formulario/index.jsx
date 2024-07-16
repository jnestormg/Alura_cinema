import styled from "styled-components"
import Cabecera from "../../Components/Cabecera"
import Input from "../../Components/Inputs"
import Label from "../../Components/Label"
import TextArea from "../../Components/TextArea"
import Opciones from "../../Components/Opciones"
import Boton from "../../Components/Boton"
import { useContext, useRef, useState } from "react"
import { GlobalContext } from "../../Components/Context"

const ContenedorFormulario = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0;
`
const Titulo = styled.h2`
font-size: 40px;
`
const Form = styled.form`
    max-width: 80%;

`
const Formulario = () => {

    const { videos } = useContext(GlobalContext);
    console.log("tamaño" + videos.length);

    const [titulo, setTitulo] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const formRef = useRef(null)



    const options = [
        { value: 'Front end', label: 'Front end' },
        { value: 'Back end', label: 'Back end' },
        { value: 'Innovación', label: 'Innovación' },

    ]

    const envio = (event) => {
        event.preventDefault()

        let AsignaID = (videos.length + 1).toString();

        let datos = {
            id: AsignaID,
            titulo: titulo,
            imagen: imagen,
            video: video,
            categoria: categoria,
            descripcion: descripcion
        }

        const response = fetch("http://localhost:3500/videos",
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(datos)
            }).then(response => response.json());

        console.log(datos);


    }

const reset = () =>{
    if(formRef.current){
        formRef.current.reset();
    }
}

    return (
        <>
            <Cabecera />
            <ContenedorFormulario>
                <Form onSubmit={envio} ref={formRef}>
                    <Titulo>Nuevo Video</Titulo>
                    <Label>Titulo</Label>
                    <Input type="text"
                        placeholder="Ingrese un titulo"
                        required
                        valor={titulo}
                        setValor={setTitulo}
                        />

                    <Label>Imagen</Label>
                    <Input type="text"
                        placeholder="Ingrese la url de la imagen"
                        required
                        valor={imagen}
                        setValor={setImagen}
                    />

                    <Label>Video</Label>
                    <Input type="text"
                        placeholder="Ingrese la url del video"
                        required
                        valor={video}
                        setValor={setVideo}
                    />
                    <Label>Categoria</Label>
                    <Opciones opciones={options} required
                        valor={categoria}
                        setValor={setCategoria} />
                    <Label>Descripción</Label>
                    <TextArea
                        placeholder="¿De que se trata este video?"
                        valor={descripcion}
                        setValor={setDescripcion}></TextArea>
                    <Boton activo={false}>Guardar</Boton>
                    <Boton activo={false} onClick={reset}>Limpiar</Boton>


                </Form>
            </ContenedorFormulario>
        </>
    )

}

export default Formulario