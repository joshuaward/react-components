import './counters.scss';

// components
import Counter from '../../components/Counter';

function Counters() {

	return(
		<div>
			<Counter initialCount={0} />
		</div>
	)
}

export default Counters;