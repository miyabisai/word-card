import { useState,useEffect } from 'react';
import DoneFlag from '../done-flag/done-flag.component';
import { updateDoneFlag } from './update-done-flag';
import { ReactComponent as Voice} from '../../assets/voice.svg';

import './card.styles.scss';

const Card = ({ word }) => {
    const id = word[0];
    const front = word[1];
    const back = word[2];
    const comment = word[3];
    const practice = word[4];
    const [side, setSide] = useState(true);
    const [isComment, setIsComment] = useState(true);
    const [isChecked, setIsChecked] = useState(practice);
    const voiceUrl = `https://zh.forvo.com/search/${word[1]}/`;
    const turnOver = () => {
        setSide(!side);
    };
    const showComment = () => {
        setIsComment(!isComment);
    }
    const hasPracticed = () => {
        let doneFlag = "";
        if (isChecked == 0 ){
            doneFlag = "1"; setIsChecked(doneFlag);
        }else{
            doneFlag = "0";
            setIsChecked(doneFlag);
        }
        updateDoneFlag(id,doneFlag);
    }

    return (
        <div className="card-container">
            {
                isComment ?
                    <div className="card-content" onClick={turnOver}>
                        <p className="size">{side ? front : back}</p>
                    </div> :
                    <div className="card-content comment-content">
                        <p>
                            {comment}
                        </p>
                    </div>
            }
            <div className='comment'>
                <a href={voiceUrl} target="_blank"><Voice className='voice'/></a>
                <DoneFlag check={isChecked} onClick={hasPracticed}/>
                <span className='btn' onClick={showComment}>Show Note</span>
            </div>
        </div>
    )
}

export default Card;