import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Maria K.',
      numero: 81988257466,
      email: 'mariak@gmail.com',
      id: 1
    },
    {
      nome: 'Laryssa A.',
      numero: 81947276595,
      email: 'laryssaa@gmail.com',
      id: 2
    },
    {
      nome: 'Fernanda I.',
      numero: 81988402745,
      email: 'fernandai@gmail.com',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const contatoEditado = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contatoEditado) {
        state.itens[contatoEditado] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (Contato) =>
          Contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Contato já adicionado')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : ultimoContato
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, cadastrar, editar } = contatosSlice.actions
export default contatosSlice.reducer
