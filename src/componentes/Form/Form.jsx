import { useState } from 'react';
import { Botao } from '../Botao/Botao';
import { GoSearch } from 'react-icons/go';
import styles from './Form.module.css';

export function Form({ className, type, value, placeholder }) {
	const [inputValue, setInputValue] = useState(value || ''); 

	const changeValue = (e) => {
		setInputValue(e.target.value);
	};

	const dadoSubmit = (e) => {
		e.preventDefault();
		console.log('Formulário enviado com valor:', inputValue);
	};

	return (
		<form onSubmit={dadoSubmit}>
			<input
				className={className}
				type={type}
				value={inputValue}
				placeholder={placeholder}
				onChange={changeValue}
			/>
			<Botao className={styles.botao}>
				<GoSearch />
			</Botao>
		</form>
	);
}
