import styled from "styled-components"
import colors from "../../colors"

const Barre = styled.div`
    background : ${colors.colorError};
    width:52px;
    height:148px;
    border-radius:6px;
    margin-right:30px;

`
const ContainerError = styled.div`
    display:flex;
    margin:92px 0 0 92px;

`
const TitreError = styled.h1`
    margin: 20px 0 40px 0;
    font-size: 40px;

    
`
const TexteError = styled.p`
    font-size: 22px;
`

export default function Error(){
    return(
        <>
            <ContainerError>
                <Barre></Barre>
                <span>
                    <TitreError>ERREUR 404</TitreError>
                    <TexteError>Oups, il semble que la page que vous cherchez n’existe pas ou qui n'existe pas encore ;) !</TexteError>
                </span>

            </ContainerError>

        </>
    )
}