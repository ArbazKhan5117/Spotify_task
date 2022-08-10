import './App.css';
import TaskRoutes from './routes/routes';
import React,{useState, createContext} from 'react';
export const Data = createContext();
function App() {
  const isAuthenticated = true;
  const [userData, setUserData] = useState([]);
  return (
    <div className="App">
      <header className="">
        <Data.Provider value={{userData, setUserData}}>
        <TaskRoutes />
        </Data.Provider>
        
      </header>
    </div>
  );
}

export default App;
