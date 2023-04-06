import './tables.scss';

// components
import SortableTable from '../../components/SortableTable';
import Table from '../../components/Table';

function Tables() {

	const config = [
		{
			label: 'Name of Fruit',
			render: (fruit) => fruit.name,
			sortValue: (fruit) => fruit.name
		},
		{
			label: 'Color',
			render: (fruit) => <div className={`w-5 h-5 m-2 ${fruit.color}`}></div>
		},
		{
			label: 'Score',
			render: (fruit) => fruit.score,
			header: () => <th>Score</th>,
			sortValue: (fruit) => fruit.score
			// sort: (a, b) => a - b
		},
		{
			label: 'Score Squared',
			render: (fruit) => fruit.score ** 2,
			sortValue: (fruit) => fruit.score
		}
	];

	const data = [
		{ name: 'Apple', color: 'bg-red-700', score: 5 },
		{ name: 'Orange', color: 'bg-orange-400', score: 3 },
		{ name: 'Banana', color: 'bg-yellow-300', score: 1 },
		{ name: 'Lime', color: 'bg-lime-500', score: 4 },
		{ name: 'Cherry', color: 'bg-red-900', score: 2 }
	];

	const keyFn = (fruit) => {
		return fruit.name;
	}

	return(
		<div>
			<Table config={config} data={data} keyFn={keyFn} />
			<br />
			<br />
			<SortableTable data={data} config={config} keyFn={keyFn} />
		</div>
	)
}

export default Tables;