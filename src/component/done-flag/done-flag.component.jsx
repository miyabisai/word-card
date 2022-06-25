import { ReactComponent as DoneFlg} from '../../assets/done_flg.svg';
import { ReactComponent as DoneFlgChecked} from '../../assets/done_flg_checked.svg';

const DoneFlag = ({check,...otherProps})=>{
    return(
        <span className="logo" {...otherProps}>
        { check==0?<DoneFlg />:<DoneFlgChecked />}
        </span>
    )
};


export default DoneFlag;

