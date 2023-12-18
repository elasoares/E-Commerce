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
								<option className={styles.opcao} value="blind-guardian">Produtos </option>
								<option className={styles.opcao} value="blind-guardian">T-Shirt rosa unissex</option>
								<option className={styles.opcao} value="iron-maiden">T-Shirt bege com manga longa unissex</option>
								<option className={styles.opcao} value="hammerfall">Gola polo azul claro unissex</option>
								<option className={styles.opcao} value="rhapsody-of-fire">T-Shirt Branca unissex</option>

							</Select>



						</li>
						<li className={styles['header-items']}>Ofertas do dia</li>
						<li className={styles['header-items']}>Sobre Nós</li>
						<li className={styles['header-items']}>Contato </li>
						<CiLogin className={styles.icon} />
					</ul>
				</nav>
			</header >
		</>
	);
}