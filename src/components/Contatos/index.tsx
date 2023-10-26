import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import Contato from '../../models/Contato'
import { remover, editar } from '../../store/reducers/contatos'

type Props = Contato

const Contatos = ({
  nome: nomeOriginal,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState(0)
  const [email, setEmail] = useState('')

  function cancelar() {
    setNome(nomeOriginal)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
    setEstaEditando(false)
  }

  useEffect(() => {
    setNome(nomeOriginal)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
  }, [emailOriginal, nomeOriginal, numeroOriginal])

  return (
    <>
      <S.Card>
        <S.Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 101 101"
            id="user"
          >
            <path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"></path>
          </svg>
        </S.Icon>
        <S.Nome
          value={nome}
          disabled={!estaEditando}
          onChange={(e) => setNome(e.target.value)}
        ></S.Nome>
        <S.Info
          value={numero}
          disabled={!estaEditando}
          onChange={(e) => setNumero(parseInt(e.target.value))}
        ></S.Info>
        <S.Info
          value={email}
          disabled={!estaEditando}
          onChange={(e) => setEmail(e.target.value)}
        ></S.Info>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    numero,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoRemover onClick={cancelar}>Cancelar</S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao
              onClick={() => {
                setEstaEditando(true)
              }}
            >
              Editar
            </S.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.Card>
    </>
  )
}

export default Contatos
