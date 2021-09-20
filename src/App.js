import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js'
import Chat from './components/Chat/Chat.js'
import Pusher from 'pusher-js'
import axios from './axios'


function App() {

  const [ messages, setMessages] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect( () => {
      let hour = new Date().getHours();
      let min = new Date().getMinutes();
      let ampm = hour >= 12 ? 'pm' : 'am';
      hour =  hour % 12;
      hour = hour ? hour : 12;
      min = min < 10 ? '0'+min : min;
      setDate(
          `${hour}:${min} ${ampm}`
      )
  }, [])

  useEffect(() => {
    const pusher = new Pusher('7823849fe6a9b22a4845', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (newMessage) {
      // alert(JSON.stringify(newMessage));
      // Make a copy of the messages but also the new one
      setMessages([...messages, newMessage])
    });

    //Cleanup Function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])

  // console.log(messages)


  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat messages={messages} date={date}/>
      </div>
    </div>
  );
}

export default App;
