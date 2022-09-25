import {useContext} from 'react';
import {CardContext} from '../../context/card.context';
import Card from "../card/card.component";
import './card-list.styles.scss';


const CardList = ()=>{
    const {words} = useContext(CardContext);
    const words_data = words.slice(1,words.length);
    return(
        <div className="card-list-container">
           {
                words_data.map((word,idx)=>(<Card key={idx} word={word}/>))
           }
        </div>

    )

};

export default CardList;