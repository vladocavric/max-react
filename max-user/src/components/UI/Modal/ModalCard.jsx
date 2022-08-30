import styles from './Modal.module.css';
import Button from '../Button/Button';
import Card from '../Card/Card';
const ModalCard = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>{props.message}</div>
			<footer className={styles.actions}>
				<Button onClick={props.onConfirm}>OK</Button>
			</footer>
		</Card>
	);
};

export default ModalCard;
