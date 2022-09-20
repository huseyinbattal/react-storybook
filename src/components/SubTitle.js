
import './title.css'
import PropTypes from "prop-types";


const SubTitle=({size,onClick,text,bgColor,showBadge,fontSize,...props})=>{
    return(
        <div {...props} style={{backgroundColor:bgColor,fontSize:fontSize+'px'}} onClick={onClick} className={`custom-title ${size}`}>
            {text} {showBadge?+5:''}
        </div>
    )
}
SubTitle.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    bgColor:PropTypes.string,
    showBadge:PropTypes.bool,
    fontSize:PropTypes.number
};

SubTitle.defaultProps = {
    text:'Hello World',
    size: 'medium',
    onClick: undefined,
    bgColor:'#ccc',
    showBadge:false,
    fontSize:15
};

export default  SubTitle