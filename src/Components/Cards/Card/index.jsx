import styled from "styled-components"
import { FaTrash } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../Context";
import Modal from "../../Modal";


const Figure = styled.figure`
width: 432px;
max-width: 100%;
margin: 0;
display: flex;
flex-direction: column;
`

const Image = styled.img`
max-width: 100%;
box-shadow: inset 0 0 0 10px red;
border-radius: 10px 10px 0px 0px ;

`
const Footer = styled.footer`
display: flex;
margin: 0;
padding: 10px;
justify-content: space-between;
align-items: center;
background: black;
height: 40px;
border-radius: 0px 0px 10px 10px;
box-shadow: inset 0 0 10px 3px red;

`

const TextoCard = styled.h3`
color: white;
&:hover{
    color:blue;
}
`

const Card = ({ foto, video, id, titulo, categoria, descripcion }) => {

    function deleteData(Id) {

        try {
            const response = fetch(`http://localhost:3500/videos/${Id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    },

                }).then(response => response.json());
        } catch (error) { console.log(error); }
        window.location.reload()
    }

    const [modal, setModal] = useState(false)

    const abrir = () => {
        setModal(!modal)
    }

    return (
        <>
            <Figure>
                <Link to={video} ><Image src={foto} /></Link>
                <Footer>
                    <FaTrash color="white" />
                    <Link onClick={() => deleteData(id)}> <TextoCard>Borrar</TextoCard>
                    </Link>
                    <BiSolidPencil color="white" />
                   <Link onClick={abrir} ><TextoCard >Editar</TextoCard></Link> 
                </Footer>
            </Figure>
            <Modal opcion={modal} Id={id} titulo={titulo} video={video} foto={foto} descripcion={descripcion} categoria={categoria}/>
        </>
    )
}

export default Card