

export function Botao({ children, onClick, className }) {

	function getValue() {
		onClick();
	}

	return (
		<button className={className} onClick={getValue}>{children}</button>


	);
}