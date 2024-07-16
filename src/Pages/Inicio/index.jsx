import Cabecera from "../../Components/Cabecera"
import BannerMain from "../../Components/BannerMain"
import Cards from "../../Components/Cards"
import Modal from "../../Components/Modal"
import { useState } from "react"



const Inicio = () => {
    const[selecionar, setSeleccionar]=useState(null)

    let f=false;

    return (
        <>
            <Cabecera />
            <BannerMain />
            <Cards />
        </>

    )
}

export default Inicio