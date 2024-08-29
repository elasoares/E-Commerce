import styles from './Header.module.css';
import { CiLogin } from "react-icons/ci";
import React, { useState } from "react";
import { Select } from '../Select/Select';

export function Header() {
	const [option, setOption] = useState("T-Shirt");
	return (
		<>
			<header>
				<nav className={styles['header-container']}>
					<ul className={styles['header-list']}>
						<li className={styles['header-items']}>



							<Select className={styles.selecionado} option={option} onChange={(opcao) => setOption(opcao)}>
								<option className={styles.opcao} value="produto">Produtos </option>
								<option className={styles.opcao} value="t-shirt-rosa">T-Shirt rosa unissex</option>
								<option className={styles.opcao} value="t-shirt-bege">T-Shirt bege com manga longa unissex</option>
								<option className={styles.opcao} value="Gola-poloazul">Gola polo azul claro unissex</option>
								<option className={styles.opcao} value="t-shirt-branca">T-Shirt Branca unissex</option>

							</Select>



						</li>
						<li className={styles['header-items']}>Ofertas do dia</li>
						<li className={styles['header-items']}>Sobre Nós</li>
						<li className={styles['header-items']}>Contato </li>
						<CiLogin className={styles.icon} />
					</ul>
				</nav>
			</header>
		</>
	);
}