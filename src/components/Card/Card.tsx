import styles from './Card.module.scss'
const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.img}></div>
            <h4>Lorem ipsum</h4>
            <h6>Decription...</h6>
        </div>
    )
}
export default Card