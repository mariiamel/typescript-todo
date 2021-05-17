import { useState } from 'react';
import { Header, Footer } from './layout';
import { List, Modal } from './components'
import {mockData} from './data/mockData';
import './App.css'

export interface ToDo {
  name: string,
  dueDate: number,
  complete: boolean
}

export default function App() {

  const [modalOpen, setModalOpen] = useState(false)
  const [toDos, setToDos] = useState<ToDo[]>(mockData)

  const addNewToDo = (newToDo: ToDo) => {
    setToDos([...toDos, newToDo])
  }

  const toggleModal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true)
  }

  let modalClassname = modalOpen ? 'modal modal--active' : 'modal'

  return(
    <div className='app'>
      <Header />
      <div className="container">
        <List 
          toDos={toDos} 
        />
        <Modal 
          addNewToDo={addNewToDo}
          className={modalClassname}
          toggleModal={toggleModal}
        />
      </div>
        <Footer />
    </div>
  )
}