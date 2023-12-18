import { Imagem } from '../Imagem/Imagem';
import styles from './Main.module.css';
import { Botao } from '../Botao/Botao';
import { Produtos } from '../Produtos/Produtos';

export function Main() {
	return (
		<>
			<main className={styles.mainFundo}>
				<div className={styles.cardMain}>
					<div>
						<p className={styles.paragrafoOferta}>Cofira as</p>

						<h1 className={styles.tituloOferta}><span className={styles.laranja}>O</span><span className={styles.amarelo}>f</span><span className={styles.rosa}>e</span><span className={styles.verde}>r</span><span className={styles.laranja}>t</span><span className={styles.amarelo}>a</span><span className={styles.rosa}>s</span></h1>

						<p className={styles.paragrafoOferta}>Desconto de até <span className={styles.desconto}>80% Off</span></p>
						<p className={styles.informacaoNaPropaganda}> Melhores estilos para criançada!</p>
						<Botao className={styles.botao}>Compre agora!</Botao>
					</div>

					<div className={styles.imagemMacacosBackground}>
						<Imagem className={styles.imagemMain} src={'src/componentes/Imagem/aapje.png'} alt='Elementos do Canva, imagens de macacos' /></div>
				</div>
			</main>

			<Produtos />
		</>

	);
}