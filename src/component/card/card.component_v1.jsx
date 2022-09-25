import { useState } from 'react';
import { ReactComponent as DoneFlg} from '../../assets/done_flg.svg';
import { ReactComponent as DoneFlgChecked} from '../../assets/done_flg_checked.svg';

import './card.styles.scss';

const Card = ({ word }) => {
    const front = word[0];
    const back = word[1];
    const comment = word[2];
    const practice = word[3];
    const [side, setSide] = useState(true);
    const [isComment, setIsComment] = useState(true);
    const [isChecked,setIsChecked] = useState(practice);
    const turnOver = () => {
        setSide(!side);
    };
    const showComment = () => {
        setIsComment(!isComment);
    }
    const hasPracticed = ()=>{
        if(!isChecked)setIsChecked(1);
        else setIsChecked(0);
    }
    return (
        <div className="card-container">
            {
                isComment ?
                    <div className="card-content" onClick={turnOver}>
                        <p className="size">{side ? front : back}</p>
                    </div>:
                    <div className="card-content comment-content">
                        <p>
                        {comment}
                        </p>
                    </div>
            }
            <div className='comment'>
                <span className="logo" onClick={hasPracticed}>
                    { !isChecked?<DoneFlg />:<DoneFlgChecked />}
                </span>
                <span className='btn' onClick={showComment}>Show Note</span>
            </div>
        </div>
    )
}

export default Card;