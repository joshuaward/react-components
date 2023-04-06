import { useState } from 'react';
// import './modal.scss';

// components
import Modal from '../../components/Modal';
import Button from '../../components/Button';

function Modals() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	}

	const handleClose = () => {
		setShowModal(false);
	}

	const actionBar = <div><Button primary onClick={handleClose}>I Accept</Button></div>
	const modal = <Modal onClose={handleClose} actionBar={actionBar}>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Aliquet lectus proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut. Mus mauris vitae ultricies leo. Eu ultrices vitae auctor eu augue. Elit eget gravida cum sociis natoque penatibus et magnis. Mattis aliquam faucibus purus in massa. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Pharetra magna ac placerat vestibulum.</p>
	</Modal>

	return(
		<div>
			<Button primary onClick={handleClick} onClose={handleClose}>Open Modal</Button>
			{showModal && modal}
		</div>
	)
}

export default Modals;