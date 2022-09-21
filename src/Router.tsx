import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import {Menu} from "./Pages/Menu";
import {Form} from "./Pages/Form";
import { NotFound } from "./Pages/NotFound";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
}