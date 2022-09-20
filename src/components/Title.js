
import './title.css'
import PropTypes from "prop-types";


const Title=({size,onClick,text,...props})=>{
    return(
        <div {...props} onClick={onClick} className={`custom-title ${size}`}>
            {text}
        </div>
    )
}
Title.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Title.defaultProps = {
    text:'Hello World',
    size: 'medium',
    onClick: undefined,
};

export default  Title