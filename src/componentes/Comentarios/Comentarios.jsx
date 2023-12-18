import styles from './Comentarios.module.css';
import { IoStarSharp } from "react-icons/io5";
import { useState } from 'react';
import { Titulo } from '../Titulo/Titulo';
import { UserComentarios } from '../UserComentarios/UserComentarios';


const comentariosEAvaliacaoDoProdutos = [
	{
		id: 1,
		srcDoProduto: 'src/componentes/Comentarios/img/foto1-avaliacao.jpg',
		alt: 'Imagens de Freepik',
		infoDoProduto: 'T-Shirt Branca unissex',
		comentarios: [
			{ src: 'src/componentes/UserComentarios/comentario2.jpg', nome: 'Ana Silva', data: '01-01-2023', mensagem: 'Bom produto!', },
			{ src: 'src/componentes/UserComentarios/comentario1.jpg', nome: 'João Oliveira', data: '01-02-2023', mensagem: 'Ótimo serviço!', },
			{ src: 'src/componentes/UserComentarios/comentario3.jpg', nome: 'Maria Pereira', data: '01-05-2023', mensagem: 'Entrega rápida.', }
		],
		avaliacao: '4,5',
	},
	{
		id: 2,
		srcDoProduto: 'src/componentes/Imagem/produto2.3.jpg',
		alt: 'Imagens de Freepik',
		infoDoProduto: 'Gola polo azul claro unissex',
		comentarios: [
			{ src: 'src/componentes/UserComentarios/comentario4.jpg', nome: 'Fernando Santos', data: '02-06-2023', mensagem: 'Gostei muito!', },
			{ src: 'src/componentes/UserComentarios/comentario5.jpg', nome: 'Juliana Lima', data: '02-08-2023', mensagem: 'Boa qualidade.', }
		],
		avaliacao: '5,0',
	},
	{
		id: 3,
		srcDoProduto: 'src/componentes/Imagem/produto2.4.jpg',
		alt: 'Imagens de Freepik',
		infoDoProduto: 'T-Shirt bege com manga longa unissex',
		comentarios: [
			{ src: 'src/componentes/UserComentarios/comentario6.jpg', nome: 'Ricardo Almeida', data: '03-09-2023', mensagem: 'Amei demais!', },
			{ src: 'src/componentes/UserComentarios/comentario7.jpg', nome: 'Patricia Souza', data: '03-10-2023', mensagem: 'Recomendo.', }
		],
		avaliacao: '4,0',
	},
	{
		id: 4,
		srcDoProduto: 'src/componentes/Imagem/produto2.5.jpg',
		alt: 'Imagens de Freepik',
		infoDoProduto: 'T-Shirt rosa unissex',
		comentarios: [
			{ src: 'src/componentes/UserComentarios/comentario8.jpg', nome: 'Amanda Silva', data: '04-11-2023', mensagem: 'Produto ok.', }
		],
		avaliacao: '3,0',
	},
];


export function Comentarios() {

	const [comentariosVisiveis, setComentarios] = useState(false);

	function valorAvaliacao() {
		setComentarios(!comentariosVisiveis);
	}


	const cometarioVisivelOuNao = comentariosVisiveis
		? comentariosEAvaliacaoDoProdutos.map((produto) => (
			<UserComentarios
				key={produto.id}
				avatar={produto.src}
				nome={produto.nome}
				avaliacao={produto.avaliacao}
				comentarios={produto.comentarios}
				srcDoProduto={produto.srcDoProduto}
				produto={produto.infoDoProduto}
				alt={produto.alt}
			/>
		))
		: null;



	return (


		<div>
			<div className={styles['container-titulo']}>
				<Titulo className={styles.titulo} onClick={valorAvaliacao}>
					Comentarios dos produtos
				</Titulo>
			</div>
			<div>{cometarioVisivelOuNao}</div>
		</div>



	);
}