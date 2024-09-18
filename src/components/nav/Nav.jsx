import styled from "styled-components"
import image from "../../style/img/background_yellow.png"
import { Link } from "react-router-dom"


const ContainerNav = styled.nav`
    background:#07081D;
    display:flex;
    height:131px;
    justify-content:space-between;
    align-items:center;
`
const ListeNav = styled(Link)`
    text-decoration:none;
    color: #B9B4A4;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    transform: skew(-15deg);
    display:flex;
    width:224px;
    height:100%;
    cursor:pointer;
    font-weight:200;
    font-size:23px;
    &:hover{
        background:#2528A1;
    }
    &:hover:after{
        background:#4770D0;
    }
    &:after{
        content:"";
        width:100%;
        height:10px;
        background:transparent;

    }
    &:before{
        content:"";
    }
`

const WrapListeNav = styled.div`
    display:flex;
    align-items:center;
`
const Span = styled.span`
    display:flex;
`
const Button = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    margin-right:50px;
    height:39px;
    width:240px;
    cursor:pointer;
    background: #2528A1;
    border-radius:10px;
    color:#F9F9F9;
    font-size:25px;
    font-weight:200;
`
const ContainerImage = styled(Link)`
    width:131px;
    height:131px;
    display:flex;
    justify-content:center;
    align-items:center;
`

export default function Nav(){

    return(
        <>
            <ContainerNav>
                <Span>

                    <ContainerImage to="/">
                        <img src={image} alt="Logo Sting"/>
                    </ContainerImage>

                    <WrapListeNav>
                        <ListeNav to="/">
                            Accueil
                        </ListeNav>
                        <ListeNav to="/jeu-du-moment">
                            Jeux du moment
                        </ListeNav>
                        <ListeNav to="/createur-du-moment">
                            Créateur du moment
                        </ListeNav>
                    </WrapListeNav>
                </Span>
                <Button to="/login">
                    Connnectez-vous
                </Button>
            </ContainerNav>
        </>

    )
}