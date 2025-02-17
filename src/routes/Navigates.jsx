import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Inicio from '../../inicio';

export default function Navigates() {
    return (
        /*<Router>*/
        <Routes>
            <Route path="/" index element={<Inicio />} />
            {/* comodin para dar por defecto la pagina que no sirve */}
            <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
        /*</Router>*/
    );
}

function Navbar() {
    // visible on every page
    return <> INICIO DEL SITIO </>
}

function NotFound() {
    return (<><p>Ha llegado a una página que no existe :| </p></>);
}