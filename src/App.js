import './App.css';
import Header from './components/Header'
import SectionBox from './components/SectionBox'
<script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></script>

function App() {
  return (
    <div className='Container'>
      <Header/>
      <SectionBox>Ofertas</SectionBox>
    </div>
  );
}

export default App;