import { HashRouter, Routes, Route } from "react-router-dom";
import Pokedex from "../Pages/Pokedex";

export default function Router() {

    return (
        <HashRouter basename='/'>
            <Routes>
                <Route path="/" element={<Pokedex/>}/>
            </Routes>
        </HashRouter>
    );
} 