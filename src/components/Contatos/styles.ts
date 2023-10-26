import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  border: 1px solid black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`
export const Nome = styled.textarea`
  font-size: 16px;
  font-weight: bold;
`
export const Info = styled.textarea`
  font-size: 16px;
  margin-left: 64px;
`
export const Icon = styled.svg`
  height: 38px;
  width: 5%;
`
export const Botao = styled.button`
  background-color: rgb(197, 197, 194);
  padding: 8px;
  text-transform: uppercase;
  color: #fff;
  border: none;
  border-radius: 8px;
`
export const BotaoRemover = styled(Botao)`
  background-color: rgb(209, 51, 23);
`
export const BotaoSalvar = styled(Botao)`
  background-color: rgb(34, 207, 34);
`
