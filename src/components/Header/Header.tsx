import styles from './Header.module.scss'
import SignButton from "../SignIn/SignIn"
const Header = () => {
    return(
        <header>
            <div className={styles.headerContainer}>
                <h4>Best Apllication</h4>
                <SignButton />
            </div>
        </header>
    )
}
export default Header