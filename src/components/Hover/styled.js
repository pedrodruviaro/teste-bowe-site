import styled, { css } from "styled-components"
import { defaultTheme } from "../../styles/theme"

export const ResponsiveFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 0 6rem 200px;
  @media (max-width: 1500px) {
    padding: 200px 0 200px 150px;
  }
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 100px 30px 100px 30px;
  }
  @media (max-width: 768px) {
    align-items: unset;
    justify-content: center;
    text-align: center;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${({ align }) =>
    align &&
    css`
      align-items: center;
    `}
  @media(max-width: 1024px) {
    h3 {
      text-align: center;
      margin-top: 30px;
    }
    p {
      text-align: center;
    }
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  margin: ${({ margin }) => (margin ? margin : "0")};
  a + a {
    margin: 0 20px;
    @media (max-width: 320px) {
      margin: 0 10px;
    }
  }
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Button = styled.a`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
  div div {
    img {
      max-width: 90px;
      filter: brightness(0) grayscale(100%);
    }
  }
  ${({ logoColor }) =>
    logoColor &&
    css`
      div div {
        img {
          filter: none;
          transition: filter 0.4s;
        }
      }
    `}

    @media (max-width: 420px){
      margin: 1rem 0!important;
    }
`

export const line = styled.span`
  margin-top: 2px;
  border: 2px solid ${defaultTheme.colors.transparent};
  border-radius: 10px;
  width: 50px;
  ${({ selectedBox }) =>
    selectedBox &&
    css`
      border-color: ${({ lineColor }) => defaultTheme.colors[lineColor]};
      transition: border 0.4s;
    `}
`
export const InfoSquare = styled.div`
  border: 1px solid transparent;
  border-radius: 29px 0 0 29px;
  border-right: none;
  background: ${({ bg }) => defaultTheme.colors[bg]};
  width: 800px;
  min-height: 610px;
  display: flex;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    border-right: 1px;
    border-radius: 10px;
  }
`

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0 3rem 3rem;
  height: auto;
  width: 100%;
  @media (max-width: 540px) {
    padding: 2rem
  }
  @media (max-width: 414px) {
    margin: 20px 0 20px 0px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div:first-child {
    flex-direction: column;
    text-align: left;

    @media (max-width: 1024px) {
      text-align: center;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        width: 100%;
      }
      h6:last-child {
        margin-bottom: 30px;
      }
    }
  }
  img:first-child {
    width: 300px;
    @media (max-width: 1024px) {
    }
  }
  img:last-child {
    width: 100%;
    @media (max-width: 1024px) {
      display: block;
    }
    @media (max-width: 375px) {
      width: 200px;
    }
  }
`
export const ContainerTitle = styled.div`
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const containerImages = styled.div`
  position: absolute;
  right: -2rem;
  display: flex;
  justify-content: center;
  max-height: 600px;
  @media(max-width: 540px){
    position: relative;
    justify-content: center;
    align-items: center;
    right: inherit;
    img{
      width: 70%!important;
      margin-top: 3rem;
    }
  }

`
