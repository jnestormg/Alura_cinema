import React, {createContext, useContext, useEffect, useState} from "react";

const GlobalContext= createContext();

const ContextProvider =({children})=>{

    const[videos, setVideos]= useState([]);
    useEffect(()=>{
        fetch("http://localhost:3500/videos").
        then(response=>response.json()).
        then(data=>{
            setVideos(data)
        });
    },[]);

    const[categorias, setCategorias]= useState([]);
    useEffect(()=>{
        fetch("http://localhost:3500/categorias").
        then(response=>response.json()).
        then(data2=>{
            setCategorias(data2)
        });
    },[]);

    
    return (
        <GlobalContext.Provider value={{videos, setVideos, categorias, setCategorias}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {ContextProvider, GlobalContext}

