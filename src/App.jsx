import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  return (
    <div className="App-Container md:max-w-7xl w-full p-4 mx-auto">
          <Header />
          <Main />
    </div>
  )
}

export default App