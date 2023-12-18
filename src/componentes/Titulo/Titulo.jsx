export function Titulo({ children, className, onClick}) {
	return (
		<h1 onClick={(event)=> onClick(event.target.value)} className={className}>{children}</h1>

	);

}