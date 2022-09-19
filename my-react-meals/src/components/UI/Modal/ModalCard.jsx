import styles from './Modal.module.scss';
// import Button from '../Button/Button';
import Card from '../Card/Card';
const ModalCard = (props) => {
	return (
		<Card className={`${styles.modal} ${props.className}`}>
			{props.children}
			{/* <header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>{props.message}</div>
			<footer className={`actions`}>
				<button onClick={props.onConfirm}>
					{props.btnConfirmLabel}
				</button>
				{props.onSubmit && (
					<button type='submit' onClick={props.onSubmit}>
						{props.onSubmitLabel}
					</button>
				)}
			</footer> */}
		</Card>
	);
};

export default ModalCard;
