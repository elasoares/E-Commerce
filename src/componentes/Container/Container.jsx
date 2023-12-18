import styles from './Container.module.css';
import { Vendedor } from '../Vendedor/Vendedor';
import { Comentarios } from '../Comentarios/Comentarios';

export function Container() {
	return (

		<div className={styles['container-pai']}>
			<div className={styles['container-filho']}>
				<Vendedor />
				<Comentarios />
			</div>
		</div>
	);
}