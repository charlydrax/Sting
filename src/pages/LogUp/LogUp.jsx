import Login from "../Login/Login"
import SignUp from "../SignUp/SignUp"
import styled from "styled-components"

const ContainerLog = styled.section`
    // background: blue;
`

export default function LogUp(){
    return(
            <ContainerLog>
                <Login />
                <SignUp />
            </ContainerLog>
    )
}