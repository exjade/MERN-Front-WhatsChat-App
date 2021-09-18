import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js'
import Chat from './components/Chat/Chat.js'

function App() {
  return (
    <div className="app">
     <h1>Vamos a construir un MERN chat!!</h1>
     <Sidebar />
     <Chat />
    </div>
  );
}

export default App;
