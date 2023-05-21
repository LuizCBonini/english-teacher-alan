import React from 'react'
import { styled } from 'styled-components'
import stars from '../assets/images/stars.png'
import alan from '../assets/images/AlanPhoto.png'

export const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <GroupTitle>
          <StarsIcons src={stars} alt="Cinco estrelas douradas" />
          <HomeTitle>Aprenda Inglês de Forma Simples e Autêntica</HomeTitle>
        </GroupTitle>
        <SubFrase>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SubFrase>
        <Button>Quero Aprender</Button>
      </Content>
      <AlanPhoto src={alan} alt="Foto do professor de inglês Álan Forlenza"/>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
`

const Content = styled.div`
  padding-top: 5rem;
`

const StarsIcons = styled.img`
  width: 25rem;
`

const HomeTitle = styled.h1`
  font-size: 5.1rem;
  width: 80rem;
`

const GroupTitle = styled.h1`
  margin-left: 5%;
`

const Button = styled.button`
  margin-top: 2rem;
  margin-left: 5%;
  border-radius: 3rem;
  border: none;
  padding: .5rem 1.5rem;
  font-size: 2rem;
  font-weight: 600;
  background-color: var(--primary-color);
  color: white;
  transition: 300ms ease-out;
  cursor: pointer;
  &:hover {
    transition: 300ms ease-in;
    background-color: var(--dark-primary-color);
  }
`

const SubFrase = styled.h1`
  margin-left: 6%;
  width: 60rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1rem;
    height: 100%;
    width: .5rem;
    border-radius: 10px;
    background-color: var(--primary-color);
  }
`

const AlanPhoto = styled.img`
  height: 70vh;

`