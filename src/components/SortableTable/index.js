import useSort from '../../hooks/useSort';

// components
import Table from '../Table';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function SortableTable(props) {
	const { data, config } = props;
	const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

	const updatedConfig = config.map((column) => {
		if(!column.sortValue) return column;

		return {
			...column,
			header: () => (
				<th className="pr-5 cursor-pointer" onClick={() => setSortColumn(column.label)}>
					<div className="flex items-center">
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			)
		}
	});

	return <Table {...props} data={sortedData} config={updatedConfig} />
}

function getIcons(label, sortBy, sortOrder) {
	if (label !== sortBy) {
		return (
			<div className="inline-flex flex-col mr-2">
				<MdKeyboardArrowUp className="translate-y-1" />
				<MdKeyboardArrowDown className="-translate-y-1" />
			</div>
		)
	}

	if (sortOrder === null) {
		return (
			<div className="inline-flex flex-col mr-2">
				<MdKeyboardArrowUp />
				<MdKeyboardArrowDown />
			</div>
		);
	} else if (sortOrder === 'asc') {
		return (
			<div className="inline-flex flex-col mr-2">
				<MdKeyboardArrowUp />
			</div>
		)
	} else if(sortOrder === 'desc') {
		return (
			<div className="inline-flex flex-col mr-2">
				<MdKeyboardArrowDown />
			</div>
		)
	}
}

export default SortableTable;