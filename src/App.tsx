import { useState } from 'react'
import { Modal } from "./components";
import './App.css'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <button className="btn-open-modal" onClick={() => setIsOpen(true)}>Afficher modal</button>
      <Modal isOpen={isOpen} message='Bonjour Laval' close={() => setIsOpen(false)}/>
    </div>
  )
}

export default App
