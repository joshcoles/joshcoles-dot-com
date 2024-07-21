import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import BannerBackground from './components/BannerBackground';
import Description from './components/Description';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import staticData from './data.json';

function App() {
	const [data] = useState({ ...staticData });

	return (
		<>
			<BannerBackground bannerInfo={data.social} />
			<Description />
			<Services services={data.services} />
			<About />
			<Projects projects={data.projects} />
			<Contact />
		</>
	);
}

export default App;
