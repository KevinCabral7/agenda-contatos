import { useDispatch } from 'react-redux'
import * as S from './styles'
import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState<number>()
  const [email, setEmail] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    if (numero !== null && numero !== undefined) {
      dispatch(
        cadastrar({
          nome,
          numero,
          email
        })
      )
    } else {
      console.error('Número de contato inválido.')
    }
  }

  return (
    <form onSubmit={cadastrarTarefa}>
      <S.Campo
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Nome"
        type="text"
      />
      <S.Campo
        value={numero}
        onChange={(evento) => setNumero(parseInt(evento.target.value))}
        placeholder="Número de contato"
        type="number"
      />
      <S.Campo
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        placeholder="Email"
        type="email"
      />
      <S.Botao type="submit">Adicionar</S.Botao>
    </form>
  )
}

export default Formulario
