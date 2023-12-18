export function Select({ option, onChange, children, className }) {
	return (
		<select
			className={className}
			value={option}
			onChange={(event) => {
				onChange(event.target.value);
			}}
		>
			{children}
		</select>
	);
}
