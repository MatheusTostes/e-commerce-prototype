import './App.css';
<script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></script>

function App() {
  return (
    <div>
        <div className='header'>
          <a className='logo' href="/">
            <h1>Proto</h1>
            <h1>TYPE</h1>
          </a>
          <div className='search-box'>
            <box-icon name="search" size="1em" color="rgb(0, 216, 169)"></box-icon>
            <input className='search-input' placeholder='Digite aqui o que quer encontrar!'/>
          </div>
          <div className='user-area'>
            <a href='/'>
              <box-icon name='cart' size="3em" color="rgb(243, 243, 243)"></box-icon>
            </a>
            <a href='/'>Entrar</a>
          </div>
        </div>

    </div>
  );
}

export default App;
