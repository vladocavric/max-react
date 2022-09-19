import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalCard from './ModalCard';

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalCard
					// title={props.title}
					// message={props.message}
					// onConfirm={props.onConfirm}
					// btnConfirmLabel={props.btnConfirmLabel}
					// onSubmit={props.onSubmit}
					// onSubmitLabel={props.onSubmitLabel}
					className={props.className}
					>
					{props.children}
				</ModalCard>,
				document.getElementById('modal-root')
			)}
		</>
	);
};

export default Modal;
