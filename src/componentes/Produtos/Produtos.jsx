import styles from './Produtos.module.css';
import { Card } from '../Card/Card';


const produtos = [
	{
		id: 1,
		src: 'src/componentes/Imagem/produto2.2.jpg',
		alt: 'Imagens de Freepik',
		titulo: 'T-Shirt Branca unissex',
		informacaoDopreco: 'Por',
		preco: '39,90',
		avalicaoDoProduto: '4,0',
		comentario: '3 comentários',
	},
	{
		id: 2,
		src: 'src/componentes/Imagem/produto2.3.jpg',
		alt: 'Imagens de Freepik',
		titulo: 'Gola polo azul claro unissex',
		informacaoDopreco: 'Por',
		preco: '39,90',
		avalicaoDoProduto: '4,5',
		comentario: '2 comentários',
	},
	{
		id: 3,
		src: 'src/componentes/Imagem/produto2.4.jpg',
		alt: 'Imagens de Freepik',
		titulo: 'T-Shirt bege com manga longa unissex',
		informacaoDopreco: 'Por',
		preco: '39,90',
		avalicaoDoProduto: '4,5',
		comentario: '2 comentários',

	},
	{
		id: 4,
		src: 'src/componentes/Imagem/produto2.5.jpg',
		alt: 'Imagens de Freepik',
		titulo: 'T-Shirt rosa unissex',
		informacaoDopreco: 'Por',
		preco: '39,90',
		avalicaoDoProduto: '5',
		comentario: '1 comentários',
	},
]



export function Produtos() {
	return (
		<>
			<div className={styles['card-container']}>
				{produtos.map(produto => <Card key={produto.id} {...produto} />)}
			</div>


		</>
	);
}