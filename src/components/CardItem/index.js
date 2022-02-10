import React from 'react';
import './styles.css';

function CardItem() {
    const products = [
        {
          'image': 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgh-p852vga-rgb2.jpg',
          'title': 'HEADSET GAMER PICHAU P852 VEGA, RGB, SOM SURROUND 7.1, DRIVERS 53MM, PRETO, PGH-P852VGA-RGB',
          'price': 'R$549,90',
        },
        {
          'image': 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pg-omg-gld012.jpg',
          'title': 'CADEIRA GAMER PICHAU OMEGA, VERMELHA E DOURADA, PG-OMG-GLD01',
          'price': 'R$1.699,05',
        },
        {
          'image': 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/d/a/darkflash-dlm-21-mesh2.jpg',
          'title': 'GABINETE GAMER AIGO DARKFLASH DLM 21 MESH PRETO LATERAL VIDRO',
          'price': 'R$319,90',
        },
        {
          'image': 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/s/asx8200pnp-256gt-c_1_1.jpg',
          'title': 'SSD ADATA XPG SX8200 PRO 256GB M.2 2280 NVME, ASX8200PNP-256GT-C',
          'price': 'R$365,44',
        },
        {
          'image': 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000252box123412.jpg',
          'title': 'PROCESSADOR AMD RYZEN 5 5600G, 6-CORE, 12-THREADS, 3.9GHZ (4.4GHZ TURBO), CACHE 19MB, AM4, 100-100000252BOX',
          'price': 'R$1.597,90',
        },
        {
          'image': 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgm-hvsrgb-blk231228.jpg',
          'title': 'MOUSE GAMER PICHAU HIVE S, RGB, 16000DPI, 6 BOTOES. PRETO, PGM-HVSRGB-BLK',
          'price': 'R$269,90',
        },
        {
          'image': 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/3/0/301-00351-02.jpg',
          'title': 'OCULOS DE REALIDADE VIRTUAL OCULUS QUEST 2, 256GB, BRANCO, 301-00351-02',
          'price': 'R$5.499,99',
        },
      ]


    return (  
        <div className='content'>
          {products.map((data, key) => {
            return (
              <div className="card" key={key}>
                <div>
                  <img src={data.image} alt='produto'/>
                  <p className='title-card'>{data.title}</p>
                </div>
                <div className='prices-area'>
                  <p className='price-card'>{data.price}</p>
                  <p className='price-text'>à vista</p>
                </div>
              </div>
            )
          })}
        
        </div>
    );
  }
  
  export default CardItem;

