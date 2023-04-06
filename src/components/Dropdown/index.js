import { useState, useEffect, useRef } from 'react';

// components
import Panel from '../Panel';
import { MdExpandMore } from 'react-icons/md';

function Dropdown({ options, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false);
	const divEl = useRef();
	
	useEffect(() => {
		const handler = (event) => {
			if(!divEl.current) return;
			if(!divEl.current.contains(event.target)) setIsOpen(false);
		}
		document.addEventListener('click', handler, true);

		return () => document.removeEventListener('click', handler);

	},[]);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	}

	const handleOptionClick = (option) => {
		// close dropdown
		setIsOpen(false);
		// what option did user click
		onChange(option);
	}

	const renderedOptions = options.map(option => {
		return(
			<div
				className="hover:bg-sky-100 rounded cursor-pointer p-1"
				onClick={() => handleOptionClick(option)} 
				key={option.id}>{option.label}</div>
		)
	});

  return(
		<div ref={divEl} className="relative w-48">
			<Panel className="flex justify-between items-center cursor-pointer" onClick={handleToggle}>
				<span>{value?.label || 'Select One...'}</span>
				<span>
					<MdExpandMore className={`text-xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
				</span>
			</Panel>
			{isOpen && 
				<Panel
					className="absolute top-full"
				>
					{renderedOptions}
				</Panel>
			}
		</div>
	);
}

export default Dropdown;
