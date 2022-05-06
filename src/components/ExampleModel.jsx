import styled from 'styled-components'

export function ExampleModel({handleCloseBtn, commandName, usageExampleLink, resultExampleLink}){

    const handleModal = () => {
        handleCloseBtn(false)
    }

    return (
        <ExampleModelWrapper>
            <section>
                <button 
                onClick={() => handleModal()}
                > x </button>
                <div><p>{commandName}</p></div>
                <div>
                    <p>Example Usage</p>
                    <img src={usageExampleLink} />
                </div>
                <div>
                    <p>Example Result </p>
                    <img src={resultExampleLink} />
                </div>
            </section>
        </ExampleModelWrapper>
    )
}

const ExampleModelWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 5;
    position: absolute;
    top: -240px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .99;
    -webkit-transform: scale(0.9) !important;

    div{
        -webkit-transform: scale(0.9) !important;
    }

    div:nth-child(2n){
        height: 15%;
    }

    div:nth-child(3n){
        height: 42.5%;
    }

    div:nth-child(4n){
        height: 42.5%;
    }

    button{
        position: relative;
        top: 2%;
        left: 41%;
        width: 40px;
        padding: 0;
    }

    section{
        width: 60vw;
        height: 80vh;
        padding: 40px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        background: #141414;
    }

    h4{
        color: white;
    }

    p{
        color: white;
        text-align: center;
        font-size: 1.5rem;
    }
`