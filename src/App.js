import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js'
import Chat from './components/Chat/Chat.js'


function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
