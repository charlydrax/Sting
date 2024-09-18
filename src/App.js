import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Error from "./pages/Error/Error"
import "../src/style/css/app.css"
import Nav from "./components/nav/Nav"

export default function App() {
    return(
        <>
        
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error />} />
        </Routes>
        </>
    )
};
