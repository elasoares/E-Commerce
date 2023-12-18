import styles from './Card.module.css';
import { Botao } from '../Botao/Botao';
import React, { useState } from "react";

export function Card({ src, alt, titulo, preco, informacaoDopreco }) {

	const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

	function toggleDoDetalhe() {
		setMostrarDetalhes(!mostrarDetalhes);
	}

	const detalhes = 'As camisetas infantis são frequentemente feitas de algodão, pois é um material macio e confortável, ideal para a pele sensível das crianças.';

	const pararagrafoDoDetalhe = mostrarDetalhes ? detalhes : null;


	return (
		<div className={styles['card-container']}>
			<div className={`${styles.card} ${styles.cardProduto} `}>

				<img className={styles.imgProduto} src={src} alt={alt} />

				<h1 className={styles.titulo}>{titulo}</h1>

				<p className={styles.paragrafo}> {informacaoDopreco} <span className={styles.precoDoProduto}>{preco}</span></p>



				<p className={styles.paragrafoDoProduto}>{pararagrafoDoDetalhe}</p>



				<div className={styles['botao-container']}>
					<Botao className={styles.botao}><a href='https://web.whatsapp.com/'>COMPRAR</a></Botao>
					<Botao onClick={toggleDoDetalhe} className={styles.botao}>MAIS DETALHES</Botao>
				</div>


			</div>
		</div>
	);
}