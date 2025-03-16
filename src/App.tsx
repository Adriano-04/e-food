import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalStyle } from './style'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
