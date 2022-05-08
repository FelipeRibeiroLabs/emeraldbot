import { useEffect, useRef, useState } from "react";

import {ExampleModel} from '../components/ExampleModel'

import styled from "styled-components"

export function Card({command, commandDescription, param1, param2, param3, param4, imgLinkUsage, imgLinkResult, note}){

  const [openModal, setOpenModal] = useState(false)
  const ref = useRef()

  useEffect(() => {
    if(openModal){
      ref.className = "active"
    } else {
      ref.className = ""
    }
  })

    return (
          <>
            <CardWrapper ref={ref}>
              <div><h2>{command}</h2></div>
              <div><p>{commandDescription}</p></div>
              <div>{param1 && <h3>Parameters:</h3>}</div>
              <div>
                <ul>
                  {param1 && <li>{param1}</li>}
                  {param2 && <li>{param2}</li>}
                  {param3 && <li>{param3}</li>}
                  {param4 && <li>{param4}</li>}
                </ul>
              </div>
              <div>{ note && <p className="note">{note}</p>}</div>
              <div>
                <button
                type="button"
                onClick={() => setOpenModal(true)}
                > 
                  Example
                </button>
              </div>
            </CardWrapper>
              {
              openModal && 
              <ExampleModel 
              commandName={command} 
              usageExampleLink={imgLinkUsage}
              resultExampleLink={imgLinkResult}
              handleCloseBtn={setOpenModal}
              />
              }
        </>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-around; */
    border-radius: 0.6rem;
    height: 550px;
    // width: 380px;
     width: 30%;
    padding: 3%;
    margin: 20px;
    color: white;
    background:  rgba(255, 255, 255, 0.01) ;
    box-shadow: inset 0px 39px 56px -36px rgba(255, 255, 255, 0.25), inset 0px 7px 11px -4px rgba(255, 250, 250, 0.5), inset 0px -82px 68px -64px rgba(0, 255, 217, 0.3), inset 0px 0px 100px -48px rgba(0, 255, 217, 0.3), inset 0px 98px 100px -48px rgba(0, 255, 217, 0.3), inset 0px 4px 18px rgba(0, 255, 217, 0.3);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    .active{
      -webkit-transform: scale(0.9) !important;
    }

    // COMMAND TITLE
    div:nth-child(1){
      height: 15%;
    }

    // COMMAND DESCRIPTION
    div:nth-child(2n){
      height: 20%;
    }

    // PARAMS TITLE
    div:nth-child(3n){
      height: 10%;
    }

    // PARAMS UL
    div:nth-child(4n){
      height: 30%;
      display: flex;
      align-items: center;
    }

    // NOTE
    div:nth-child(5n){
      height: 15%;
    }

    // BUTTON
    div:nth-child(6n){
      height: 20%;
    }

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

    button{
      color: black;
    }
`