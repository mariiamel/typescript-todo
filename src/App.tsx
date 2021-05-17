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
    // modalOpen ? setModalOpen(false) : setModalOpen(true)
    setModalOpen(!modalOpen)
  }

  const updateToDos = (toDoIndex:number) => {
    let tempToDos = [...toDos]
    tempToDos[toDoIndex].complete = !tempToDos[toDoIndex].complete
    setToDos(tempToDos)
  }

  let modalClassname = modalOpen ? 'modal modal--active' : 'modal'

  return(
    <div className='app'>
      <Header />
      <div className="container">
        <List 
          toDos={toDos}
          toggleModal={toggleModal}
          updateToDos={updateToDos} 
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