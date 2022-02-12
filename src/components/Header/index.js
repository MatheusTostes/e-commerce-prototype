import React from 'react';
import './styles.css';

function Header() {
    return (  
        <div className="Container">
            <div className='header'>
          <a className='logo' href="/">
            <h1>Proto</h1>
            <h1>TYPE</h1>
          </a>

          <div className='search-box'>
            <box-icon 
              name="search" 
              size="1em" 
              color="rgb(0, 216, 169)">
            </box-icon>

            <input 
              className='search-input' 
              placeholder='Digite aqui o que quer encontrar!'
            />

            <button className='clear-input-btn'>x</button>

            <button className='search-btn'>Buscar</button>
          </div>

          <div className='user-area'>
            <a href='/'>
              <box-icon 
                name='cart' 
                size="2em" 
                color="rgb(243, 243, 243)">
              </box-icon>
            </a>
            
            <a href='/'>Entrar</a>
          </div>
        </div>
        </div>
    );
}

export default Header;