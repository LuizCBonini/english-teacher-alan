import React from 'react';
import { styled } from 'styled-components';

// images
import {ReactComponent as Youtube} from '../../assets/images/playButton.svg'
import {ReactComponent as Tiktok} from '../../assets/images/tiktokButton.svg'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderList>
        <Logo src={logo} alt="Logo do professor de inglês Álan" />
        <HeaderItemList>Home</HeaderItemList>
        <HeaderItemList>Sobre</HeaderItemList>
        <HeaderItemList>Método</HeaderItemList>
        <HeaderItemList>Avaliações</HeaderItemList>
        <HeaderItemListButton>Agende uma aula</HeaderItemListButton>
        <SpanButtons>
          <TiktokButton />
          <YoutubeButton />
        </SpanButtons>
      </HeaderList>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  width: 100vw;
`

const SpanButtons = styled.div`
  display: flex;
  column-gap: 1.5rem;
`

const HeaderList = styled.ul`
  margin: 1.6rem 0;
  list-style: none;
  font-family: var(--font-style);
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Logo = styled.img`
  width: 15rem;
  cursor: pointer;
`

const YoutubeButton = styled(Youtube)`
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transition: 100ms ease-in;
  &:hover {
    transition: 100ms ease-in;
    fill: var(--primary-color);
  }
`

const TiktokButton = styled(Tiktok)`
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transition: 100ms ease-in;
  &:hover {
    transition: 100ms ease-in;
    fill: var(--primary-color);
  }
`

const HeaderItemList = styled.li`
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 400;
  position: relative;
  width: fit-content;
  box-sizing: content-box;
  padding: .5rem 0;
  &::before {
    content: "";
    border-radius: 2rem;
    width: 0%;
    height: .3rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: var(--primary-color);
    transition: 200ms ease-in-out;
  }
  &:hover {
    color: var(--primary-color);
    font-weight: 700;
    &::before {
      transition: 200ms ease-in-out;
      width: 100%;
    }
  }
`

const HeaderItemListButton = styled.li`
cursor: pointer;
font-size: 1.6rem;
font-weight: 400;
position: relative;
width: fit-content;
box-sizing: content-box;
padding: .5rem 0;
color: var(--primary-color);
font-weight: 700;
&::before {
  content: "";
  border-radius: 2rem;
  width: 100%;
  height: .3rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--primary-color);
  transition: 200ms ease-in-out;
}
`
