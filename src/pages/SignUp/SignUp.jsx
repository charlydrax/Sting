import { useState, useRef, useContext } from "react"
import { UserContext } from "../../context/userContext";
import { useNavigate } from 'react-router-dom'

export default function SignUp(){
    const [validation,setValidation] = useState();
    const input = useRef([])

    // fonction qui vérifie si le champs de saisie (el) est déjà push dans le tableau inputs, si il est vide, il push
    const addInput = el => {
        if(el && !input.current.includes(el)){
            input.current.push(el)
        }
    }

    const {modalState, toggleModals, sign} = useContext(UserContext)
    const navigate = useNavigate()
    return(
        <p>ceci est la page d'inscription</p>
    )
}