import './styles.css';

import OfferCardItem from "../OfferCardItem"

function SectionOffers(props) {
    return (  
        <div className="Container">
           <div className="section-box">
             <h2>{ props.title }</h2>
             <OfferCardItem/>
           </div>
        </div>
    );
}

export default SectionOffers;