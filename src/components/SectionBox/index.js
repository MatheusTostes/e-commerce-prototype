import './styles.css';

import CardItem from "../CardItem"

function SectionBox(props) {
    return (  
        <div className="Container">
           <div className="section-box">
             <h2>{ props.children }</h2>
             <CardItem/>
           </div>
        </div>
    );
}

export default SectionBox;