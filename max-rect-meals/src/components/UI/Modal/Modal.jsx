import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<div className={classes.backdrop} onClick={props.onConfirm} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<div className={`${classes.modal} ${props.className}`}>
					<div className={classes.content}>
					{props.children}
					</div>
				</div>,
				document.getElementById('modal-root')
			)}
		</>
	);
};

export default Modal;
