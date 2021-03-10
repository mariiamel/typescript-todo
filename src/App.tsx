// Dependencies
import { useState } from 'react';

// Page Components
import { List } from './components';

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

  const [toDos, setToDos] = useState<ToDo[]>(mockData);



  return (
    <div className="app">
      <Header />
      <div className="container">
        <List 
          toDos={toDos}
        />
        {/* <Modal /> */}
      </div>
      <Footer />
    </div>
  )
};