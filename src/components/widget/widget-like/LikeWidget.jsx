import { useEffect, useState } from "react"
import styled from "styled-components"



const Container = styled.div`
    display:flex;
    align-items:center;
`
const Triangle = styled.div`
    display : inline-block;
    height : 0;
    width : 0;
    border-top : 8px solid transparent;
    border-bottom : 7px solid transparent;
    border-left : 15px solid #D9D9D9;
`
const Hearts = styled.div`
    font-size:25px;
    cursor:pointer;

`
const ContainerNummberLike = styled.div`
    border-radius:4px;  
    width:70px;
    height:36px;
    background:#D9D9D9;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;
`


function LikeWidget ({ rate }){
    let [numberLike, setNumberLike] = useState(rate)

    let [isLike, setIsLike] = useState(false)

    const changeHearts = () => {
        setIsLike(!isLike)
        setNumberLike(prev => prev + (isLike ? -1 : 1));
    }
    return(
        <>

            <Container>

                <ContainerNummberLike >
                    {numberLike}
                </ContainerNummberLike>
                <Triangle />
                <Hearts onClick={changeHearts}>
                    {!isLike ? "🤍" : "❤️"} 
                </Hearts>

            </Container>
            
        
        </>
    )
}
export default LikeWidget