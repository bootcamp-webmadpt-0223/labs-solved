import './App.css'
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className='App'>
      <main>
        <NavBar />

        <section className='content'>
          <div>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button>Awesome!</button>
          </div>

          <div className='logo-panel'>
            <img src='./logo.svg' alt='react-logo' />
          </div>
        </section>
      </main>

      <section className='cards'>
        <Card
          imgPath={'./images/icon1.png'}
          title={'Declarative'}
          description={'React makes it painless to create interactive UIs.'}
        />

        <Card
          imgPath={'./images/icon2.png'}
          title={'Components'}
          description={'Build encapsulated components that manage their state.'}
        />

        <Card
          imgPath={'./images/icon3.png'}
          title={'Single-Way'}
          description={'A set of immutable values are passed to the components.'}
        />

        <Card
          imgPath={'./images/icon4.png'}
          title={'JSX'}
          description={'Statically-typed, design to run on modern browsers.'}
        />
      </section>
    </div>
  )
}

export default App
