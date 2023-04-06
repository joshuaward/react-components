import { Fragment } from 'react';

function Table({ config, data, keyFn }) {

	const renderedHeaders = config.map((column, index) => {
		if(column.header) {
			return <Fragment key={column.label}>{column.header()}</Fragment>;
		}
		return <th className="pr-5" key={index}>{column.label}</th>
	})

	const renderedRows = data.map(rowData => {
		const  renderedCells = config.map(column => {
			return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
		})
		return(
			<tr key={keyFn(rowData)} className="border-b">
				{renderedCells}
			</tr>
		)
	});

	return(
		<table className="table-auto border-spacing-6">
			<thead>
				<tr className="border-b-2">
					{renderedHeaders}
				</tr>
			</thead>
			<tbody>
				{renderedRows}
			</tbody>
		</table>
	)
}

export default Table;