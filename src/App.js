import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import LogUp from "./pages/LogUp/LogUp"
import Error from "./pages/Error/Error"
import "../src/style/css/app.css"
import Nav from "./components/nav/Nav"

export default function App() {
    return(
        <>
        
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogUp />} />
            <Route path='*' element={<Error />} />
        </Routes>
        </>
    )
};
