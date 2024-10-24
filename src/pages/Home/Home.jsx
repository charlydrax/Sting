import styled from "styled-components"
import colors from "../../colors"
import HomeTop from "../../components/homeTop/HomeTop"

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
        <HomeTop />
    )
}