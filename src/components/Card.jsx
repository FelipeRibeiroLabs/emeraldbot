import styled from "styled-components"

export function Card({command, commandDescription, param1, param2, param3, param4, imgLinkUsage, imgLinkResult, note}){
    return (
        <CardWrapper>
            <h2>{command}</h2>
            <p>{commandDescription}</p>
            {param1 && <h3>Parameters:</h3>}
            <ul>
              {param1 && <li>{param1}</li>}
              {param2 && <li>{param2}</li>}
              {param3 && <li>{param3}</li>}
              {param4 && <li>{param4}</li>}
            </ul>
            { note && <p className="note">{note}</p>}
            <h4>Example Usage:</h4>
            <img src={imgLinkUsage}/>

            {/* <h4>Example Result:</h4>
            <img src={imgLinkResult}/> */}


      </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    height: 500px;
    width: 380px;
    padding: 3%;
    margin: 20px;
    color: white;
    background:  rgba(255, 255, 255, 0.01) ;
    box-shadow: inset 0px 39px 56px -36px rgba(255, 255, 255, 0.25), inset 0px 7px 11px -4px rgba(255, 250, 250, 0.5), inset 0px -82px 68px -64px rgba(0, 255, 217, 0.3), inset 0px 0px 100px -48px rgba(0, 255, 217, 0.3), inset 0px 98px 100px -48px rgba(0, 255, 217, 0.3), inset 0px 4px 18px rgba(0, 255, 217, 0.3);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    h2{
      background: white;
      color: black;
      font-weight: 800;
      font-size: 18px;
      padding: 2px 20px;
      margin: 10px;
      border-radius: 13px;
      line-height: 40px;
    }

    h3{
      background: white;
      color: black;
      font-size: 17px;
      margin: 10px;
      border-radius: 13px;
      line-height: 25px;
      padding: 2px 20px;
    }

    h4{
      background: white;
      color: black;
      font-size: 20px;
      margin: 10px;
      line-height: 30px;
      padding: 2px 20px;
      border-radius: 13px;
    }

    p{
      background: white;
      color: black;
      font-size: 11px;
      text-align: center;
      margin: 0;
      padding: 7px 15px;
      border-radius: 10px;
    }

    .note{
      font-size: 8px;
      margin-top: 10px;
    }

    ul{
      margin: 5px;
    }

    li{
      background: white;
      color: black;
      padding: 7px 15px;
      font-size: 11px;
      text-align: center;
      margin: -5px;
      list-style-type: none;
    }

    img{
      width: 330px;
      margin-top: 15px;
    }
`