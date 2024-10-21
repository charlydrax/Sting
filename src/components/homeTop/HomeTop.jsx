import styled from "styled-components"
import colors from "../../colors"

function HomeTop (){

    const ContainerHome = styled.section`
    width: 100vw;
    background: transparent;
    display: flex;
    flex-direction: column;
`
    const Top = styled.div`
    display:flex;
    margin: auto;
    height: 50vh;
    width: 90vw;
    padding-top: 70px;
    span h1{
        margin-bottom: 20px;
    }
    span p{
        text-align: justify;
        text-justify: inter-word;
    }
`
    const Barre = styled.div`
    background : ${colors.coleurMain};
    width:52px;
    height:148px;
    border-radius:6px;
    margin-right:30px;
`

    const ButtonLog = styled.a`
        background : ${colors.coleurMain};
        padding: 20px;
        border-radius: 20px;
        // font-size: large;
        color: ${colors.colorWhite};
        margin: auto;
        text-decoration: none;
`


    return (
        <>
        <ContainerHome>
            <Top>
                <Barre></Barre>
                <span>
                    <h1>Bienvenue sur Sting - Plongez dans l'Univers Ultime du Jeu en Ligne !</h1>
                    <p>Bienvenue sur Sting, la plateforme où vous pouvez jouer à des jeux créés par la communauté. Explorez une infinité de mondes imaginés par d'autres joueurs ou lancez-vous dans la création de vos propres jeux, et partagez-les avec des millions d'autres passionnés. Ici, l'imagination n'a pas de limites !</p>
                </span>
            </Top>
            <ButtonLog href="#">Connectez-vous</ButtonLog>
        </ContainerHome>
        </>
    )
}
export default HomeTop