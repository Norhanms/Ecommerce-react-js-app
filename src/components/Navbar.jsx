import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
 height:60px;
 border-bottom: 1px solid #222;
`
const Wrapper=styled.div`
 padding:10px 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
const Left=styled.div`
flex:1;

`
const Language=styled.span`
font-size:14px;
cursor: pointer;
text-transform: uppercase;
`
const Center=styled.div`
flex:2;
`
const Right=styled.div`
flex:1;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <Language>En</Language>
            </Left>
            <Center>Center</Center>
            <Right>Right</Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar