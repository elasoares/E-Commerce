import { IoStarSharp } from 'react-icons/io5';
import styles from './UserComentarios.module.css';
import { TextArea } from '../TextArea/TextArea';
import React, { useState } from 'react';

export function UserComentarios({ srcDoProduto, alt, produto, avaliacao, comentarios }) {
	const [texto, setTexto] = useState('');
	const [comentariosAtual, setComentariosAtual] = useState(0);

	const changeTexto = (value) => {
		setTexto(value);
	};

	function changeComentarioAtual() {
		alert('Seu comentário enviado: ' + texto);
		setTexto('');
		setComentariosAtual(comentariosAtual + 1);
	}

	const comentarioAtual = comentarios[comentariosAtual];

	return (
		<div className={styles.userComentariosContainer}>
			<div className={styles.userComentariosInfo}>
				<div className={styles.containerDoProduto}>
					<img className={styles.imgDoProduto} src={srcDoProduto} alt={alt} />
					<p>{produto}</p>
				</div>

				{comentarioAtual && (
					<div className={styles.userComentariosTexto}>
						<div className={styles.containerNome}>
							<img className={styles.userComentariosAvatar} src={comentarioAtual.src} alt={`Avatar de ${comentarioAtual.alt}`} />
							<div className={styles.container}>
								<div className={styles.containerNome}>
									<h1 className={styles.userComentariosName}> {comentarioAtual.nome}</h1> {avaliacao} <IoStarSharp className={styles.stars} />
								</div>
								<p className={styles.infoDaPublicação}>Publicado em: {comentarioAtual.data}</p>
								<p className={styles.infoDaPublicação}> <span className={styles.userComentariosName}>Mensagem: </span>{comentarioAtual.mensagem}</p>
							</div>
						</div>
					</div>
				)}
			</div>

			<div>
				{comentarioAtual && (
					<div className={styles.containerNome}>
						<TextArea
							label="Comentários:"
							placeholder="Comente aqui..."
							value={texto}
							onChange={(e) => changeTexto(e.target.value)}
						/>
						<button className={styles.enviarButton} onClick={changeComentarioAtual}>Enviar</button>
					</div>
				)}

				{texto && <p className={styles.seuComentario}>Seu comentário: {texto}</p>}
			</div>
		</div>
	);
}
