import { useSelector } from 'react-redux'
import Contatos from '../../components/Contatos'
import { Container } from '../../styles'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      {itens.map((c) => (
        <Contatos
          email={c.email}
          numero={c.numero}
          nome={c.nome}
          key={c.id}
          id={c.id}
        />
      ))}
    </Container>
  )
}

export default ListaContatos
