
import Navbar from "../components/Navbar";
import { Section1 } from "../sections/Section1.js";
import { Section2 } from "../sections/Section2"
import { Section3 } from "../sections/Section3.js";
import { Section4 } from "../sections/Section4.js";
import { Section5 } from "../sections/Section5.js";

import styled from 'styled-components'

export function Home(){
    return (
        <HomeWrapper>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    background-color: #1D2741;;
`