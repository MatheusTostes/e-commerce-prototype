import './App.css';
import Header from './components/Header'
<script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></script>

import SectionOffers from './components/SectionOffers'
import SectionMostSold from './components/SectionMostSold'

function App() {
  return (
    <div className='Container'>
      <Header/>
      <SectionOffers title='Ofertas'>
      </SectionOffers>
      <SectionMostSold title='Mais vendidos'>
      </SectionMostSold>
    </div>
  );
}

export default App;