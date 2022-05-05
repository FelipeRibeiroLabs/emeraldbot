import { Card } from "../components/Card";

import styled from "styled-components"

export function Section3(){

    return (
        <SectionWrapper>
            <h3>Emerald Bot Commands</h3>
            <CardsWrapper>
              <Card 
              command="/identity" 
              commandDescription="Allows you to get on-chain information about a Discord user (their address, .find, .fn, and EmeraldID status)." 
              param1="1- A Discord User" 
              param2="" 
              param3="" 
              imgLinkUsage="" 
              imgLinkResult=""/>
              <Card 
              command="/resolve" 
              commandDescription="Allows you to input an address, .find, or .fn name and get information about the other two as well as their Discord username and all the roles they have in your Discord." 
              param1="1- A Blocto wallet address, a .find name, or a .fn name." 
              param2="" 
              param3="" 
              imgLinkUsage="" 
              imgLinkResult=""/>
              <Card 
              command="/momentsinset" 
              commandDescription="Allows you to view the moments an NBATopShot user has inside a certain set." 
              param1="1- A Dapper wallet address (ex. 0x84efe65bd9993ff8)" 
              param2="2- The set name (ex. Cool Cats)" 
              param3="" 
              imgLinkUsage="" 
              imgLinkResult=""/>
            </CardsWrapper>
            <CardsWrapper>
              <Card 
              command="/togglerole" 
              commandDescription="Allows a user to give or remove a specific role from themselve" 
              param1="1- A role for the user to toggle on themselves" 
              param2="2- A description of what this is for" 
              param3="3- OPTIONAL: URL to an image (ex. https://i.imgur.com/27H7J1a.png)" 
              imgLinkUsage="" 
              imgLinkResult=""/>
              <Card 
              command="/god" 
              commandDescription="Try it out. It’s pretty self explanatory." 
              param1="" 
              param2="" 
              param3="" 
              imgLinkUsage="" 
              imgLinkResult=""/>
              <Card 
              command="/userswithrole" 
              commandDescription="Return a CSV file containing the users and their corresponding wallet address for people who have a specific role. You can download the file by clicking the downward facing arrow in the bottom right." 
              param1="1- The role to look for" 
              param2="" 
              param3="" 
              note="NOTE: The bot will only be able to provide wallet addresses for people who have an EmeraldID. Otherwise, it will produce “N/A”"
              imgLinkUsage="" 
              imgLinkResult=""/>
            </CardsWrapper>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`
    height: 120vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px;
    

    h1{
      font-size: 4rem;
    }
`

const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    left: 20px;
    z-index: 99;


    div:nth-child(1){
      transform-style: preserve-3d;
      -webkit-transform: perspective(500px) rotateY(12deg) scale(0.9);
    }

    div:nth-child(1):hover{
      -webkit-transform: scale(1.2);
      transition: .5s;
      transition-timing-function: ease-in-out;
    }

    div:nth-child(2n){
      -webkit-transform: scale(0.9);
    }

    div:nth-child(2):hover{
      -webkit-transform: scale(1.2);
      transition: .5s;
      transition-timing-function: ease-in-out;
    }

    div:nth-child(3n){
      transform-style: preserve-3d;
      -webkit-transform: perspective(500px) rotateY(-12deg) scale(0.9);
    }

    div:nth-child(3):hover{
      -webkit-transform: scale(1.2);
      transition: .5s;
      transition-timing-function: ease-in-out;
    }
`