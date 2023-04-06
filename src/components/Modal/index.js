import { useEffect } from 'react';
import ReactDOM from 'react-dom';

// components
import Button from '../Button';
import { MdClose } from "react-icons/md";


function Modal({ onClose, children, actionBar }) {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		
		return () => {
			document.body.classList.remove('overflow-hidden');
		}
	}, [])
	return ReactDOM.createPortal(
		<div>
			<div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-90"></div>
			<div className="fixed top-2/4 inset-x-40 -translate-y-2/4 p-10 bg-white rounded">
				<div className="flex flex-col justify-between">
					{children}
					<div className="flex justify-end">
						{actionBar}
					</div>
				</div>
				<Button onClick={onClose} className="absolute top-4 right-4 !p-0 !border-0">
					<MdClose />
				</Button>
			</div>
		</div>,
		document.querySelector('.modal-container')
	)
}

export default Modal;