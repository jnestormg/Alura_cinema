import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "./Card";

const Contenedor = styled.section`
display: flex;
gap:20px;
margin: 10px;

`
const Seccion = styled.section`
flex-grow: 1;
`
const ContainerImage = styled.section`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 5px;
`



const Cards = () => {
    const { videos } = useContext(GlobalContext)
    return (
        <Contenedor>
            <Seccion>
                <ContainerImage>

                    {
                        videos.map((vid) => {
                            console.log(vid.video)
                            return <Card {...videos} 
                            key={vid.id}
                             foto={vid.imagen} 
                             video={vid.video}
                              id={vid.id}
                              titulo={vid.titulo}
                              descripcion={vid.descripcion}
                              categoria={vid.categoria}
                              />



                        })
                    }
                </ContainerImage>
            </Seccion>
        </Contenedor>
    )
};

export default Cards;
