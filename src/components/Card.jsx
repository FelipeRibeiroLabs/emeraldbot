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
    border-radius: 0.6rem;
    height: 450px;
    width: 380px;
    padding: 3%;
    margin: 20px;
    color: white;
    background:  rgba(255, 255, 255, 0.01) ;
    box-shadow: inset 0px 39px 56px -36px rgba(255, 255, 255, 0.25), inset 0px 7px 11px -4px rgba(255, 250, 250, 0.5), inset 0px -82px 68px -64px rgba(0, 255, 217, 0.3), inset 0px 0px 100px -48px rgba(0, 255, 217, 0.3), inset 0px 98px 100px -48px rgba(0, 255, 217, 0.3), inset 0px 4px 18px rgba(0, 255, 217, 0.3);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

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