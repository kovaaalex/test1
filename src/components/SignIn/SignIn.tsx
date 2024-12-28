import styles from './SignIn.module.scss'
import { useNavigate } from 'react-router-dom'
const SignButton = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/registration')
    }
    return(
        <button 
            className={styles.signIn}
            onClick={handleClick}
        >
            <h4>Sign up</h4>
        </button>
    )
}
export default SignButton