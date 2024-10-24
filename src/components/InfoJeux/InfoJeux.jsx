import styled from 'styled-components'
import dataGame  from '../../data/data-game.js'
import Error from '../../pages/Error/Error.jsx'
import LikeWidget from '../widget/widget-like/LikeWidget.jsx'
const Container = styled.div`
    background: #2528A1;
    width:auto;
    margin:auto;
    margin-top:50px;
    margin:10px 15px;
    @media (min-width: 800px) {
        width:800px;
        margin:auto;
        margin-top:50px;
    }
`
const Main = styled.main`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
const ContainerDroite = styled.div`
    color:white;
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:15px;
    border-bottom: solid 1px white;
    margin: 10px 10px;
    & p{
        font-size:11px;
        line-height: 1.5;
    }
    & h1{
        text-align:center;
    }
    @media (min-width: 768px) {
        border-right: solid 1px white;
        border-bottom: none;

    }

`

const ContainerGauche = styled.div`
    background: #2528A1;
    padding:50px;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:25px;
    & button{
        border:none;
        background:red;
        width:237px;
        height:52px;
        border-radius:11px;
        color:white;
        cursor:pointer;
        font-family: "Press Start 2P", system-ui;

    }
`
const ImgStyle = styled.img`
    width: 300px;
`



function InfoJeux({idpage}){
    let infoGame = dataGame
    let id = parseInt(idpage,10)

    if(id<0 || id >= infoGame.length){
        return(
            <Error />
        )
    }

    return(

        <>

            <Container>
                <Main>
                    <ContainerDroite>
                        <h1>{infoGame[id].title}</h1> 
                        <p>Cathégorie : {infoGame[id].categories}</p>
                        <p>Créateur : {infoGame[id].creator}</p>
                        <p>Description : {infoGame[id].description}</p> 
                        <LikeWidget rate={infoGame[id].numberlike} />
                    </ContainerDroite>
                    <ContainerGauche>

                        <ImgStyle src={infoGame[id].src} alt="" />
                        <a href="#">
                            <button>Play</button>
                        </a>
                    </ContainerGauche>


                </Main>




            </Container>


        
        </>
    )
}

export default InfoJeux ;