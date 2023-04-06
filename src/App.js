import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Navigation from './components/Navigation';
// import Link from './components/Link';
// import Route from './components/Route';

// pages
import Home from './pages/Home';
import Accordions from './pages/Accordions';
import Buttons from './pages/Buttons';
import Counters from './pages/Counters';
import Dropdowns from './pages/Dropdowns';
import Flex from './pages/Flex';
import Modals from './pages/Modals';
import Search from './pages/Search';
import Tables from './pages/Tables';


function App() {


  return (
		// <div>
		// 	<Link to="/components/accordion">Accordion</Link>
		// 	<Link to="/components/dropdown">Dropdown</Link>
		// 	<div className="routes">
		// 		<Route path="/components/accordion">
		// 			<Accordions />
		// 		</Route>
		// 		<Route path="/components/dropdown">
		// 			<Dropdowns />
		// 		</Route>
		// 	</div>
		// </div>
		<BrowserRouter className="test">
			<div className="flex gap-x-5">
				<Navigation />
				<main className="flex-[1_1_80%] p-5">
					<Routes>
						<Route path="/components/accordion" element={<Accordions />} />
						<Route path="/components/button" element={<Buttons />} />
						<Route path="/components/counter" element={<Counters />} />
						<Route path="/components/dropdown" element={<Dropdowns />} />
						<Route path="/components/flex" element={<Flex />} />
						<Route path="/components/modal" element={<Modals />} />
						<Route path="/components/search" element={<Search />} />
						<Route path="/components/table" element={<Tables />} />
						<Route exact path="/" element={<Home />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
