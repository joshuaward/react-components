import './accordions.scss';

// components
import Accordion from '../../components/Accordion';

function Accordions() {
	const items = [
		{ id: 1, label: 'Can I use React on a project?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam. Velit ut tortor pretium viverra suspendisse potenti. Arcu cursus vitae congue mauris rhoncus aenean vel. Mus mauris vitae ultricies leo. Sagittis vitae et leo duis ut.' },
		{ id: 2, label: 'Can I use JavaScript on a project?', content: 'Consectetur lorem donec massa sapien faucibus. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Risus ultricies tristique nulla aliquet. Tristique senectus et netus et malesuada fames ac turpis. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Lectus mauris ultrices eros in cursus turpis massa.' },
		{ id: 3, label: 'Can I use CSS on a project?', content: 'Orci ac auctor augue mauris. Maecenas pharetra convallis posuere morbi leo urna molestie. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Orci ac auctor augue mauris augue neque gravida. Nec feugiat nisl pretium fusce id. Commodo elit at imperdiet dui accumsan sit amet nulla.' },
	];



	return(
		<div className="flex flex-col gap-y-10">
			<div>
				<h2 className="text-xl font-bold">All Collapsed</h2>
				<br />
				<Accordion items={items} itemOpen={-1} />
			</div>
			<hr />
			<div>
				<h2 className="text-xl font-bold">Initial Open</h2>
				<br />
				<Accordion items={items} itemOpen={0} />
			</div>
			<hr />
			<div>
				<h2 className="text-xl font-bold">Second Open</h2>
				<br />
				<Accordion items={items} itemOpen={1} />
			</div>
			<hr />
			<div>
				<h2 className="text-xl font-bold">Third Open</h2>
				<br />
				<Accordion items={items} itemOpen={2} />
			</div>
		</div>
	)
}

export default Accordions;