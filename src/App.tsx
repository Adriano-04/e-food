import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { Container, GlobalStyle } from './style'
import Rotas from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Rotas />
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
