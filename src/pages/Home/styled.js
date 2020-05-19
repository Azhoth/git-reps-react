import styled from 'styled-components'

export const HomeContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    heigth: 100vh;
`
export const Container = styled.div `
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input `
    border: 1px solid #DDD;
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: .25rem 0 0 .25rem;
`
export const Button = styled.button `
    height: 2.05rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:hover{
        cursor: pointer;
        -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    }
`
export const ErrorMsg = styled.span `
    display: block;
    font-size: .65rem;
    color: red;
    font-weight: 600;
    margin-left: 1rem;
`
