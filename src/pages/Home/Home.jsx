import styled from "styled-components"
import colors from "../../colors"

const ContainerHome = styled.div`
    display:flex;
    margin:92px 0 0 92px;
`
const Barre = styled.div`
    background : ${colors.coleurMain};
    width:52px;
    height:148px;
    border-radius:6px;
    margin-right:30px;
`
export default function Home(){
    return(
        <ContainerHome>
            <Barre></Barre>
            <span>
                <h1>Bienvenue sur Sting - Plongez dans l'Univers Ultime du Jeu en Ligne !</h1>
                <p>Bienvenue sur Sting, la plateforme où vous pouvez jouer à des jeux créés par la communauté. Explorez une infinité de mondes imaginés par d'autres joueurs ou lancez-vous dans la création de vos propres jeux, et partagez-les avec des millions d'autres passionnés. Ici, l'imagination n'a pas de limites !</p>
            </span>

        </ContainerHome>
    )
}