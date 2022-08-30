import styles from './Modal.module.css';
const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />

}

export default Backdrop