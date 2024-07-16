import styled from "styled-components";
import Input from "../Inputs";
import Boton from "../Boton";
import TextArea from "../TextArea";
import Opciones from "../Opciones";
import { useContext, useRef, useState } from "react";
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

const Label = styled.label`
 color: white ;
 `

 const BotonCerrar=styled.button`
 width: 30px;
 height: 30px;
 border: 2px solid white;
 border-radius: 50%;
 color: white;
 background: #03122F;

 &:hover{
    background: white;
    color: black;
 }

 `

const Modal = (props) => {

    const { videos } = useContext(GlobalContext);
    console.log("tamaño" + videos.length);
    console.log(props.id);

    const [titulo, setTitulo] = useState(props.titulo)
    const [imagen, setImagen] = useState(props.foto)
    const [video, setVideo] = useState(props.video)
    const [categoria, setCategoria] = useState(props.categoria)
    const [descripcion, setDescripcion] = useState(props.descripcion)


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
        window.location.reload()
    }

    const reset = () => {
        setTitulo("")
        setCategoria("")
        setImagen("")
        setVideo("")
        setDescripcion("")
    }

    const dialogRef = useRef(null)

    const close = () => {
        console.log(dialogRef.current);
        dialogRef.current.close();
    }

    return (
        <>
            <Dialog open={props.opcion} ref={dialogRef}>
                <BotonCerrar onClick={() => close()}>x</BotonCerrar>

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
        </>
    )
}

export default Modal