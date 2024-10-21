import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Error from "./pages/Error/Error"
import "../src/style/css/app.css"
import Nav from "./components/nav/Nav"
import Charly from "./pages/Test/Charly/Charly"
import Seb from "./pages/Test/Seb/Seb"
import James from "./pages/Test/James/James"

export default function App() {
    return(
        <>
        
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error />} />
            <Route path='/page-test-charly' element={<Charly />} />
            <Route path='/page-test-seb' element={<Seb />} />
            <Route path='/page-test-james' element={<James />} />
        </Routes>
        </>
    )
};
