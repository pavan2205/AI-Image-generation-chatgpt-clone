import React, { useState } from 'react'
import chatgptIcon from '../assets/chatgpt-icon.png'
import '../css/style.css'

const ChatGpt = () => {


  const [input, setInput] = useState('')
  const [chatLog, setChatLog] = useState([{
    user: 'gpt',
    message: 'How can i help you today'
  }, {
    user: 'me',
    message: 'i want to use chatgpt'
  },
  ])

  function clearChats() {
    setChatLog([])
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let newChatLog = [...chatLog, { user: "me", message: `${input}` }]
    await setInput("");
    setChatLog(newChatLog)

    const messages = newChatLog.map((message) => message.message).join("\n")

    //fetch the response from the api
    const response = await fetch("http://localhost:8080/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
      })
    })
    const data = await response.json();
    setChatLog([...newChatLog, {
      user: 'gpt',
      message: `${data.message}`
    }])
  }

  return (

    <div className='App1'>
      <aside className="sidemenu">
        <div className="side-menu-button" onClick={clearChats}>
          <span>+</span>
          new chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chatlog example">
          {
            chatLog.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))
          }
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              rows="3"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input-textarea"
              placeholder='Type your message here'
            ></input>
          </form>
        </div>
      </section>
    </div>
  )
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
          {message.user == "gpt" && <img src={chatgptIcon} alt='icon' />}
        </div>
        <div className="message">
          {message.message}
        </div>
      </div>
    </div>
  )
}

export default ChatGpt
