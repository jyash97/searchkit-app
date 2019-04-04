import React from 'react';
import { css, injectGlobal } from 'emotion';
import { ReactiveBase } from '@appbaseio/reactivesearch';

import { URL, CRED, APP } from './constant';
import Navbar from './components/Navbar';
import Results from './components/Results';
import Filters from './components/Filters';

// eslint-disable-next-line
injectGlobal`
  body{
    margin: 0;
    background: rgba(225, 219, 233, .3);
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Noto Sans","Ubuntu","Droid Sans","Helvetica Neue",sans-serif
  }
`;

const wrapper = css`
	display: grid;
	grid-template-columns: 0.3fr 1fr;
	padding: 20px;
	grid-gap: 20px;
	@media (max-width: 1240px) {
		grid-template-columns: 0.5fr 1fr;
	}
	@media (max-width: 960px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 576px) {
		padding: 0;
		grid-template-columns: auto;
	}
`;

const App = () => {
	return (
		<ReactiveBase
			url={URL}
			credentials={CRED}
			app={APP}
			theme={{
				colors: {
					textColor: '#424242',
					primaryColor: '#08c',
				},
			}}
		>
			<Navbar />
			<div className={wrapper}>
				<Filters />
				<Results />
			</div>
		</ReactiveBase>
	);
};

export default App;
