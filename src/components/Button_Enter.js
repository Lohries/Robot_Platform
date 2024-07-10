import '../styles/Button_Enter_styles.css'
import { Link } from 'react-router-dom';

const ButtonEnter = () => {
    return(
        <div className='buttons'>
            <Link to='/home'><button>SignUp</button></Link>
            <Link to='/home'><button>LogIn</button></Link>
        </div>
    )
    

    
}

export default ButtonEnter;
