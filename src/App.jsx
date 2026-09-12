import './App.css'
import Apresentacao from './components/Apresentacao'
import Calculadora from './components/Calculadora'

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <Calculadora />
          <Apresentacao/>
        </div>
      </section>
    </>
  )
}

export default App
