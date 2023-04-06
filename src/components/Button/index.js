import className from 'classnames';

function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
	...rest
}) {

	const classes = className(rest.className, 'flex items-center gap-x-2 px-5 py-2 border-2 transition-colors duration-200', {
		'border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500': primary,
		'border-gray-500 bg-gray-500 text-white hover:bg-white hover:text-gray-500': secondary,
		'border-green-500 bg-green-500 text-white hover:bg-white hover:text-green-500': success,
		'border-yellow-400 bg-yellow-400 text-white hover:bg-white hover:text-yellow-400': warning,
		'border-red-500 bg-red-500 text-white hover:bg-white hover:text-red-500': danger,
		'rounded-full': rounded,
		'!bg-white text-gray-900': outline,
		'!text-blue-500 hover:!bg-blue-500 hover:!text-white': outline && primary,
		'!text-gray-900 hover:!bg-gray-500 hover:!text-white': outline && secondary,
		'!text-green-500 hover:!bg-green-500 hover:!text-white': outline && success,
		'!text-yellow-400 hover:!bg-yellow-400 hover:!text-white': outline && warning,
		'!text-red-500 hover:!bg-red-500 hover:!text-white': outline && danger,
	});

	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	);
}

Button.propTypes = {
	checkVariationValue: ({primary, secondary, success, warning, danger}) => {
		const count = 
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger);

		if(count > 1) {
			return new Error('Only one of primary, secondary, success, warning, or danger can be true.')
		}
	}
};

export default Button;