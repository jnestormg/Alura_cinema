import styled from "styled-components";
import Input from "../Inputs";
import Boton from "../Boton";
import TextArea from "../TextArea";
import Opciones from "../Opciones";
import Label from "../Label";
import { useContext, useState } from "react";
import { GlobalContext } from "../Context";

const OverLay = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
top: 0;
background-color: rgba(0,0,0,7);
`

const Dialog = styled.dialog`
width: 60%;
border: 2px solid #6BD1FF;
border-radius: 10px;
background: #03122F;
`

const Titulo = styled.h2`
font-size: 40px;
color: white;
`

const Modal = (props) => {
    
    const { videos } = useContext(GlobalContext);
    console.log("tamaño" + videos.length);
    console.log(props.id);

    const [titulo, setTitulo] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")


    const options = [
        { value: 'Front end', label: 'Front end' },
        { value: 'Back end', label: 'Back end' },
        { value: 'Innovación', label: 'Innovación' },

    ]

    const envio = (event) => {
        event.preventDefault()

        let AsignaID = props.Id;

        let datos = {
            id: AsignaID,
            titulo: titulo,
            imagen: imagen,
            video: video,
            categoria: categoria,
            descripcion: descripcion
        }

        const response = fetch(`http://localhost:3500/videos/${props.Id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(datos)
            }).then(response => response.json());

        console.log(datos);
        reset();

    }

    const reset = () => {
        setTitulo("")
        setCategoria("")
        setImagen("")
        setVideo("")
        setDescripcion("")
    }



    return (

        <Dialog open={props.opcion}>
            <button >X</button>
            <form method="dialog" onSubmit={envio}>
                <Titulo>Editar Card</Titulo>
                <Label >Titulo</Label>
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
                <Boton activo={false} >Limpiar</Boton>

            </form>
        </Dialog>

    )
}

export default Modal