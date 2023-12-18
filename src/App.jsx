import './App.css';
import { Bar } from './componentes/Bar/Bar';
import { Header } from './componentes/Header/Header';
import { Main } from './componentes/Main/Main';
import { Container } from './componentes/Container/Container';
import { Footer } from './componentes/Footer/Footer';

export default function App() {
	return (
		<>
			<Bar />
			<Header />
			<Main />
			<Container />
			<Footer />
		</>
	)
}
