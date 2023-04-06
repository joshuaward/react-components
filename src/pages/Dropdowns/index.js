import { useState } from 'react';
import './dropdowns.scss';

// components
import Dropdown from '../../components/Dropdown';

function Dropdowns() {
	const [selection, setSelection] = useState(null);

	const options = [
		{ id: 1, label: 'Extra Small', value: 'xs' },
		{ id: 2, label: 'Small', value: 'sm' },
		{ id: 3, label: 'Medium', value: 'md' },
		{ id: 4, label: 'Extra Medium', value: 'xm' },
		{ id: 5, label: 'Large', value: 'lg' },
		{ id: 6, label: 'Extra Large', value: 'xl' },
		{ id: 7, label: 'XX Large', value: 'xxl' },
	];

	const handleSelect = (option) => {
		setSelection(option);
	}

	return(
		<div className="flex">
			<Dropdown options={options} value={selection} onChange={handleSelect} />
		</div>
	)
}

export default Dropdowns;