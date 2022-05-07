import { Link } from "react-router-dom";

import styled from 'styled-components'

export function Choose(){
    return(
        <ChooseWrapper>
        <Link to="/home">Without 3d</Link>
        <Link to="/home3d">With 3d</Link>
        </ChooseWrapper>
    )
}

const ChooseWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        text-align: center;
        border-radius: 5px;
        color: white;
        min-width: 150px;
        padding: 10px 20px;
        border: 1px solid white;
        margin: 10px;
    }
`