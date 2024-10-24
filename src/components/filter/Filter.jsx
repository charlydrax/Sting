import styled from "styled-components"
import colors from "../../colors"
import { useState } from "react"

function Filter (){
const ContainerFilter = styled.aside`
    margin: 200px auto 100px auto;
    height: 400px;
    width: 300px;
    background: blue;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        width: 400px;
  }
`
const TopFilter = styled.div`
    height: 50px;
    width: 90%;
    margin: 0px auto 0px auto;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        color: yellow;
        text-decoration: none;
        font-size: small;
    }
    h3{
        color: gray;
    }
`
const Form = styled.form`
    margin: 20px 0px 20px 15px;
    display: grid;
    gap: 20px;

    div input::after{
        height: 13px;
        content: "";
        position: absolute;
        width: 13px;
        background: gray;
        border-radius: 2px;
        opacity: 20%;
    }
    label{
        margin-left: 10px;
        color: white;
    }
`   

    return (
        <>
        <ContainerFilter>
            <TopFilter>
                <span>🪄</span>
                <h3>FILTRE</h3>
                <a href="#">reset</a>
            </TopFilter>
            <Form method="post">
                <div>
                    <input type="checkbox" id="all" /> 
                    <label htmlFor="all">Tout</label>
                </div>
                <div>
                    <input type="checkbox" id="click" />
                    <label htmlFor="click">Point’n click</label>
                </div>
                <div>
                    <input type="checkbox" id="action" />
                    <label htmlFor="action">Action</label>
                </div>
                <div>
                    <input type="checkbox" id="aventure" />
                    <label htmlFor="aventure">Aventure</label>
                </div>
                <div>
                    <input type="checkbox" id="logique" />
                    <label htmlFor="logique">Logique</label>
                </div>
            </Form>
        </ContainerFilter>
        </>
    )
}
export default Filter