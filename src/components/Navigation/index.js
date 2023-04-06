import { NavLink } from 'react-router-dom';
import { MdOutlineHome } from "react-icons/md";

import './navigation.scss';

function Navigation() {
	return(
		<div className="navigation flex-[0_1_20%] h-screen bg-gray-200 p-5">
			<h3 className="mb-2 text-xl font-bold">React Components</h3>
			<nav className="nav flex flex-col">
				<NavLink className={`mb-3 flex items-center ${({isActive}) => (isActive ? 'font-bold' : '')}`} to="/">
					<MdOutlineHome className="mr-0.5" />
					Home
				</NavLink>
				<NavLink className={({isActive}) => (isActive ? 'nav-link font-bold is-active' : 'nav-link')} to="/components/accordion">Accordion</NavLink>
				<NavLink className={({isActive}) => (isActive ? 'nav-link font-bold is-active' : 'nav-link')} to="/components/button">Button</NavLink>
				<NavLink className={({isActive}) => (isActive ? 'nav-link font-bold is-active' : 'nav-link')} to="/components/counter">Counter</NavLink>
				<NavLink className={({isActive}) => (isActive ? 'nav-link font-bold is-active' : 'nav-link')} to="/components/dropdown">Dropdown</NavLink>
				<NavLink className={({isActive}) => (isActive ? 'nav-link font-bold is-active' : 'nav-link')} to="/components/flex">Flex</NavLink>
				<NavLink className={({isActive}) => (isActive ? 'nav-link font-bold is-active' : 'nav-link')} to="/components/modal">Modal</NavLink>
				<NavLink className={({isActive}) => (isActive ? 'nav-link font-bold is-active' : 'nav-link')} to="/components/search">Search</NavLink>
				<NavLink className={({isActive}) => (isActive ? 'nav-link font-bold is-active' : 'nav-link')} to="/components/table">Table</NavLink>
			</nav>
		</div>
	)
}

export default Navigation;