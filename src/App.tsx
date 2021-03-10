// Dependencies
import { useState } from 'react';

// Page Components
import { List, Modal } from './components';

// Layout Components
import { Footer, Header } from './layout';

// External Data
import { mockData } from './data/mockData';

// Styling
import './App.css';

export interface ToDo {
  name: string,
  dueDate: number,
  complete: boolean
};

export default function App() {

  const [modalOpen, setModalOpen] = useState(true);
  const [toDos, setToDos] = useState<ToDo[]>(mockData);

  const addNewToDo = (newToDo: ToDo) => {
    setToDos(toDos => [...toDos, newToDo]);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
    // modalOpen ? setModalOpen(false) : setModalOpen(true);
  };

  let modalClassname = modalOpen ? "modal modal--active" : "modal";

  return (
    <div className="app">
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
};