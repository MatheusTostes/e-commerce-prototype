import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './styles.css';


function CardItem() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      setData(response.data)
    }).catch(() => {
      console.log("deu ruim")
    })
  }, [])    
        
      

return (  
  <div className='content'>
    {data.map((product, key) => {
      return (
        <div className="card" key={key}>
          <div className='title-box'>
            <img src={product.image} alt='produto'/>
            <p className='title-card'>{product.title}</p>
          </div>
          <div className='prices-area'>
            <p className='price-card'>R${product.price}</p>
            <p className='price-text'>à vista</p>
          </div>
        </div>
      )
    })}  
  </div> 
  )
}
  
export default CardItem;

