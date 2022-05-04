import styled from "styled-components"

export function Card({command, commandDescription, param1, param2, param3, imgLinkUsage, imgLinkResult, note}){
    return (
        <CardWrapper>
            <h2>{command}</h2>
            <p>{commandDescription}</p>
            <h3>Parameters:</h3>
            <ul>
              <li>{param1}</li>
              <li>{param2}</li>
              <li>{param3}</li>
            </ul>
            <p>{note}</p>

            <h4>Example Usage:</h4>
            <img src={imgLinkUsage}/>

            <h4>Example Result:</h4>
            <img src={imgLinkResult}/>


      </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 1rem;
    height: 450px;
    width: 380px;
    padding: 3%;
    margin: 20px;
    color: white;
    background: radial-gradient(100% 204.51% at 100% 0%, rgba(17, 246, 212, 0.145) 0%, rgba(255, 255, 255, 0.005) 50%);
    box-shadow: inset -2px 0px 2px -2px #11F6D4, inset 2px 4px 4px rgba(0, 0, 0, 0.3), inset 0px 0px 6px 1px rgba(17, 246, 212, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    h2{
      font-size: 25px;
      margin: 0;
      margin-bottom: -8px;
      padding: 0;
    }

    h3{
      font-size: 17px;
      margin: 0;
      margin-bottom: -22px;
      margin-top: -20px;
      padding: 0;
    }

    h4{
      font-size: 20px;
      margin: 0;
      margin-bottom: -22px;
      margin-top: 5px;
      padding: 0;

    }

    p{
        font-size: 12px;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    ul{
      margin: 0;
    }

    li{
      font-size: 12px;
      margin: 3px;
      list-style-type: none;
    }
`