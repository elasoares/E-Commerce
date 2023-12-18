import styles from './Vendedor.module.css';
import { Titulo } from '../Titulo/Titulo';
import { IoStarSharp } from "react-icons/io5";
import { useState } from 'react';



const dadosVendoder = [
	{
		id: 1,
		foto: 'src/componentes/Imagem/vendedor1.jpg',
		nome: 'Pedro Sampaio',
		cargo: 'Vendedor',
		email: 'tugrp@example.com',
		contato: '(85) 99111-1111',
		avaliacaoDoVendedor: '4,5',
		descricao: 'Pedro é um homem habilidoso que cria T-shirts infantis com um toque artesanal e design simples. Em sua loja, as cores sólidas são a tela perfeita para a criatividade. Ele se dedica a oferecer T-shirts confortáveis, costuradas com carinho e atenção aos detalhes. Luiz transforma a compra de T-shirts em uma experiência personalizada, garantindo que cada peça seja única, mesmo em sua simplicidade.',
	},
	{
		id: 2,
		foto: 'src/componentes/Imagem/vendedora2.jpg',
		nome: 'Sandra Rabelo',
		cargo: 'Vendedora',
		email: 'rdlnk@example.com',
		contato: '(85) 99111-1111',
		avaliacaoDoVendedor: '5,0',
		descricao: 'Sandra é uma mulher vibrante que se dedica a oferecer T-shirts infantis de cores sólidas e design minimalista. Sua paleta cuidadosamente selecionada reflete a alegria e a simplicidade da infância. Mãe atenciosa, Ana compreende a importância de peças versáteis e confortáveis para os pequenos, tornando a experiência de compra na sua loja uma celebração de cores e conforto para os pais.',
	},
	{
		id: 3,
		foto: 'src/componentes/Imagem/vendedor3.jpg',
		nome: 'Carlos Santos',
		cargo: 'Vendedor',
		email: 'mynbi@example.com',
		contato: '(85) 99111-1111',
		avaliacaoDoVendedor: '5,0',
		descricao: 'Carlos é um vendedor apaixonado por praticidade e estilo. Em sua loja, ele se destaca na oferta de T-shirts infantis de cores sólidas, sem distrações. Seu conhecimento sobre materiais suaves e duráveis garante que cada peça seja perfeita para o dia a dia das crianças. Pedro torna a escolha das T-shirts uma experiência simples e eficiente para os pais que buscam qualidade sem abrir mão do estilo.',
	},

];

export function Vendedor() {
	const [dados, setDados] = useState(false);

	function toggle() {
		setDados(!dados);
	}

	const seDadosVisiveis = dados ? dadosVendoder : null;
	return (



		<>

			<div className={styles['vendedor-dados']}>

				<Titulo onClick={toggle} className={styles.titulo}>Informações dos vendedores</Titulo>
			</div>





			{seDadosVisiveis && dadosVendoder.map(vendedores =>
				<div className={styles['container-vendedor']} key={vendedores.id}>

					<img className={styles['vendedor-imagem']} src={vendedores.foto} alt="Imagem do Freepik" />
					<div>
						<h3 className={styles['informacao-vendedor']}>{vendedores.nome}</h3>
						<div className={styles.cargoEAvaliacao}>
							<p className={styles['cargo-vendedor']}>	{vendedores.cargo}</p>

							<p className={styles['avaliacao-vendedor']}> {vendedores.avaliacaoDoVendedor} <IoStarSharp /> </p>
						</div>
						<p className={styles['descricao-vendedor']}><span className={styles['descricao-span']}> Contato:</span>	{vendedores.contato}</p>
						<p className={styles['descricao-vendedor']}><span className={styles['descricao-span']}> E-mail:</span>	{vendedores.email}</p>
						<p className={styles['descricao-vendedor']}>
							<span className={styles['descricao-span']}>Descrição do vendedor: </span>
							{vendedores.descricao}</p>
					</div>

				</div>
			)}
		</ >

	);
}