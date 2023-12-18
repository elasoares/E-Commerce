import { Form } from '../Form/Form';
import styles from './Bar.module.css';
import { Titulo } from '../Titulo/Titulo';
import { LuShoppingCart } from "react-icons/lu";

export function Bar() {
	
	return (
		<div className={styles['bar-container']}>
			<Titulo className={styles.titulo}> Aapje </Titulo>

			<Form className={styles.inputForm} type='search' value='Pesquisar' placeholder="Pesquisar" />

			<LuShoppingCart className={styles.icon} />
		</div>


	);
}