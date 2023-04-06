import { useState } from 'react';
import './accordion.scss';

// components
import { MdExpandMore } from 'react-icons/md';

function Accordion({ items, itemOpen }) {
	const [expandedIndex, setExpandedIndex] = useState(itemOpen);

	const handleClick = (nextIndex) => {
		setExpandedIndex((currentExpandedIndex) => {
			if(currentExpandedIndex === nextIndex) {
				return -1;
			} else {
				return nextIndex;
			}
		})
	} 

	const renderedItems = items.map((item,index) => {
		const isExpanded = index === expandedIndex;

		return (
			<div key={item.id} className={`accordion ${isExpanded ? 'is-expanded' : ''}`}>
				<div
					className="accordion-trigger"
					onClick={() => handleClick(index)}
				>
					<span>{item.label}</span>
					<MdExpandMore className="text-xl" />
				</div>
				{isExpanded && <div className="accordion-content">{item.content}</div>}
			</div>
		)
	})
	return(
		<div>
			{renderedItems}
		</div>
	)
}

export default Accordion;