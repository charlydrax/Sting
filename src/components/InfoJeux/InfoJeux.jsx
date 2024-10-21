import styled from 'styled-components'
import dataGame  from '../../data/data-game.js'
const Container = styled.div`
    background: #2528A1;
    width:600px;
    margin:auto;
    margin-top:50px;
`
const ContainerDroite = styled.div`
    color:white;
    padding:50px;
`
const ContainerGauche = styled.div`
    padding:50px;
`



function InfoJeux({idGame}){
    let infoGame = dataGame
    console.log(infoGame)
    return(

        <>

            <Container>
                <main>
                    <ContainerDroite>
                        <h1>{infoGame[idGame].title}</h1>
                        <p>{infoGame[idGame].categories}</p>
                        <p>{infoGame[idGame].creator}</p>
                        <p>{infoGame[idGame].description}</p>
                    </ContainerDroite>


                </main>




            </Container>
            {/* <p>{infoGame[1].title}</p> */}


        
        </>
    )
}

export default InfoJeux ;