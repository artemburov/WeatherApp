import React from 'react'
import Form from "./components/form"
// Убирай неиспользуемые переменные 
import Fetching from "./components/fetching"

class App extends React.Component {

  // Form  неверное название. Подумай какое лучше применить 
  // А какой смысл у компоненты App?
  render() {
    return (
      <div>
        <Form />
      </div>
    )
  }
}

export default App