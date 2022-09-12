import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
display:flex;
align-items: center;
`
const Language=styled.span`
font-size:14px;
cursor: pointer;
text-transform: uppercase;
`
const SearchContainer=styled.div`
  border:1px solid lightgray;
  display:flex;
  margin-left: 25px;
  padding: 5px;
  
`
const Input=styled.input`
  border:none;
`
const Center=styled.div`
flex:2;
text-align: center;
`
const Logo=styled.h1`
  font-weight: bold;
 
`
const Right=styled.div`
flex:1;
display:flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem=styled.div`
  font-size: 14px;
  cursor:pointer;
  margin-left: 25px;
  
`
/*======================================*/
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <Language>En</Language>
               <SearchContainer>
              <SearchIcon/>
              <Input/>
               </SearchContainer>
               
            </Left>
            <Center>
              <Logo>CodeShow</Logo>
              </Center>
            <Right>
              <MenuItem>Register</MenuItem>
              <MenuItem>Signin</MenuItem>
              <MenuItem>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon/>
              </Badge>

              </MenuItem>
            </Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar