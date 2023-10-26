import { Provider } from 'react-redux'

import ListaContatos from './containers/ListaContatos'
import EstiloGlobal from './styles'
import store from './store'

import Formulario from './components/Formulario'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal></EstiloGlobal>
      <Formulario></Formulario>
      <ListaContatos></ListaContatos>
    </Provider>
  )
}

export default App
