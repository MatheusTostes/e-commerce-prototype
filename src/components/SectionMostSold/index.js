import './styles.css';

import CardItem from "../CardItem"

function SectionMostSold(props) {
    return (  
        <div className="Container">
           <div className="section-offers-box">
             <h2>{ props.title }</h2>
             <CardItem/>
           </div>
        </div>
    );
}

export default SectionMostSold;