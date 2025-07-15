import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const screenModeIcon = isLightMode ? '/icons/icon_moon.svg' : '/icons/icon_sun.svg';
  const [isStudioMode, setIsStudioMode] = useState(true);

  function handleScreeenModeToggle() {
    setIsLightMode(!isLightMode);
    document.documentElement.setAttribute(
      'data-theme', 
      isLightMode ? 'dark' : 'light'
    );
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme', 
      isLightMode ? 'light' : 'dark'
    );
  }, []);

  return (
    <>
      <div className='container'>
        <div className='logo'>
          <div>
            <span>YOUR CLIENT</span>
          </div>
        </div>

        <div className='client-comment puzzle-connector'>
          <div>
            <p>Umm...can you help me with something?</p>
          </div>
        </div>

        <div className='client-face'>
          <img src='/client-face.png' alt='Client Face' />
        </div>
        
        <div className='buttons'>
          <div className='screen-mode-button-container'>
            <button className='screen-mode-button' onClick={handleScreeenModeToggle}>
              <img src={screenModeIcon} alt='Dark Mode Icon' />
              {/* <img src='/icons/icon_sun.svg' alt='Light Mode Icon' /> */}
            </button>
          </div>
          <div className='switch-space-toggle'>
            <input type='checkbox' />
            <label></label>
          </div>
        </div>

        <div className='filter-and-list puzzle-connector'>
          <div className='filter-container'>
            <div>
              <h2>Type of Project</h2>
              <select>
                <option value='other'>Random</option>
                <option value='web'>Web</option>
                <option value='mobile'>Mobile</option>
                <option value='desktop'>Desktop</option>
              </select>
            </div>
            <div>
              <h2>Industry</h2>
              <select>
                <option value='other'>Random</option>
                <option value='ecommerce'>E-commerce</option>
                <option value='education'>Education</option>
                <option value='healthcare'>Healthcare</option>
                <option value='finance'>Finance</option>
              </select>
            </div>
          </div>
        </div>

        <div className='generate-button-and-timer'>
          <div className='generate-button-container'>
            <div className='generate-button-text'>
              <h1>Meet Your Client</h1>
              <h2>Generate Design Brief</h2>
            </div>
            <div className='generate-button'>
              <button><span>→</span></button>
            </div>
          </div>
        </div>
        
        <div className='output-container puzzle-connector'>
          <div>
            <p>output will be here</p>
          </div>
        </div>

        <div className='footer'>
          <div>
            <h2>Made By Madoka</h2>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
