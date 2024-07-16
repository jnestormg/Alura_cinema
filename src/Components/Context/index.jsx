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

    
    return (
        <GlobalContext.Provider value={{videos, setVideos}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {ContextProvider, GlobalContext}

