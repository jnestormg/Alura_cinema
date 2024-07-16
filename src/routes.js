import Modal from "./Components/Modal";
import Formulario from "./Pages/Formulario";
import Inicio from "./Pages/Inicio";
import NotFound from "./Pages/NotFound";

const {BrowserRouter, Routes, Route} = require("react-router-dom");

function Rutas(){

 return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/formulario" element={<Formulario />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
 )   
}

export default Rutas