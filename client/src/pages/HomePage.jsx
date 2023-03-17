import React from 'react'
import logo from '../assets/logo.svg'
import ai from '../assets/ai.png'
import '../css/style.css'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className='Homepage '>
      {/* navbar  */}
      <div className="navbar gradient_bg">
        <div className="logocontainer">
          <img className='logo' src={logo} alt='logo' />
        </div>
        <div className="login">
          <button className="signin">Sign in</button>
          <button className="signup">Sign up</button>
        </div>
      </div>


      {/* header  */}
      <div className="header_section gradient_bg">
        < div className='header_contents'>
          <h1 className='gradient_text'>Lets build something amazing with chatgpt and AI image generator</h1>

          <div className="buttons">
            <button className='button' onClick={() => navigate('/chatgpt')}><span>Chatgpt</span><i></i></button>
            <button className='button' onClick={() => navigate('/imagehome')} ><span>AI Image Generation</span><i></i></button>
          </div>
        </div>
        <div className="header_image">
          <img src={ai} alt="header-img" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
